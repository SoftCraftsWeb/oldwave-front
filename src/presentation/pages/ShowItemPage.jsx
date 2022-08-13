import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { formatter, evaluateValue } from 'domain/helpers/currency-formatter';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from 'domain/config';
import { store } from 'domain/helpers/store';
import { getItem } from 'domain/reducers/item.reducer';
import { useSelector } from 'react-redux';

export default function ShowItemPage({ setIsLoading }) {
  const [imageSelected, setImageSelected] = useState('');
  const navigate = useNavigate();
  const rating = [1, 2, 3, 4, 5];
  const { item: itemId } = useParams();
  const item = useSelector((state) => state.item);

  useEffect(() => {
    store.dispatch(getItem(itemId, setIsLoading));
  }, []);

  useEffect(() => {
    if (!imageSelected.length) {
      setImageSelected(item.images ? item.images[0] : {});
      magnify('zoom', 3);
    }
  }, [item]);

  function magnify(imgID, zoom) {
    const img = document.getElementById(imgID);
    const glass = document.createElement('DIV');
    const glassComponent = document.getElementById('glass');
    const bw = 3;

    if (glassComponent) {
      glassComponent.remove();
    }

    glass.setAttribute('class', 'img-magnifier-glass');
    glass.setAttribute('id', 'glass');
    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;

    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mousemove', moveMagnifier);
    glass.addEventListener('touchmove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier);

    function moveMagnifier(e) {
      e.preventDefault();
      const position = getCursorPos(e);
      let { x, y } = position;

      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }

      glass.style.left = `${x - w}px`;
      glass.style.top = `${y - h}px`;
      glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${
        y * zoom - h + bw
      }px`;
    }
    function getCursorPos(e) {
      const event = e || window.event;
      const a = img.getBoundingClientRect();
      const x = event.pageX - a.left - window.pageXOffset;
      const y = event.pageY - a.top - window.pageYOffset;

      return { x, y };
    }
  }

  useEffect(() => {
    magnify('zoom', 3);
  }, []);

  useEffect(() => {
    detectWindowSize();
  }, []);

  function detectWindowSize() {
    magnify('zoom', 3);
  }

  window.onresize = detectWindowSize;

  return (
    <div className=' w-full my-10 gap-10 flex flex-col justify-center md:px-16'>
      <div className='flex gap-3 text-sm px-4 xl:px-0'>
        <Link to={config.routes.auth.home.path}>Inicio</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <button type='button' onClick={() => navigate(-1)}>
          {item.category_name}
        </button>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a className='font-semibold'>{item.name}</a>
      </div>
      <div className='w-full flex flex-col lg:flex-row gap-4 justify-between'>
        <div className='flex flex-col gap-4 md:shadow md:border md:border-gray-200 md:rounded-xl bg-white grow md:p-4'>
          <div className='flex flex-col xl:flex-row-reverse xl:flex-row gap-4 xl:gap-8 grow items-center justify-center'>
            <div className='menu-carousel img-magnifier-container indicator group'>
              {item.discount ? (
                <span className='indicator-item indicator-start-medium'>
                  <div className='speech-bubble items-center flex flex-col justify-center'>
                    <div className='flex items-center'>
                      <span className='text-md font-bold'>-</span>
                      <h2 className='text-2xl font-bold'>
                        {item.discount * 100}
                      </h2>
                      <span className='text-md font-bold self-start'>%</span>
                    </div>
                    <span className='text-xss'>De descuento</span>
                  </div>
                </span>
              ) : (
                ''
              )}
              <img
                id='zoom'
                className='group zoom'
                src={imageSelected.url}
                alt={item.name}
              />
            </div>
            <div className='carousel xl:carousel-vertical menu-carousel gap-2 xl:gap-0'>
              {item.images
                ? item.images.map((picture) => (
                    <button
                      type='button'
                      onClick={() => setImageSelected(picture)}
                      key={uuidv4()}
                      className={`carousel-item rounded-box h-32 w-32 overflow-hidden ${
                        picture.id === imageSelected.id
                          ? 'border-2 border-primary-700'
                          : ''
                      }`}
                    >
                      <img
                        src={picture.url}
                        alt={item.name}
                        className='w-full h-full object-cover'
                      />
                    </button>
                  ))
                : ''}
            </div>
          </div>
          <div className='flex flex-col p-12 gap-4 w-full'>
            <hr />
            <h5 className='font-bold text-gray-700'>
              Descripción del producto
            </h5>
            <p>{item.description}</p>
            <hr />
            <h5 className='font-bold text-gray-700'>Información adicional</h5>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col'>
                <h5 className='font-bold text-gray-700'>Fecha de creación:</h5>
                <span className='text-left text-gray-400 text-sm'>
                  {item.created_at}
                </span>
              </div>
              <div className='flex flex-col'>
                <h5 className='font-bold text-gray-700'>Ciudad:</h5>
                <span className='text-left text-gray-400 text-sm'>
                  {item.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full lg:w-[130rem]'>
          <div className='flex flex-col p-12 gap-3 md:border md:border-gray-200 md:rounded-xl md:shadow bg-white w-full'>
            <div className='flex flex-col gap-1 pb-4 w-full'>
              <span className='text-left font-bold text-primary-700 text-xs'>
                {item.brand}
              </span>
              <h2 className='font-bold text-gray-800 text-3xl'>{item.name}</h2>
              <div className='flex gap-4 justify-between items-center'>
                <div className='rating rating-sm'>
                  {rating.map((value) => (
                    <input
                      key={uuidv4()}
                      type='radio'
                      name='rating-8'
                      defaultChecked={value === item.rating}
                      className='mask mask-star-2 bg-yellow-400'
                    />
                  ))}
                </div>
                <h5 className='font-bold text-gray-400'>
                  {item.count_views} Visualizaciones
                </h5>
              </div>
            </div>

            {item.discount ? (
              <div>
                <h2 className='text-2xl text-gray-700 font-semibold'>
                  {formatter(evaluateValue(item.price, item.discount))}
                </h2>
                <h5 className='text-left text-gray-400 text-sm line-through'>
                  {formatter(item.price)}
                </h5>
              </div>
            ) : (
              <div className='flex justify-between'>
                <h2 className='text-2xl text-gray-700 font-semibold'>
                  {formatter(item.price)}
                </h2>
              </div>
            )}
            <div>
              <span>
                <h5 className='font-bold text-gray-700 mt-6'>
                  Stock Disponible:
                </h5>
                <span className='text-left text-gray-400 text-sm'>
                  {item.stock}
                </span>
              </span>
            </div>
            <button
              type='button'
              className='py-3 px-4 text-center w-full duration-150 ease-in-out hover:scale-105 rounded-full bg-secondary-700 text-white py-1 text-sm cursor-pointer'
            >
              Comprar ahora
            </button>
            <button
              type='button'
              className='py-3 px-4 text-center w-full duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-primary-700 border-primary-700 py-1 text-sm cursor-pointer'
            >
              Agregar al carrito
            </button>
          </div>
          <div className='flex flex-col p-8 gap-3 md:border md:border-gray-200 rounded-xl bg-white md:shadow'>
            <div className='flex flex-col gap-1'>
              <h5 className='font-bold text-gray-700 mb-6'>
                Información sobre el vendedor
              </h5>
              <div className='flex gap-4 justify-between items-center'>
                <img
                  className='h-16 w-16 rounded-full object-contain border-primary-700 border-2'
                  src={item.seller_logo}
                  alt={item.seller}
                />
                <div className='flex flex-col flex-1'>
                  <h5 className='font-bold text-gray-700'>Nombre:</h5>
                  <span className='text-left text-gray-400 text-sm'>
                    {item.seller}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

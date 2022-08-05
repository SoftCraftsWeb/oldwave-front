import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { formatter, evaluateValue } from 'domain/helpers/currency-formatter';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from 'domain/config';

const product = {
  id: 1,
  name: 'Producto prueba',
  brand: 'Apple',
  stock: 10,
  images: [
    {
      id: '1',
      url: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    },
    {
      id: '2',
      url: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    },
    {
      id: '3',
      url: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    },
    {
      id: '4',
      url: 'https://image.shutterstock.com/image-photo/laptop-blank-white-screen-isolated-260nw-1723121491.jpg',
    },
  ],
  category_name: 'Celulares',
  city: 'Medellín',
  price: 2000,
  discount: 0.3,
  currency: 'COP',
  seller: 'Pepito Perez',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  seller_logo:
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  rating: 4,
  created_at: '2022-08-01',
};

export default function ShowItemPage() {
  const [imageSelected, setImageSelected] = useState('');
  const navigate = useNavigate();
  const rating = [1, 2, 3, 4, 5];

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
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;

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
  }, [imageSelected]);

  useEffect(() => {
    detectWindowSize();
  }, []);

  function detectWindowSize() {
    magnify('zoom', 3);
  }

  window.onresize = detectWindowSize;

  useEffect(() => {
    if (!imageSelected) {
      setImageSelected(product.images[0]);
    }
  }, []);

  return (
    <div className=' w-full my-10 gap-10 flex flex-col justify-center px-16'>
      <div className='flex gap-3 text-sm'>
        <Link to={config.routes.auth.home.path}>Inicio</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <button type='button' onClick={() => navigate(-1)}>
          {product.category_name}
        </button>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a className='font-semibold'>{product.name}</a>
      </div>
      <div className='w-full flex flex-col lg:flex-row gap-4 justify-between'>
        <div className='flex flex-col gap-4 shadow border border-gray-200 rounded-xl bg-white grow p-4'>
          <div className='flex gap-8 grow items-center justify-center'>
            <div
              style={{
                height: '400px',
              }}
              className='carousel carousel-vertical'
            >
              {product.images
                ? product.images.map((picture) => {
                    return (
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
                          alt={product.name}
                          className='w-full h-full object-cover'
                        />
                      </button>
                    );
                  })
                : ''}
            </div>
            <div
              style={{
                height: '400px',
              }}
              className='img-magnifier-container indicator group'
            >
              {product.discount ? (
                <span className='indicator-item indicator-start-medium'>
                  <div className='speech-bubble items-center flex flex-col justify-center'>
                    <div className='flex items-center'>
                      <span className='text-md font-bold'>-</span>
                      <h2 className='text-2xl font-bold'>
                        {product.discount * 100}
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
                className='group'
                src={imageSelected.url}
                alt={product.name}
                width='600'
                height='400'
              />
            </div>
          </div>
          <div className='flex flex-col p-12 gap-4 w-full'>
            <hr />
            <h5 className='font-bold text-gray-700'>
              Descripción del producto
            </h5>
            <p>{product.description}</p>
            <hr />
            <h5 className='font-bold text-gray-700'>Información adicional</h5>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col'>
                <h5 className='font-bold text-gray-700'>Fecha de creación:</h5>
                <span className='text-left text-gray-400 text-sm'>
                  {product.created_at}
                </span>
              </div>
              <div className='flex flex-col'>
                <h5 className='font-bold text-gray-700'>Ciudad:</h5>
                <span className='text-left text-gray-400 text-sm'>
                  {product.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full lg:w-[130rem]'>
          <div className='flex flex-col p-12 gap-3 border border-gray-200 rounded-xl shadow bg-white w-full'>
            <div className='flex flex-col gap-1 pb-4 w-full'>
              <span className='text-left font-bold text-primary-700 text-xs'>
                {product.brand}
              </span>
              <h2 className='font-bold text-gray-800 text-3xl'>
                {product.name}
              </h2>
              <div className='flex gap-4 justify-between items-center'>
                <div className='rating rating-sm'>
                  {rating.map((value) => (
                    <input
                      key={uuidv4()}
                      type='radio'
                      name='rating-8'
                      defaultChecked={value === product.rating}
                      className='mask mask-star-2 bg-yellow-400'
                    />
                  ))}
                </div>
                <h5 className='font-bold text-gray-400'>143 Visualizaciones</h5>
              </div>
            </div>

            {product.discount ? (
              <div>
                <h2 className='text-2xl text-gray-700 font-semibold'>
                  {formatter(evaluateValue(product.price, product.discount))}
                </h2>
                <h5 className='text-left text-gray-400 text-sm line-through'>
                  {formatter(product.price)}
                </h5>
              </div>
            ) : (
              <div className='flex justify-between'>
                <h2 className='text-2xl text-gray-700 font-semibold'>
                  {formatter(product.price)}
                </h2>
              </div>
            )}
            <div>
              <span>
                <h5 className='font-bold text-gray-700 mt-6'>
                  Stock Disponible:
                </h5>
                <span className='text-left text-gray-400 text-sm'>
                  {product.stock}
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
          <div className='flex flex-col p-8 gap-3 border border-gray-200 rounded-xl bg-white shadow'>
            <div className='flex flex-col gap-1'>
              <h5 className='font-bold text-gray-700 mb-6'>
                Información sobre el vendedor
              </h5>
              <div className='flex gap-4 justify-between items-center'>
                <img
                  className='h-16 w-16 rounded-full object-contain border-primary-700 border-2'
                  src={product.seller_logo}
                  alt={product.seller}
                />
                <div className='flex flex-col flex-1'>
                  <h5 className='font-bold text-gray-700'>Nombre:</h5>
                  <span className='text-left text-gray-400 text-sm'>
                    {product.seller}
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

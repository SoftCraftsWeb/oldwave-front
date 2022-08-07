import React from 'react';
import Slider from 'presentation/components/atoms/Slider';
import config from 'domain/config';
import Carousel from 'presentation/components/atoms/Carousel';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage() {
  return (
    <div className='flex flex-col h-full w-full gap-8 justify-center'>
      <Slider slides={config.banners} />
      <div className='container px-8 self-center gap-16 flex flex-col pt-10 pb-20'>
        <div className='flex flex-col h-full w-full gap-10 text-center'>
          <h1 className='w-full font-bold text-2xl text-primary-700 title'>
            ¿Qué estás buscando hoy?
          </h1>
          <Carousel infiniteLoop>
            {config.categories.map(({ title, img }) => (
              <div
                key={uuidv4()}
                className='flex flex-col gap-2 group h-32 text-center items-center justify-center cursor-pointer'
              >
                {React.createElement(img, {
                  className:
                    'h-32 w-32 w-full group-hover:text-primary-700 text-gray-700 group-hover:border-primary-700/5 group-hover:border group-hover:shadow-md group-hover:shadow-primary-700/5 rounded-xl p-4 items-center flex justify-center',
                })}
                <div className='group-hover:text-primary-700 text-gray-600'>
                  {title}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='h-44 md:h-60 md:pl-8 items-center justify-center flex md:gap-10 p-4 overflow-hidden degrade-primary cursor-pointer flex-1 drop-shadow-lg rounded-2xl'>
            <img
              alt='banner-pc'
              className='h-full'
              src={`${config.statics}statics/discounts/pcs.png`}
            />
            <div className='stat text-white'>
              <div className='uppercase md:stat-value lg:text-sm lg:font-bold xl:stat-value text-sm font-bold'>
                Ordenadores
              </div>
              <div className='md:stat-title text-primary text-sm'>desde</div>
              <div className='md:stat-value flex items-center lg:text-sm lg:font-bold xl:stat-value text-sm font-bold'>
                <span className='text-sm'>$</span>680.000
              </div>
              <div className='md:stat-title text-primary text-sm pt-2'>
                <button
                  type='button'
                  className='py-3 w-fit px-4 text-center duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4  cursor-pointer'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/phones.png`}
              />
            </div>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/cam.png`}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-col-reverse lg:grid lg:grid-cols-2 gap-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4  cursor-pointer'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/table.png`}
              />
            </div>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/pc.png`}
              />
            </div>
          </div>
          <div className='h-44 md:h-60 items-center justify-center flex md:gap-10 p-4 overflow-hidden degrade-secondary cursor-pointer flex-1 drop-shadow-lg rounded-2xl'>
            <img
              alt='banner-cycle'
              className='h-full object-contain w-32 md:w-64'
              src={`${config.statics}statics/discounts/cycles.png`}
            />
            <div className='stat text-white'>
              <div className='md:stat-value uppercase lg:text-sm lg:font-bold xl:stat-value text-sm font-bold'>
                Bicicletas
              </div>
              <div className='md:stat-title text-primary text-sm'>desde</div>
              <div className='md:stat-value  flex items-center lg:text-sm lg:font-bold xl:stat-value text-sm font-bold'>
                <span className='text-sm'>$</span>250.000
              </div>
              <div className='md:stat-title text-primary text-sm pt-2'>
                <button
                  type='button'
                  className='py-3 w-fit px-4 text-center duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-full w-full gap-10 text-center'>
          <h1 className='w-full text-lg '>
            <span className='title-line relative'>Productos </span>
            más recientes
          </h1>
          <Carousel sm={1} height='h-full' infiniteLoop>
            {config.categories.map(() => (
              <div key={uuidv4()} className='indicator'>
                <span className='indicator-item indicator-start-medium'>
                  <div className='speech-bubble items-center flex flex-col justify-center'>
                    <div className='flex items-center'>
                      <span className='text-md font-bold'>-</span>
                      <h2 className='text-2xl font-bold'>30</h2>
                      <span className='text-md font-bold self-start'>%</span>
                    </div>
                    <span className='text-xss'>De descuento</span>
                  </div>
                </span>
                <div className='flex flex-col mx-4 h-80 w-full bg-gray-50 rounded-lg border border-gray-200 place-items-center'>
                  <div
                    style={{
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-IhFYaE_2ufNBHy77Lm50vxYPW8kkSSmuw&usqp=CAU')`,
                    }}
                    className='h-full w-full object-contain'
                  />
                  <div className='h-full flex flex-col gap-2 items-center p-3 text-xs justify-between'>
                    <div className='h-full flex flex-col gap-2 items-center p-3 text-xs'>
                      <span>Iphone 12 Pro 64GB Negro</span>
                      <span className='text-primary-700 font-semibold'>
                        Apple
                      </span>
                      <div className='flex w-full justify-between'>
                        <h2 className='text-gray-300 line-through'>
                          $ 2.800.000
                        </h2>
                        <h2 className='text-primary-700 font-bold'>
                          $ 2.300.000
                        </h2>
                      </div>
                    </div>
                    <div className='flex items-end justify-center w-full'>
                      <button
                        type='button'
                        className='py-3 font-bold w-fit px-4 text-center duration-150 ease-in-out hover:scale-105 rounded-full bg-primary-700 border text-white border-white py-1 text-sm cursor-pointer'
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Slider from 'presentation/components/atoms/Slider';
import config from 'domain/config';
import MultiSlider from 'presentation/components/atoms/MultiSlider';

export default function HomePage() {
  return (
    <div className='flex flex-col h-full w-full gap-8 justify-center'>
      <Slider slides={config.banners} />
      <div className='container px-8 self-center gap-16 flex flex-col pt-10 pb-20'>
        <div className='flex flex-col h-full w-full gap-10 text-center'>
          <h1 className='w-full font-bold text-2xl text-primary-700 title'>
            ¿Qué estás buscando hoy?
          </h1>
          <MultiSlider slides={config.categories} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='h-60 flex-1 drop-shadow-lg rounded-2xl overflow-hidden  cursor-pointer duration-300 ease-in-out hover:scale-105'>
            <img
              alt='banner-auxilar-ordenadores'
              className='h-full w-full'
              src={`${config.statics}statics/discounts/pcs.png`}
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4  cursor-pointer duration-300 ease-in-out hover:scale-105'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/phones.png`}
              />
            </div>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer duration-300 ease-in-out hover:scale-105'>
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
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4  cursor-pointer duration-300 ease-in-out hover:scale-105'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/pc.png`}
              />
            </div>
            <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer duration-300 ease-in-out hover:scale-105'>
              <img
                alt='banner-auxilar-ordenadores'
                className='h-full w-full object-contain'
                src={`${config.statics}statics/discounts/table.png`}
              />
            </div>
          </div>
          <div className='h-60 flex-1 drop-shadow-lg rounded-2xl overflow-hidden  cursor-pointer duration-300 ease-in-out hover:scale-105'>
            <img
              alt='banner-auxilar-ordenadores'
              className='h-full w-full'
              src={`${config.statics}statics/discounts/cycles.png`}
            />
          </div>
        </div>
        <div className='p-10'>
          <div className='speech-bubble items-center flex flex-col justify-center'>
            <div className='flex items-center'>
              <span className='text-md font-bold'>-</span>
              <h2 className='text-4xl font-bold'>30</h2>
              <span className='text-md font-bold self-start'>%</span>
            </div>
            <span className='text-xss'>De descuento</span>
          </div>
        </div>
      </div>
    </div>
  );
}

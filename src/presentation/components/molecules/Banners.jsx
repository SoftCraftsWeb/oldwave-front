import React from 'react';
import config from 'domain/config';

export default function MoreSearchItems() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='h-44 md:h-60 md:pl-8 items-center justify-center flex md:gap-10 p-4 overflow-hidden degrade-primary cursor-pointer flex-1 drop-shadow-lg rounded-2xl'>
          <img
            alt='banner-pc'
            className='h-full'
            src={`${config.statics}/discounts/pcs.png`}
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
              src={`${config.statics}/discounts/phones.png`}
            />
          </div>
          <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer'>
            <img
              alt='banner-auxilar-ordenadores'
              className='h-full w-full object-contain'
              src={`${config.statics}/discounts/cam.png`}
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
              src={`${config.statics}/discounts/table.png`}
            />
          </div>
          <div className='bg-gray-50 h-60 w-full drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer'>
            <img
              alt='banner-auxilar-ordenadores'
              className='h-full w-full object-contain'
              src={`${config.statics}/discounts/pc.png`}
            />
          </div>
        </div>
        <div className='h-44 md:h-60 items-center justify-center flex md:gap-10 p-4 overflow-hidden degrade-secondary cursor-pointer flex-1 drop-shadow-lg rounded-2xl'>
          <img
            alt='banner-cycle'
            className='h-full object-contain w-32 md:w-64'
            src={`${config.statics}/discounts/cycles.png`}
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
    </>
  );
}

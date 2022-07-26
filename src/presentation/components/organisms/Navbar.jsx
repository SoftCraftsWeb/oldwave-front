import React from 'react';
import config from 'domain/config';

const Navbar = () => (
  <header
    className='sticky bg-blue-300 top-0 z-10 w-full flex flex-col'
    data-dev-hint='mobile menu bar'
    id='navbar'
  >
    <div className='flex grow justify-between h-16 bg-white px-4 md:px-16 items-center'>
      <label
        htmlFor='sidebar'
        id='mobile-menu-button'
        className='md:m-2 rounded-md md:p-2  focus:outline-none lg:hidden'
      >
        <input type='text' className='hidden' id='sidebar' />
        <svg
          id='menu-open-icon'
          className='h-6 w-6 transition duration-200 ease-in-out text-primary-700'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3'
            d='M4 6h18M4 14h18M4 22h18'
          />
        </svg>
      </label>
      <img
        alt='logo'
        className='w-36 h-10'
        src={`${config.statics}statics/brand/oldwave-logo-horizontal.png`}
      />
      <div className='flex gap-3 items-center'>
        <div className='hidden md:block rounded-full bg-gray-50 px-4 py-1 text-sm cursor-pointer'>
          Registrarte o iniciar sesión
        </div>

        <div className='rounded-full hover:bg-primary-700 hover:bg-opacity-10 p-1 text-sm cursor-pointer'>
          <img
            alt='login'
            className='h-6 w-6'
            src={`${config.statics}statics/icons/icon-login.svg`}
          />
        </div>

        <div className='rounded-full relative hover:bg-primary-700 hover:bg-opacity-10 inline-flex hover:bg-gray-50 p-1 text-sm cursor-pointer'>
          <img
            alt='shopping-cart'
            className='h-6 w-6'
            src={`${config.statics}statics/icons/icon-shopping-cart.svg`}
          />
          <span className='flex absolute  h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-700 opacity-75' />
            <span className='relative inline-flex badge-secondary badge badge-xs rounded-full h-3 w-3'>
              1
            </span>
          </span>
        </div>
      </div>
    </div>
    <div className='bg-primary-700 h-16 flex items-center px-4 md:px-16 gap-2'>
      <div className='rounded-full items-center flex gap-3 bg-white px-4 py-1 text-sm text-gray-200 p-1 cursor-pointer w-full'>
        <img
          alt='search'
          className='h-4 w-4'
          src={`${config.statics}statics/icons/icon-search-bar.svg`}
        />
        Estoy Buscando...
      </div>
      <div className='hidden md:block duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'>
        <span className='px-4'>Buscar</span>
      </div>
      <div className='hidden md:block duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'>
        <div className='px-4 flex gap-2 items-center'>
          <img
            alt='filter'
            className='h-3 w-3'
            src={`${config.statics}statics/icons/icon-filter.svg`}
          />
          <span className='pr-2'>Filtros</span>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;

import React, { useEffect } from 'react';
import config from 'domain/config';
import { store } from 'domain/helpers/store';
import { getRating } from 'domain/reducers/item.reducer';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCategories } from 'domain/reducers/category.reducer';
import { Link } from 'react-router-dom';
import SearchInput from 'presentation/components/molecules/SearchInput';

export default function Navbar({ setIsLoading, setIsOpenShoppingCar }) {
  const rating = useSelector((state) => state.rating);
  const categories = useSelector((state) => state.categories);
  const car = useSelector((state) => state.car);

  useEffect(() => {
    if (!rating.length) {
      store.dispatch(getRating(setIsLoading));
    }
  }, []);

  useEffect(() => {
    if (!categories.length) {
      store.dispatch(getCategories(setIsLoading));
    }
  }, [categories]);

  return (
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
        <Link to={config.routes.auth.home.path}>
          <img
            alt='logo'
            className='w-36 h-10'
            src={`${config.statics}/brand/oldwave-logo-horizontal.png`}
          />
        </Link>
        <div className='flex gap-3 items-center'>
          <div className='hidden md:block rounded-full bg-gray-50 px-4 py-1 text-sm cursor-pointer'>
            Registrarte o iniciar sesión
          </div>

          <div className='rounded-full hover:bg-primary-700 hover:bg-opacity-10 p-1 text-sm cursor-pointer'>
            <img
              alt='login'
              className='h-6 w-6'
              src={`${config.statics}/icons/icon-login.svg`}
            />
          </div>

          <button
            onClick={() => setIsOpenShoppingCar(true)}
            type='button'
            className='inline-flex items-center transform duration-150 hover:scale-105'
          >
            <div className='rounded-full relative hover:bg-primary-700 hover:bg-opacity-10 inline-flex hover:bg-gray-50 p-1 text-sm cursor-pointer'>
              <img
                alt='shopping-cart'
                className='h-6 w-6'
                src={`${config.statics}/icons/icon-shopping-cart.svg`}
              />
              <span className='flex absolute  h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-700 opacity-75' />
                <span className='relative inline-flex badge-secondary badge badge-xs rounded-full h-3 w-3'>
                  {car.length}
                </span>
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className='lg:dropdown'>
        <SearchInput />
        <div
          tabIndex='-1'
          className='dropdown-content menu w-full px-16 hidden lg:flex '
        >
          <div className='p-8 gap-4 shadow bg-white rounded-box grid grid-cols-4'>
            <div className='border-r border-gray-200 gap-3 flex flex-col'>
              <h1 className='w-full text-md font-semibold uppercase text-primary-700'>
                Categorias Sugeridas
              </h1>
              <div className='flex flex-col'>
                {categories.slice(0, 5).map(({ name, slug }) => (
                  <Link
                    to={config.routes.auth.items.routes.categories.path.replace(
                      ':category',
                      id
                    )}
                    key={uuidv4()}
                    className='cursor-pointer hover:font-bold truncate'
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className='border-r border-gray-200 gap-3 flex flex-col'>
              <h1 className='w-full text-md font-semibold uppercase text-primary-700'>
                Productos Sugeridos
              </h1>
              <div className='flex flex-col'>
                {rating.slice(0, 5).map((item) => (
                  <a
                    key={uuidv4()}
                    className='cursor-pointer hover:font-bold truncate'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='gap-3 flex w-full col-span-2 grid grid-cols-3'>
              <div className='gap-3 flex flex-col w-full'>
                <h1 className='w-full text-md font-semibold uppercase text-primary-700'>
                  Resultados
                </h1>
                <div className='flex flex-col'>
                  <a>Realiza una busqueda</a>
                </div>
              </div>
              <div className='gap-3 flex flex-col w-full col-span-2'>
                <div className='bg-gray-50 h-60 w-full flex drop-shadow-lg rounded-2xl overflow-hidden p-4 cursor-pointer'>
                  <img
                    alt='banner-auxilar-ordenadores'
                    className='h-full w-full object-contain'
                    src={`${config.statics}/discounts/phones.png`}
                  />
                  <div className='flex flex-col justify-center'>
                    <div className='md:stat-title text-gray-700 font-semibold text-lg'>
                      iPhone 11 Morado 64Gb
                    </div>
                    <div className='md:stat-value text-primary-700 flex items-center lg:text-sm lg:font-bold xl:stat-value text-sm font-bold'>
                      <span className='text-sm'>$</span>2’800.000
                    </div>
                    <div className='md:stat-title text-primary-700 text-sm pt-2'>
                      <button
                        type='button'
                        className='py-3 text-primary-700 w-fit px-4 text-center duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border border-primary-700 py-1 text-sm cursor-pointer'
                      >
                        Comprar ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

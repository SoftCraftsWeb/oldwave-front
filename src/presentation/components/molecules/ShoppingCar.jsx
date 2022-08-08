import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { v4 as uuidv4 } from 'uuid';
import services from 'domain/services';
import CarItem from 'presentation/components/atoms/CarItem';
import config from 'domain/config';

export default function ShoppingCar({ isOpen, setIsOpen }) {
  const car = useSelector((state) => state.car);
  const fetchCar = () => store.dispatch(services.car.list);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <main
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
        isOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-500 opacity-0 translate-x-full'
      }`}
    >
      <div
        className={`w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='relative w-screen max-w-lg flex flex-col space-y-6 h-full'>
          <div className='flex justify-between items-center p-8'>
            <button
              type='button'
              onClick={setIsOpen(false)}
              className='h-6 w-6 cursor-pointer'
            >
              <img
                id='menu'
                alt='menu'
                className='h-4 w-4'
                src={`${config.statics}/icons/icon-arrow-up.svg`}
              />
            </button>
            <h2 className='text-2xl text-black font-bold'>
              Carrito de Compras
            </h2>
          </div>
          <div className='justify-between flex flex-col h-full'>
            <ul className='flex flex-col text-left px-12 overflow-y-scroll'>
              {car.map((item) => (
                <CarItem key={uuidv4()} item={item} />
              ))}
            </ul>
            <button type='button' className='btn bg-purple-600 text-white m-8'>
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
      <button
        type='button'
        className='w-screen h-full cursor-pointer'
        onClick={setIsOpen(false)}
      >
        {' '}
      </button>
    </main>
  );
}

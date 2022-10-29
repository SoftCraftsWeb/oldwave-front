import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { v4 as uuidv4 } from 'uuid';
import CarItem from 'presentation/components/atoms/CarItem';
import { getCar } from 'domain/reducers/cart.reducer';
import { getUser } from 'domain/helpers/storage';
import { useNavigate } from 'react-router-dom';
import config from 'domain/config';
import LoginForm from 'presentation/components/organisms/LoginForm';
import EmptyCar from 'presentation/components/atoms/EmptyCar';

export default function ShoppingCar({ isOpen, setIsOpen, setIsLoading }) {
  const car = useSelector((state) => state.car);
  const navigate = useNavigate();
  const fetchCar = () => store.dispatch(getCar());

  useEffect(() => {
    fetchCar();
  }, []);

  const showCarDetail = () => {
    navigate(config.routes.auth.carDetail.path);
  };

  return (
    <main
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
        isOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-500 opacity-0 translate-x-full'
      }`}
    >
      <div
        className={`right-0 absolute bg-white justify-between flex flex-col p-8 items-center min-h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-auto w-80 bg-base-100 text-base-content justify-between shadow-lg rounded-2xl 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <h2 className='text-2xl text-black font-bold'>Carrito de Compras</h2>
        <div className='justify-between flex flex-col h-full'>
          <ul className='flex flex-col text-left px-12 overflow-y-scroll'>
            {car.length ? (
              car.map((item) => <CarItem key={uuidv4()} item={item} />)
            ) : (
              <EmptyCar />
            )}
          </ul>
        </div>
        {getUser() ? (
          <button
            type='button'
            disabled={!car.length}
            onClick={() => showCarDetail()}
            className='py-3 font-bold disabled:bg-primary-300 w-fit px-4 text-center duration-150 ease-in-out enabled:hover:scale-105 rounded-full bg-primary-700 border text-white border-white py-1 text-sm cursor-pointer'
          >
            Comprar ahora
          </button>
        ) : (
          <LoginForm setIsLoading={setIsLoading} />
        )}
      </div>
      <button
        type='button'
        className='w-screen h-full cursor-pointer'
        onClick={() => setIsOpen(false)}
      >
        {' '}
      </button>
    </main>
  );
}

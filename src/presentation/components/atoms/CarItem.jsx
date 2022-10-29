import React from 'react';
import { formatter, getPrices } from 'domain/helpers/currency-formatter';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { addItem, removeItem } from 'domain/reducers/cart.reducer';

export default function CarItem({ item, big }) {
  const car = useSelector((state) => state.car);
  const addCar = () => store.dispatch(addItem(car, item));
  const remove = () => store.dispatch(removeItem(car, item));
  const prices = getPrices(item.price, item.discount);

  return !big ? (
    <div className='flex justify-between mt-6 border-b border-gray-300 pb-4'>
      <img
        className='h-20 w-20 object-cover rounded'
        src={item.tumpnail}
        alt={item.name}
      />
      <div className='mx-3 flex flex-col'>
        <h3 className='text-sm text-gray-600'>{item.name}</h3>
        <div className='flex items-center mt-2'>
          <button
            type='button'
            className='text-gray-500 focus:outline-none focus:text-gray-600'
            onClick={() => remove()}
          >
            <svg
              className='h-5 w-5'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </button>
          <span className='text-gray-700 mx-2'>{item.count}</span>
          <button
            type='button'
            className='text-gray-500 focus:outline-none focus:text-gray-600'
            disabled={item.count >= item.stock}
            onClick={() => addCar()}
          >
            <svg
              className='h-5 w-5'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </button>
        </div>
        <span className='text-gray-600 flex flex-row gap-2 w-56'>
          {prices.promotion ? (
            <div className='flex flex-col gap-1 text-start'>
              <h2 className='text-purple-600 font-bold'>
                {formatter(prices.promotion * item.count)}
              </h2>
              <h2 className='text-gray-300 text-sm line-through'>
                {formatter(prices.standard * item.count)}
              </h2>
            </div>
          ) : (
            <div className='flex gap-1 text-start'>
              <h2 className='text-purple-600 font-bold'>
                {formatter(prices.standard * item.count)}
              </h2>
            </div>
          )}
        </span>
      </div>
    </div>
  ) : (
    <div className='flex py-8 lg:py-8 border-gray-50 border-b'>
      <div className='pl-3 w-full flex flex-col lg:flex-row justify-between'>
        <div className='flex w-full gap-3'>
          <div className='w-full lg:w-4/12'>
            <img
              src={item.tumpnail}
              alt={item.name}
              className='h-36 lg:h-full object-center object-cover block rounded-full'
            />
          </div>
          <div className='flex flex-col justify-center w-full gap-3'>
            <p className='text-xs leading-3 text-gray-800 pt-4'>
              {item.ref ?? 'REF1234'}
            </p>
            <p className='text-base font-black leading-none text-gray-800'>
              {item.name}
            </p>
            <div className='flex items-center'>
              <p className='flex gap-3 items-center text-xs leading-3 text-gray-800 hover:text-red-500 cursor-pointer'>
                <svg
                  className='h-5 w-5 fill-red-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
                </svg>
                Añadir a favoritos
              </p>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-col items-end justify-center'>
          <div className='flex flex-col'>
            <span className='text-xs leading-3 text-gray-800 font-semibold pt-4'>
              Cantidad:
            </span>
            <div className='flex items-center mt-2'>
              <button
                type='button'
                className='text-gray-500 focus:outline-none focus:text-gray-600'
                onClick={() => remove()}
              >
                <svg
                  className='h-5 w-5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>
              <span className='text-gray-700 mx-2'>{item.count}</span>
              <button
                type='button'
                className='text-gray-500 focus:outline-none focus:text-gray-600'
                disabled={item.count >= item.stock}
                onClick={() => addCar()}
              >
                <svg
                  className='h-5 w-5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>
            </div>
          </div>
          <span className='text-gray-600 flex flex-row justify-end gap-2 w-56 pt-4'>
            {prices.promotion ? (
              <div className='flex flex-col gap-1 text-end'>
                <h2 className='text-purple-600 text-xl font-bold'>
                  {formatter(prices.promotion * item.count)}
                </h2>
                <h2 className='text-gray-300 text-sm line-through'>
                  {formatter(prices.standard * item.count)}
                </h2>
              </div>
            ) : (
              <div className='flex gap-1 text-end'>
                <h2 className='text-purple-600 text-xl font-bold'>
                  {formatter(prices.standard * item.count)}
                </h2>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { formatter, getPrices } from 'domain/helpers/currency-formatter';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { addItem, removeItem } from 'domain/reducers/cart.reducer';

export default function CarItem({ item }) {
  const car = useSelector((state) => state.car);
  const addCar = () => store.dispatch(addItem(car, item));
  const remove = () => store.dispatch(removeItem(car, item));
  const prices = getPrices(item.price, item.discount);

  return (
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
  );
}

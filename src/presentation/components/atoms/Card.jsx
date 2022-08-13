import React from 'react';
import { formatter, getPrices } from 'domain/helpers/currency-formatter';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { addItem } from 'domain/reducers/cart.reducer';
import { Link } from 'react-router-dom';
import config from 'domain/config';

export default function Card({ item }) {
  const car = useSelector((state) => state.car);
  const addCar = () => store.dispatch(addItem(car, item));
  const prices = getPrices(item.price, item.discount);

  return (
    <div className='indicator'>
      {prices.promotion ? (
        <span className='indicator-item indicator-start-medium'>
          <div className='speech-bubble items-center flex flex-col justify-center'>
            <div className='flex items-center'>
              <span className='text-md font-bold'>-</span>
              <h2 className='text-2xl font-bold'> {prices.percentage}</h2>
              <span className='text-md font-bold self-start'>%</span>
            </div>
            <span className='text-xss'>De descuento</span>
          </div>
        </span>
      ) : (
        ''
      )}
      <div className='flex flex-col mx-4 h-80 w-56 bg-gray-50 overflow-hidden rounded-lg border border-gray-200 place-items-center'>
        <Link
          to={config.routes.auth.items.routes.show.path.replace(
            ':item',
            item.slug
          )}
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('${item.tumpnail}')`,
          }}
          className='h-full w-full object-contain'
        />
        <div className='h-full flex flex-col gap-2 items-center p-3 text-xs justify-between'>
          <div className='h-full flex flex-col gap-2 items-center p-3 text-xs'>
            <span>{item.name}</span>
            <span className='text-primary-700 font-semibold'>{item.brand}</span>
            {prices.promotion ? (
              <div className='flex flex-col gap-2 w-full justify-between'>
                <h2 className='text-gray-400 line-through'>
                  {formatter(prices.standard)}
                </h2>
                <h2 className='text-primary-700 font-bold'>
                  {formatter(prices.promotion)}
                </h2>
              </div>
            ) : (
              <div className='flex w-full justify-center'>
                <h2 className='text-gray-400 font-semibold'>
                  {formatter(prices.standard)}
                </h2>
              </div>
            )}
          </div>
          <div className='flex items-end justify-center w-full'>
            <button
              type='button'
              onClick={() => addCar()}
              className='py-3 font-bold w-fit px-4 text-center duration-150 ease-in-out hover:scale-105 rounded-full bg-primary-700 border text-white border-white py-1 text-sm cursor-pointer'
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

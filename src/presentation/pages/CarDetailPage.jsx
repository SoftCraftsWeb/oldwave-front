import React, { useEffect, useState } from 'react';
import { store } from 'domain/helpers/store';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCar } from 'domain/reducers/cart.reducer';
import CarItem from 'presentation/components/atoms/CarItem';
import EmptyCar from 'presentation/components/atoms/EmptyCar';
import PaymentForm from 'presentation/components/organisms/PaymentForm';
import { Link } from 'react-router-dom';
import config from 'domain/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { evaluateValue, formatter } from 'domain/helpers/currency-formatter';

export default function CarDetailPage({ setIsLoading }) {
  const car = useSelector((state) => state.car);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const fetchCar = () => store.dispatch(getCar());

  useEffect(() => {
    fetchCar();
  }, []);

  useEffect(() => {
    getTotal();
  }, [car]);

  const getTotal = () => {
    let value = 0;
    let subtotalValue = 0;

    car.forEach((item) => {
      subtotalValue += Number.parseFloat(item.price);
      value += Number.parseFloat(
        evaluateValue(item.price, item.discount ?? 0) ?? 0
      );
    });
    setSubtotal(subtotalValue);
    setTotal(value);
  };

  return (
    <div className='flex flex-col px-10 lg:px-0 lg:flex-row w-full justify-center'>
      <div className='flex w-full flex-col lg:px-10 my-10'>
        <div className='flex gap-3 text-sm lg:px-8'>
          <Link to={config.routes.auth.home.path}>Inicio</Link>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <a className='font-semibold'>Mi carrito</a>
        </div>
        <div className='lg:px-10 py-4 overflow-auto lg:h-[35rem] relative'>
          {car.length ? (
            car.map((item) => <CarItem big key={uuidv4()} item={item} />)
          ) : (
            <EmptyCar big />
          )}
        </div>
      </div>
      {car.length ? (
        <div className='w-full lg:w-1/3 border-gray-100 lg:border-l-2 h-full'>
          <div className='flex flex-col justify-end h-full lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6'>
            <div className='text-3xl font-black'>Factura</div>
            <div>
              <div className='flex items-center justify-between pt-16'>
                <p className='text-base leading-none text-gray-800'>Subtotal</p>
                <p className='text-base leading-none text-gray-800'>
                  {formatter(subtotal)}
                </p>
              </div>
              <div className='flex items-center justify-between pt-5'>
                <p className='text-base leading-none text-gray-800'>
                  Promociones
                </p>
                <p className='text-base leading-none text-gray-800'>
                  {formatter(subtotal - total)}
                </p>
              </div>
              <div>
                <div className='flex items-center pb-6 justify-between lg:pt-5 pt-20'>
                  <p className='text-xl leading-normal text-gray-800'>Total</p>
                  <p className='text-xl font-bold leading-normal text-right text-gray-800'>
                    {formatter(total)}
                  </p>
                </div>
              </div>
              <PaymentForm setIsLoading={setIsLoading} />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

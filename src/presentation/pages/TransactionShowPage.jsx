import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import config from 'domain/config';
import { getUser } from 'domain/helpers/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { store } from 'domain/helpers/store';
import { getTransaction } from 'domain/reducers/transaction.reducer';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { formatter, getPrices } from 'domain/helpers/currency-formatter';

const STATUSES = {
  APPROVED: {
    title: 'Aprobado',
  },
  PENDING: {
    title: 'Pendiente',
  },
  REJECTED: {
    title: 'Rechazado',
  },
  FAILED: {
    title: 'Fallido',
  },
};

export default function TransactionsPage({ setIsLoading }) {
  const user = getUser();
  const { transaction: transactionReference } = useParams();
  const transaction = useSelector((state) => state.transaction);

  useEffect(() => {
    store.dispatch(getTransaction(transactionReference, setIsLoading));
  }, []);

  const evaluePrice = (item) => {
    const prices = getPrices(item.item.price, item.item.discount);

    return prices.promotion ? (
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
    );
  };
  return (
    <div className=' w-full my-10 gap-10 flex flex-col justify-center md:px-16'>
      <div className='flex gap-3 text-sm px-4 xl:px-0'>
        <Link to={config.routes.auth.home.path}>Inicio</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <Link to={config.routes.auth.transactions.path}>{user.user.name}</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a className='font-semibold'>{transaction.reference}</a>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col p-12 gap-3 md:border md:border-gray-200 md:rounded-xl md:shadow bg-white w-full'>
          <div className='flex justify-between pb-10'>
            <div className='flex flex-col gap-1 pb-4 w-full'>
              <h2 className='font-bold text-gray-800 text-3xl'>
                Detalle de la transacción
              </h2>
              <div className='flex gap-4 justify-between items-center'>
                <h5 className='font-bold text-gray-400'>
                  {transaction.reference}
                </h5>
              </div>
              <div>
                <span
                  className={`${(
                    transaction.status ?? ''
                  ).toLowerCase()} py-1 px-3 rounded-full text-xs`}
                >
                  {(STATUSES[transaction.status] ?? {}).title}
                </span>
              </div>
            </div>

            <img
              alt='logo'
              className='w-36 h-10'
              src={`${config.statics}/brand/oldwave-logo-horizontal.png`}
            />
          </div>
          <div className='flex flex-col pb-10'>
            <h2 className='font-bold text-gray-800 text-xl'>
              Detalles del envío
            </h2>
            <div className='flex gap-2'>
              <span className='font-semibold'>Nombre del destinatario:</span>
              {transaction.name}
            </div>
            <div className='flex gap-2'>
              <span className='font-semibold'>Email:</span>
              {transaction.email}
            </div>
            <div className='flex gap-2'>
              <span className='font-semibold'>Dirección:</span>
              {transaction.address} - {transaction.city} - Colombia
            </div>
          </div>
          <div className='flex flex-col py-10 border-top border-t-2 border-gray-100'>
            <h2 className='font-bold text-gray-800 text-xl'>Items:</h2>
            {transaction.shopping_car_items &&
            transaction.shopping_car_items.length
              ? transaction.shopping_car_items.map((item) => (
                  <div
                    key={uuidv4()}
                    className='flex py-8 lg:py-8 border-gray-50 border-b'
                  >
                    <div className='pl-3 w-full flex flex-col lg:flex-row justify-between'>
                      <div className='flex w-full gap-3'>
                        <div className='w-full lg:w-4/12'>
                          <img
                            src={item.item.tumpnail}
                            alt={item.item.name}
                            className='h-36 lg:h-full object-center object-cover block rounded-full'
                          />
                        </div>
                        <div className='flex flex-col justify-center w-full gap-3'>
                          <p className='text-xs leading-3 text-gray-800 pt-4'>
                            {item.item.ref ?? 'REF1234'}
                          </p>
                          <p className='text-base font-black leading-none text-gray-800'>
                            {item.item.name}
                          </p>
                          <div className='flex flex-col text-base'>
                            <span className='text-xs leading-3 text-gray-800 font-semibold pt-4'>
                              Cantidad:
                            </span>
                            <span className='text-gray-700 mx-2'>
                              {item.count}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className='text-gray-600 flex flex-row justify-end gap-2 w-56 pt-4'>
                        {evaluePrice(item)}
                      </span>
                    </div>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from 'domain/config';
import { getUser } from 'domain/helpers/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import EmptyTransaction from 'presentation/components/atoms/EmptyTransaction';
import { store } from 'domain/helpers/store';
import { getTransactions } from 'domain/reducers/transaction.reducer';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const STATUSES = {
  COMPLETED: {
    title: 'Completado',
  },
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

  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    store.dispatch(getTransactions(setIsLoading));
  }, []);

  const getStatus = (status) => {
    const statusData = STATUSES[status];
    return (
      <span
        className={`${status.toLowerCase()} py-1 px-3 rounded-full text-xs`}
      >
        {statusData.title}
      </span>
    );
  };

  return (
    <div className=' w-full my-10 gap-10 flex flex-col justify-center md:px-16'>
      <div className='flex gap-3 text-sm px-4 xl:px-0'>
        <Link to={config.routes.auth.home.path}>Inicio</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a className='font-semibold'>{user.user.name}</a>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col p-12 gap-3 md:border md:border-gray-200 md:rounded-xl md:shadow bg-white w-full'>
          <div className='flex flex-col gap-1 pb-4 w-full'>
            <h2 className='font-bold text-gray-800 text-3xl'>Mis pedidos</h2>
            <div className='flex gap-4 justify-between items-center'>
              <h5 className='font-bold text-gray-400'>{user.user.name}</h5>
            </div>
            {transactions.length ? (
              <div className='bg-white shadow-md rounded my-6'>
                <table className='table-auto w-full'>
                  <thead>
                    <tr className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
                      <th className='py-3 px-6 text-left'>Referencia</th>
                      <th className='py-3 px-6 text-center'>
                        Cantidad de productos
                      </th>
                      <th className='py-3 px-6 text-center'>
                        Fecha de creación
                      </th>
                      <th className='py-3 px-6 text-center'>
                        Fecha de actualización
                      </th>
                      <th className='py-3 px-6 text-center'>Estado</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 text-sm font-light'>
                    {transactions.map((transaction) => (
                      <tr
                        key={uuidv4()}
                        className='border-b border-gray-200 bg-white hover:bg-gray-100'
                      >
                        <td className='py-3 px-6 text-left'>
                          <div className='flex items-center hover:text-primary-700'>
                            <div className='w-4 mr-2'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                />
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                />
                              </svg>
                            </div>
                            <Link
                              to={config.routes.auth.transactions_show.path.replace(
                                ':transaction',
                                transaction.reference
                              )}
                              className='font-bold cursor-pointer'
                            >
                              {transaction.reference}
                            </Link>
                          </div>
                        </td>
                        <td className='py-3 px-6 text-center'>
                          <div className='flex items-center justify-center'>
                            <span>{transaction.shopping_car_items.length}</span>
                          </div>
                        </td>
                        <td className='py-3 px-6 text-center'>
                          {transaction.created_at}
                        </td>
                        <td className='py-3 px-6 text-center'>
                          {transaction.updated_at}
                        </td>
                        <td className='py-3 px-6 text-center'>
                          {getStatus(transaction.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyTransaction />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

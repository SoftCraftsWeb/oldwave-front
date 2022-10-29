import React, { useState } from 'react';
import { getUser } from 'domain/helpers/storage';

export default function PaymentForm({ setIsLoading }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [document, setDocument] = useState('');
  const [documentType, setDocumentType] = useState('');

  return (
    <>
      <label
        htmlFor='modal-payment'
        className='w-full py-3 font-bold px-4 text-center  disabled:bg-primary-300 duration-150 ease-in-out enabled:hover:scale-105 rounded-full bg-primary-700 border text-white border-white py-1 text-sm cursor-pointer'
      >
        Comprar ahora
      </label>
      <input type='checkbox' id='modal-payment' className='modal-toggle' />
      <label
        htmlFor='modal-payment'
        className='modal modal-bottom sm:modal-middle cursor-pointer'
      >
        <div className='modal-box'>
          <div className='mb-7'>
            <h3 className='font-semibold text-xl'>Información Básica</h3>
          </div>
          <div className='flex flex-col gap-3 pb-3'>
            <input
              className='w-full text-sm px-4 py-4 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
              type='text'
              defaultValue={getUser().user.name}
              onChange={(event) => setName(event.target.value)}
              placeholder='Nombre'
            />
            <input
              className='w-full text-sm px-4 py-4 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
              type='text'
              defaultValue={getUser().user.email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Correo Electrónico'
            />
            <div className='flex flex-col lg:flex-row gap-3'>
              <select
                placeholder='Ciudad'
                onChange={(event) => setCity(event.target.value)}
                className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
              >
                <option value='medellin'>Medellín</option>
                <option value='bogota'>Bogotá</option>
              </select>
              <input
                placeholder='Dirección'
                onChange={(event) => setAddress(event.target.value)}
                type='text'
                className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
              />
            </div>
            <input
              placeholder='Telefono'
              onChange={(event) => setPhone(event.target.value)}
              type='text'
              className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
            />
            <div className='flex flex-col lg:flex-row gap-3'>
              <select
                placeholder='Ciudad'
                onChange={(event) => setDocumentType(event.target.value)}
                className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
              >
                <option value='cc'>Cedula de ciudadania</option>
                <option value='ce'>Cedula de extranjeria</option>
              </select>
              <input
                placeholder='Documento'
                onChange={(event) => setDocument(event.target.value)}
                type='text'
                className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
              />
            </div>
          </div>
          <div className='w-full justify-center'>
            <button
              type='submit'
              className='block w-full duration-150 p-6 ease-in-out hover:scale-[1.02] rounded-lg bg-primary-700 border text-white border-white py-2 text-sm cursor-pointer'
            >
              Pagar
            </button>
          </div>
        </div>
      </label>
    </>
  );
}

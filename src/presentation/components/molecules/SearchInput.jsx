import React, { useEffect, useState } from 'react';
import history from 'domain/helpers/history';
import config from 'domain/config';
import { useSelector } from 'react-redux';
import { searchState } from 'domain/reducers/search.reducer';
import { useLocation, useParams } from 'react-router';

export default function SearchInput() {
  const { category } = useParams();
  const search = useSelector((state) => state.search);
  const [input, setInput] = useState('');
  const component = useLocation().search;

  useEffect(() => {
    const query = new URLSearchParams(component).get('q');
    searchState(query);
    setInput(query ?? search);
  }, []);

  const submitAction = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    history.push(
      `${config.routes.auth.items.path}${category ?? ''}?q=${input}`
    );
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    await setInput('');
  };

  return (
    <form
      onSubmit={submitAction}
      className='bg-primary-700 h-16 flex items-center px-4 md:px-16 gap-2'
    >
      <div className='relative rounded-full items-center flex gap-5 bg-white px-4 py-1 text-sm text-gray-500 p-1 cursor-pointer w-full'>
        <input
          type='text'
          className='relative border-0 h-full w-full ml-6 focus:outline-0 hover:outline-0 active:outline-0'
          placeholder='Estoy Buscando...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={async (event) => {
            if (event.key === 'Enter') {
              await submitAction(event);
            }
          }}
        />

        <label
          htmlFor='menu'
          tabIndex='-1'
          className='hidden lg:flex gap-2 cursor-pointer text-primary-700 px-4  border-gray-200 border-l-2 w-64 flex justify-center items-center'
        >
          <input type='text' className='hidden' id='menu' />
          Todas las categorias
          <img
            id='menu'
            alt='menu'
            className='h-4 w-4'
            src={`${config.statics}/icons/icon-arrow-up.svg`}
          />
        </label>
        <img
          alt='search'
          className='h-4 w-4 absolute'
          src={`${config.statics}/icons/icon-search-bar.svg`}
        />
      </div>
      <button
        type='submit'
        className='hidden md:block duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'
      >
        <span className='px-4'>Buscar</span>
      </button>
      <div className='hidden md:block duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'>
        <div className='px-4 flex gap-2 items-center'>
          <img
            alt='filter'
            className='h-3 w-3'
            src={`${config.statics}/icons/icon-filter.svg`}
          />
          <span className='pr-2'>Filtros</span>
        </div>
      </div>
    </form>
  );
}

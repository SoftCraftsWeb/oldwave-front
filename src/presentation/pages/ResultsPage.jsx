import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from 'presentation/components/atoms/Card';
import { useLocation, useParams } from 'react-router';
import { store } from 'domain/helpers/store';
import { useSelector } from 'react-redux';
import { searchItems } from 'domain/reducers/item.reducer';
import { searchState } from 'domain/reducers/search.reducer';

export default function ResultsPage({ setIsLoading }) {
  const { category } = useParams();
  const items = useSelector((state) => state.items);
  const search = useSelector((state) => state.search);
  const paging = useSelector((state) => state.paging);
  const component = useLocation().search;

  useEffect(() => {
    const query = new URLSearchParams(component).get('q');
    searchState(query);
    store.dispatch(
      searchItems(search ?? query, category, paging, setIsLoading)
    );
  }, []);

  return (
    <div className='flex gap-6 w-screen my-10 flex justify-center px-16'>
      <div className='flex-col w-64 hidden md:flex gap-4'>
        <div className='font-bold text-md'>Filtros</div>
        <hr />
        <div className='text-md'>Tipo de producto</div>
        <div className='flex-col flex gap-4 text-sm'>
          <div className='flex gap-4'>
            <input type='checkbox' className='checkbox checkbox-md' />
            Iphone 11
          </div>
          <div className='flex gap-4'>
            <input type='checkbox' className='checkbox checkbox-md' />
            Iphone Pro
          </div>
          <div className='flex gap-4'>
            <input type='checkbox' className='checkbox checkbox-md' />
            Iphone 8 Plus
          </div>
        </div>
        <div className='text-md'>Marcas</div>
        <div className='flex-col flex gap-4 text-sm'>
          <div className='flex gap-4'>
            <input type='checkbox' className='checkbox checkbox-md' />
            Samsumg
          </div>
          <div className='flex gap-4'>
            <input type='checkbox' className='checkbox checkbox-md' />
            Iphone
          </div>
          <div className='flex gap-4'>
            <input type='checkbox' className='checkbox checkbox-md' />
            Iphone 8 Plus
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 self-center'>
          {items.map((product) => (
            <Card key={uuidv4()} className='px-10 md:px-0' item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

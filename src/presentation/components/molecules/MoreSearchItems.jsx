import React, { useEffect } from 'react';
import { store } from 'domain/helpers/store';
import { getRating } from 'domain/reducers/item.reducer';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Card from 'presentation/components/atoms/Card';
import Carousel from 'presentation/components/atoms/Carousel';

export default function MoreSearchItems({ setIsLoading }) {
  const rating = useSelector((state) => state.rating);

  useEffect(() => {
    store.dispatch(getRating(setIsLoading));
  }, []);

  return (
    <div className='flex flex-col h-full w-full gap-10 text-center'>
      <h1 className='w-full text-lg '>
        <span className='title-line relative'>Productos </span>
        más recientes
      </h1>
      <Carousel xl={5} sm={1} height='h-full' infiniteLoop>
        {rating.map((item) => (
          <Card key={uuidv4()} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

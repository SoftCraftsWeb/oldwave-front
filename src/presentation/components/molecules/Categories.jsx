import React from 'react';
import Carousel from 'presentation/components/atoms/Carousel';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import config from 'domain/config';

export default function Categories() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className='flex flex-col h-full w-full gap-10 text-center'>
      <h1 className='w-full font-bold text-2xl text-primary-700 title'>
        ¿Qué estás buscando hoy?
      </h1>
      <Carousel infiniteLoop>
        {categories.map(({ name, slug, id }) => (
          <Link
            to={config.routes.auth.items.routes.categories.path.replace(
              ':category',
              id
            )}
            key={uuidv4()}
            className='flex flex-col gap-2 group h-32 text-center items-center justify-center cursor-pointer'
          >
            {React.createElement(
              require(`presentation/components/atoms/icons/Icon${slug}.jsx`)
                .default,
              {
                className:
                  'h-32 w-32 w-full group-hover:text-primary-700 text-gray-700 group-hover:border-primary-700/5 group-hover:border group-hover:shadow-md group-hover:shadow-primary-700/5 rounded-xl p-4 items-center flex justify-center',
              }
            )}
            <div className='group-hover:text-primary-700 text-gray-600'>
              {name}
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

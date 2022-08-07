import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from 'presentation/components/atoms/Card';

const PRODUCTS = [
  {
    id: 1,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 2,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 3,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    discount: 0.3,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 4,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 5,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 6,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 120900,
    discount: 0.1,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 1,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 2,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 3,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    discount: 0.3,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 4,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 5,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 6,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 120900,
    discount: 0.1,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 1,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 2,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 3,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    discount: 0.3,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 4,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 5,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 2000,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
  {
    id: 6,
    name: 'Producto prueba',
    brand: 'Apple',
    image: 'https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg',
    city: 'Medellín',
    price: 120900,
    discount: 0.1,
    currency: 'COP',
    seller: 'Pepito Perez',
    rating: 5,
  },
];

export default function ResultsPage() {
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
          {PRODUCTS.map((product) => (
            <Card key={uuidv4()} className='px-10 md:px-0' product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

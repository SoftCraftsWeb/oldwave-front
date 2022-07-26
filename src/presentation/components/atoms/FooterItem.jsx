import React from 'react';

export default function FooterItem({ title, items, sm = false }) {
  return (
    <div>
      <div className='hidden md:block w-full px-4'>
        <h2
          className='title-font font-black tracking-widest text-xl mb-3 text-primary-700'
          dangerouslySetInnerHTML={{ __html: title }} // eslint-disable-line react/no-danger
        />
        <nav className='list-none mb-10'>
          {items.map((item) => (
            <li key={item}>
              <a className='hover:text-gray-300' href='/'>
                {item}
              </a>
            </li>
          ))}
        </nav>
      </div>

      <div className='block md:hidden w-full px-4'>
        <div className='collapse collapse-arrow'>
          <input type='checkbox' />
          <div className='collapse-title border-b border-b-gray-200'>
            <h2
              className={`title-font tracking-widest ${
                sm
                  ? 'font-semibold text-md text-gray-700'
                  : 'font-black  text-xl text-primary-700'
              }`}
              dangerouslySetInnerHTML={{ __html: title }} // eslint-disable-line react/no-danger
            />
          </div>
          <div className='collapse-content pb-0'>
            <p>
              {items.map((item) => (
                <li key={item} className='list-none py-2'>
                  <a className='hover:text-gray-300' href='/'>
                    {item}
                  </a>
                </li>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

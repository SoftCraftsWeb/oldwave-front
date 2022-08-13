import React from 'react';
import config from 'domain/config';
import FooterItem from 'presentation/components/atoms/FooterItem';

export default function Sidebar() {
  return (
    <div className='md:hidden drawer-side shadow-lg'>
      <label htmlFor='sidebar' className='md:hidden block drawer-overlay'>
        <input id='sidebar' type='checkbox' className='drawer-toggle' />
      </label>
      <ul className='md:hidden menu px-4 py-10 overflow-y-auto w-80 md:w-64 bg-base-100 text-base-content justify-between shadow-lg rounded-2xl'>
        <span className='logo self-center'>
          <img
            alt='logo'
            src={`${config.statics}/brand/oldwave-logo-vertical.png`}
          />
        </span>
        <div className='h-80 overflow-y-scroll'>
          {config.footer.map((item) => (
            <FooterItem
              sm
              title={item.title}
              key={item.title}
              items={item.items}
            />
          ))}
        </div>
        <div className='flex self-center gap-2'>
          {Object.keys(config.social_networks).map((network) => (
            <a
              className='h-10 w-10 cursor-pointer transform hover:scale-105'
              key={network}
              href={config.social_networks[network]}
            >
              <img
                alt={network}
                src={`${config.statics}/icons/icon-${network}.svg`}
              />
            </a>
          ))}
        </div>
      </ul>
    </div>
  );
}

import React from 'react';
import FooterItem from 'presentation/components/atoms/FooterItem';
import config from 'domain/config';

export default function Footer() {
  return (
    <footer className='body-font font-helvetica w-full'>
      <div className='container py-14 px-2 md:px-8 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='md:flex-grow flex flex-col md:flex-row md:flex-wrap justify-center gap-10 md:gap-20 text-left'>
          <img
            alt='logo'
            className='logo hidden md:block '
            src={`${config.statics}statics/brand/oldwave-logo-vertical.png`}
          />
          {config.footer.map((item, key) => {
            const data = (
              <FooterItem
                title={item.title}
                key={item.title}
                items={item.items}
              />
            );
            let networks = null;
            if (key === config.footer.length - 1) {
              networks = (
                <div className='hidden md:block mt-5 md:mt-0 px-4'>
                  <h2 className='title-font font-black tracking-widest text-xl mb-3 text-primary-700'>
                    Redes Sociales
                  </h2>
                  <div className='flex gap-2'>
                    {Object.keys(config.social_networks).map((network) => {
                      return (
                        <a
                          className='h-10 w-10 cursor-pointer transform hover:scale-105'
                          key={network}
                          href={config.social_networks[network]}
                        >
                          <img
                            alt={network}
                            src={`${config.statics}statics/icons/icon-${network}.svg`}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return networks ? (
              <div key={item.title} className='flex flex-col'>
                {data}
                {networks}
              </div>
            ) : (
              data
            );
          })}
        </div>
      </div>
      <div className='text-sm py-4 px-5 flex flex-row justify-center'>
        oldwave © 2020 | Powered by:
        <span className='italic ml-3 font-extrabold'>SoftCrafts</span>
      </div>
    </footer>
  );
}

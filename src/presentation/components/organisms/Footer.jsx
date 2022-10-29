import React from 'react';
import FooterItem from 'presentation/components/atoms/FooterItem';
import config from 'domain/config';

export default function Footer() {
  return (
    <footer className='body-font font-helvetica w-full'>
      <div className='w-full py-8 lg:h-36 bg-secondary-700 bg-opacity-30 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 items-center px-12 lg:px-36'>
        <div className='flex gap-4 self-center items-center lg:justify-center'>
          <img
            alt='icon-safe-shopping'
            className='h-1/4 object-contain'
            src={`${config.statics}/icons/icon-safe-shopping.svg`}
          />
          <span className='text-primary-700'>Compras Seguras</span>
        </div>
        <div className='flex gap-4 self-center items-center lg:justify-center'>
          <img
            alt='icon-safe-shopping'
            className='h-1/4 object-contain'
            src={`${config.statics}/icons/icon-payment-methods.svg`}
          />
          <span className='text-primary-700'>Múltiples medios de pago</span>
        </div>
        <div className='flex gap-4 self-center items-center lg:justify-center'>
          <img
            alt='icon-safe-shopping'
            className='h-1/4 object-contain'
            src={`${config.statics}/icons/icon-quality.svg`}
          />
          <span className='text-primary-700'>Calidad garantizada</span>
        </div>
        <div className='flex gap-4 self-center items-center lg:justify-center'>
          <img
            alt='icon-safe-shopping'
            className='h-1/4 object-contain'
            src={`${config.statics}/icons/icon-shipping.svg`}
          />
          <span className='text-primary-700'>Envios a todo el país</span>
        </div>
      </div>
      <div className='w-full py-8 lg:h-36 bg-primary-700 grid grid-cols-1 lg:grid-cols-3 gap-y-8 items-center px-6'>
        <div className='w-full text-center lg:text-start'>
          <h1 className='w-full font-bold text-xl lg:text-2xl text-white'>
            Suscríbete a nuestro boletín
          </h1>
          <h2 className='w-full text-md lg:text-lg text-white'>
            Recibe información de nuestras ofertas
          </h2>
        </div>
        <div className='col-span-2 m-0 md:mx-16 text-center flex flex-col gap-4 self-center'>
          <div className='flex flex-col lg:flex-row gap-4'>
            <input
              type='text'
              placeholder='Ingresa tu correo electrónico'
              className='py-3 rounded-full items-center flex gap-3 bg-white px-4 py-1 text-sm text-gray-500 p-1 cursor-pointer w-full'
            />
            <div className='py-3 w-full text-center duration-150 ease-in-out hover:scale-105 rounded-full bg-transparent border text-white border-white py-1 text-sm cursor-pointer'>
              Suscribirme
            </div>
          </div>
          <span className='w-full text-sm text-white hidden lg:block'>
            *Al suscribirme acepto recibir emails e información de oldwaves,
            bajo sus políticas de datos personales
          </span>
        </div>
      </div>
      <div className='container py-8 px-2 xl:px-8 mx-auto flex xl:items-center xl:items-start xl:flex-row xl:flex-nowrap flex-wrap flex-col'>
        <div className='xl:flex-grow flex flex-col xl:flex-row xl:flex-wrap justify-center gap-10 xl:gap-20 text-left'>
          <img
            alt='logo'
            className='logo hidden xl:block '
            src={`${config.statics}/brand/oldwave-logo-vertical.png`}
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
                <div className='hidden xl:block mt-5 xl:mt-0 px-4'>
                  <h2 className='title-font font-black tracking-widest text-xl mb-3 text-primary-700'>
                    Redes Sociales
                  </h2>
                  <div className='flex gap-2'>
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

import React, { useState } from 'react';
import service from 'domain/services';

export default function LoginForm({ setIsLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [openRegister, setOpenRegister] = useState(false);

  const loginProvider = async (driver) => {
    const response = await service.auth.loginFromProvider(setIsLoading, driver);
    if (response) {
      window.location.href = response;
    }
  };

  const changeForm = async (value) => {
    setOpenRegister(value);
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setName('');
  };

  const login = async () => {
    const response = await service.auth.login(setIsLoading, {
      email,
      password,
    });
    loggerUser(response);
  };

  const loggerUser = (response) => {
    if (response.status === 'OK') {
      sessionStorage.setItem('logged_user', JSON.stringify(response.data));
      window.location.reload();
      changeForm(false);
    } else {
      alert('error');
    }
  };
  const register = async () => {
    const response = await service.auth.registerUser(setIsLoading, {
      email,
      password,
      passwordConfirm,
      name,
    });
    loggerUser(response);
  };

  return (
    <>
      <label
        htmlFor='modal-login'
        className='block rounded-full bg-gray-50 px-4 py-1 text-sm cursor-pointer'
      >
        Registrarte o iniciar sesión
      </label>
      <input type='checkbox' id='modal-login' className='modal-toggle' />
      <label
        htmlFor='modal-login'
        className='modal modal-bottom sm:modal-middle cursor-pointer'
      >
        <div className='modal-box'>
          {!openRegister ? (
            <>
              <div className='mb-7'>
                <h3 className='font-semibold text-xl'>Iniciar Sesión</h3>
                <p className='text-gray-400 text-sm flex gap-3 items-center'>
                  Aún no tienes una cuenta?
                  <button
                    onClick={() => changeForm(true)}
                    type='submit'
                    className='text-xs text-purple-700 hover:text-purple-700'
                  >
                    Regístrate
                  </button>
                </p>
              </div>
              <div className='flex flex-col gap-3 pb-3'>
                <input
                  className='w-full text-sm px-4 py-4 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
                  type='text'
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Correo Electrónico'
                />
                <input
                  placeholder='Contraseña'
                  onChange={(event) => setPassword(event.target.value)}
                  type='password'
                  className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
                />
              </div>
              <div className='w-full justify-center'>
                <button
                  type='submit'
                  className='block w-full duration-150 p-6 ease-in-out hover:scale-[1.02] rounded-lg bg-primary-700 border text-white border-white py-2 text-sm cursor-pointer'
                  onClick={() => login()}
                >
                  Iniciar Sesión
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='mb-7'>
                <h3 className='font-semibold text-xl'>Registrate</h3>
                <p className='text-gray-400 text-sm flex gap-3 items-center'>
                  ¿Ya tienes una cuenta?
                  <button
                    onClick={() => changeForm(false)}
                    type='submit'
                    className='text-xs text-purple-700 hover:text-purple-700'
                  >
                    Inicia sesión
                  </button>
                </p>
              </div>
              <div className='flex flex-col gap-3 pb-3'>
                <input
                  className='w-full text-sm px-4 py-4 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
                  type='text'
                  onChange={(event) => setName(event.target.value)}
                  placeholder='Nombre'
                />
                <input
                  className='w-full text-sm px-4 py-4 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
                  type='text'
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Correo Electrónico'
                />
                <input
                  placeholder='Contraseña'
                  onChange={(event) => setPassword(event.target.value)}
                  type='password'
                  className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
                />
                <input
                  placeholder='Confirma tu contraseña'
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                  type='password'
                  className='w-full text-sm px-4 py-3 bg-white border  border-gray-200 rounded-xl focus:outline-none focus:border-primary-700'
                />
              </div>
              <div className='w-full justify-center'>
                <button
                  type='submit'
                  className='block w-full duration-150 p-6 ease-in-out hover:scale-[1.02] rounded-lg bg-primary-700 border text-white border-white py-2 text-sm cursor-pointer'
                  onClick={() => register()}
                >
                  Regístrate
                </button>
              </div>
            </>
          )}
          <div className='flex items-center justify-center space-x-2 my-5'>
            <span className='h-px w-16 bg-gray-100' />
            <span className='text-gray-300 font-normal'>ó</span>
            <span className='h-px w-16 bg-gray-100' />
          </div>
          <div className='flex justify-center gap-5 w-full '>
            <button
              type='button'
              onClick={() => loginProvider('google')}
              className='w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-primary-700 hover:bg-primary-700 hover:text-white text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500'
            >
              <svg
                className='w-4 mr-2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='#EA4335'
                  d='M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z'
                />
                <path
                  fill='#34A853'
                  d='M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z'
                />
                <path
                  fill='#4A90E2'
                  d='M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z'
                />
                <path
                  fill='#FBBC05'
                  d='M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z'
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type='button'
              onClick={() => loginProvider('github')}
              className='w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-primary-700 hover:bg-primary-700 hover:text-white text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500'
            >
              <svg
                className='w-4 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 496 512'
              >
                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
              </svg>
              <span>Github</span>
            </button>
          </div>
        </div>
      </label>
    </>
  );
}

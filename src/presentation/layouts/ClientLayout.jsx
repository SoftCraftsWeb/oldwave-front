import React, { useState } from 'react';
import Navbar from 'presentation/components/organisms/Navbar';
import Sidebar from 'presentation/components/organisms/Sidebar';
import Footer from 'presentation/components/organisms/Footer';
import ShoppingCar from 'presentation/components/molecules/ShoppingCar';

export default function ClientLayout({ children, setIsLoading }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='drawer text-gray-700'>
      <input id='car' type='checkbox' className='drawer-toggle' />
      <input id='sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content min-h-screen'>
        <Navbar setIsOpenShoppingCar={setIsOpen} setIsLoading={setIsLoading} />
        <div className='flex w-full overflow-y-scroll'>{children}</div>
        <Footer />
      </div>
      <Sidebar />
      <ShoppingCar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

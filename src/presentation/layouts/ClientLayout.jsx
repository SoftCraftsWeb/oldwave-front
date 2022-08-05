import React from 'react';
import Navbar from 'presentation/components/organisms/Navbar';
import Sidebar from 'presentation/components/organisms/Sidebar';
import Footer from 'presentation/components/organisms/Footer';

export default function ClientLayout({ children }) {
  return (
    <div className='drawer text-gray-700'>
      <input id='sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content min-h-screen'>
        <Navbar />
        <div className='flex w-full overflow-y-scroll'>{children}</div>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}

import React from 'react';
import Slider from 'presentation/components/atoms/Slider';
import config from 'domain/config';

export default function HomePage() {
  return (
    <div className='flex flex-col h-full w-full'>
      <div>
        <Slider slides={config.banners} />
      </div>
    </div>
  );
}

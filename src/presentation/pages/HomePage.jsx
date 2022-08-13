import React from 'react';
import Slider from 'presentation/components/atoms/Slider';
import config from 'domain/config';
import MoreSearchItems from 'presentation/components/molecules/MoreSearchItems';
import Categories from 'presentation/components/molecules/Categories';
import Banners from 'presentation/components/molecules/Banners';

export default function HomePage({ setIsLoading }) {
  return (
    <div className='flex flex-col h-full w-full gap-8 justify-center'>
      <Slider slides={config.banners} />
      <div className='container px-8 self-center gap-16 flex flex-col pt-10 pb-20'>
        <Categories />
        <Banners />
        <MoreSearchItems setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}

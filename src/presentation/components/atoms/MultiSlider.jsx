import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import config from 'domain/config';

export default function MultiSlider({ slides }) {
  const [width, setWidth] = useState(0);
  const resizeRef = useRef();
  const containerRef = useRef(null);

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.6,
    _slides: slides,
  });
  const { activeSlide, translate, transition } = state;

  const handleResize = () => {
    setState({ ...state, translate: 0, transition: 0 });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate:
        translate < containerRef.current.offsetWidth + width
          ? translate + width
          : 0,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const previousSlide = () => {
    setState({
      ...state,
      translate:
        translate <= 0
          ? containerRef.current.offsetWidth + width * 2
          : translate - width,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  useEffect(() => {
    detectWindowSize();
  }, []);

  function detectWindowSize() {
    setWidth(containerRef.current.offsetWidth);
    resizeRef.current = handleResize;
    setState({ ...state, translate: containerRef.current.offsetWidth });
  }

  window.onresize = detectWindowSize;

  return (
    <div className='flex gap-4 items-center w-full'>
      <a
        href='#next'
        className='cursor-pointer h-8 w-8 rounded-full bg-secondary-200 duration-150 hover:bg-gray-400 flex justify-center items-center'
        onClick={() => previousSlide()}
      >
        <img
          alt='icon-arrow-right'
          src={`${config.statics}/icons/icon-arrow.svg`}
          className='arrow-left self-center h-full p-2'
        />
      </a>
      <div className='relative w-full overflow-hidden whitespace-no-wrap p-0 m-0 h-32'>
        <div
          className='flex w-full justify-between gap-6 h-32 m-0'
          style={{
            transform: `translateX(-${translate}px)`,
            transition: `transform ease-out ${transition}s`,
          }}
        >
          {slides.map(({ title, img }) => (
            <div
              key={uuidv4()}
              ref={containerRef}
              className='flex flex-col gap-2 group'
            >
              {React.createElement(img, {
                className:
                  'h-32 w-32 w-full group-hover:text-primary-700 text-gray-700 group-hover:border-primary-700/5 group-hover:border group-hover:shadow-md group-hover:shadow-primary-700/5 rounded-xl p-4 items-center flex justify-center',
              })}
              <div className='group-hover:text-primary-700 text-gray-600'>
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        href='#item'
        className='cursor-pointer h-8 w-8 rounded-full bg-secondary-200 duration-150 hover:bg-gray-400 flex justify-center items-center'
        onClick={() => nextSlide()}
      >
        <img
          alt='icon-arrow-right'
          src={`${config.statics}/icons/icon-arrow.svg`}
          className='self-center h-full p-2'
        />
      </a>
    </div>
  );
}

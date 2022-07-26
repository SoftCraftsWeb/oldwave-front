import React, { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useIntervalWithStop = (callback, delay) => {
  const savedCallback = useRef();
  const intervalId = useRef(null);
  const [currentDelay, setDelay] = useState(delay);

  const toggleRunning = useCallback(
    () =>
      setDelay((currentDelayVar) => (currentDelayVar === null ? delay : null)),
    [delay]
  );

  const clear = useCallback(() => clearInterval(intervalId.current), []);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (intervalId.current) clear();

    if (currentDelay !== null) {
      intervalId.current = setInterval(tick, currentDelay);
    }

    return clear;
  }, [currentDelay, clear]);

  return [toggleRunning, !!currentDelay];
};

export default function Slider({ slides }) {
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
        translate <= width * (slides.length - 2) ? translate + width : 0,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const setSlide = (item) => {
    setState({
      ...state,
      translate: width * item,
      activeSlide: item,
    });
  };

  useIntervalWithStop(() => {
    nextSlide();
  }, 5000);

  useEffect(() => {
    setWidth(containerRef.current.clientWidth);
    resizeRef.current = handleResize;
  }, []);

  useEffect(() => {
    setState({ ...state, translate: containerRef.current.clientWidth });
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.6 });
  }, [transition]);

  return (
    <div className='indicator'>
      <span className='indicator-item w-full indicator-bottom gap-2 indicator-center flex my-6 items-center justify-center'>
        {slides.map((item, i) => (
          <a
            href='#item'
            className={`${
              i === activeSlide ? 'border-primary-700 ' : 'border-gray-300 '
            } cursor-pointer h-3 w-3 rounded-full border-2 hover:border-primary-700 flex items-center`}
            onClick={() => setSlide(i)}
            key={uuidv4()}
          >
            <div />
          </a>
        ))}
      </span>
      <div
        ref={containerRef}
        style={{
          height: '432px',
        }}
        className='relative w-screen overflow-hidden whitespace-no-wrap p-0 m-0'
      >
        <div
          className='flex'
          style={{
            height: '432px',
            width: width * slides.length,
            transform: `translateX(-${translate}px)`,
            transition: `transform ease-out ${transition}s`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={uuidv4()}
              className='w-full'
              style={{
                height: '100%',
                backgroundImage: `url('${slide}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import config from 'domain/config';

const Carousel = (props) => {
  const { children, infiniteLoop, height, sm, xl } = props;

  function getItemsByWindow() {
    function mdSizes() {
      return window.innerWidth < 768 ? sm ?? 2 : 3;
    }

    return window.innerWidth < 1024 ? mdSizes() : xl ?? 6;
  }

  const [show, setShow] = useState(getItemsByWindow());

  useEffect(() => {
    detectWindowSize();
  }, []);

  function detectWindowSize() {
    setShow(getItemsByWindow());
  }

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    const output = [];
    for (let index = 0; index < show; index += 1) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    const output = [];
    for (let index = 0; index < show; index += 1) {
      output.push(children[index]);
    }
    return output;
  };

  window.addEventListener('resize', () => detectWindowSize(), true);

  return (
    <div className='flex gap-4 items-center w-full'>
      {(isRepeating || currentIndex > 0) && (
        <button
          type='button'
          className='cursor-pointer h-8 w-8 rounded-full bg-secondary-200 duration-150 hover:bg-gray-400 flex justify-center items-center'
          onClick={prev}
        >
          <img
            alt='icon-arrow-right'
            src={`${config.statics}/icons/icon-arrow.svg`}
            className='arrow-left self-center h-full p-2'
          />
        </button>
      )}
      <div
        className={`${
          height ?? 'h-32'
        } relative w-full overflow-hidden whitespace-no-wrap p-0 m-0`}
      >
        <div className='carousel-wrapper'>
          <div
            className='carousel-content-wrapper'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
                transition: !transitionEnabled ? 'none' : undefined,
              }}
              onTransitionEnd={() => handleTransitionEnd()}
            >
              {length > show && isRepeating && renderExtraPrev()}
              {children}
              {length > show && isRepeating && renderExtraNext()}
            </div>
          </div>
        </div>
      </div>
      {(isRepeating || currentIndex < length - show) && (
        <button
          type='button'
          className='cursor-pointer h-8 w-8 rounded-full bg-secondary-200 duration-150 hover:bg-gray-400 flex justify-center items-center'
          onClick={next}
        >
          <img
            alt='icon-arrow-right'
            src={`${config.statics}/icons/icon-arrow.svg`}
            className='self-center h-full p-2'
          />
        </button>
      )}
    </div>
  );
};

export default Carousel;

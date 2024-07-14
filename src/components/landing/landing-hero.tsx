'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/assets/backgrounds/exploring-suoh.png',
  '/assets/backgrounds/cianjur.jpg',
  '/assets/backgrounds/bunikasih.jpg',
];

export function LandingHero() {
  const [activeContent, setActiveContent] = useState(0);

  function changeActiveContent(action: 'next' | 'prev') {
    const factor = action === 'next' ? 1 : -1;

    if (activeContent + factor < 0) {
      setActiveContent(images.length - 1);
    } else if (activeContent + factor > images.length - 1) {
      setActiveContent(0);
    } else {
      setActiveContent(activeContent + factor);
    }
  }

  return (
    <section>
      <div
        className="h-[80vh] bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${images[activeContent]})` }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center color-white bg-black/40 ">
          <h6 className="font-poppins text-3xl font-light">Exploring Suoh:</h6>

          <h1 className="font-florest text-[85px] leading-[1.05] max-w-[930px] mx-auto text-center">
            Synergy in conservation
          </h1>
        </div>

        <Image
          alt="map suoh"
          className="absolute bottom-0 translate-y-1/2 z-5 left-20 w-73 h-73"
          height={ 280 }
          src="/assets/backgrounds/map-suoh.png"
          width={ 280 }
        />

        <div className="absolute z-5 bottom-0 right-1 translate-y-1/2 flex items-center gap-4">
          { images.map((item, index) => (
            <button onClick={ () => setActiveContent(index) }>
              <Image
                alt="image"
                className={ classNames('h-34 object-cover object-center w-52.5', {
                  'ring-2 ring-[#D68B30]': activeContent === index,
                }) }
                height={ 137 }
                key={ index }
                src={ item }
                width={ 210 }
              />
            </button>
          )) }

          <div className="flex gap-5 absolute right-1/6 bottom-0 translate-y-1/2">
            <button onClick={ () => changeActiveContent('prev') }>
              <Image
                alt="boot"
                className="-scale-x-100"
                height={ 50 }
                src="/assets/images/boot.png"
                width={ 50 }
              />
            </button>

            <button onClick={ () => changeActiveContent('next') }>
              <Image
                alt="boot"
                height={ 50 }
                src="/assets/images/boot.png"
                width={ 50 }
              />
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-[#0A2429] pt-25.5 pb-50 color-white flex gap-22 justify-center">
        <div className="flex flex-col items-end text-end">
          <h2 className="font-poppins text-5xl font-medium max-w-72">Mini Quote dari Artikel</h2>

          <span className="font-manrope font-medium text-xl mt-6 block pb-6">Exploring Suoh</span>

          <span className="w-17 h-0.5 bg-white block" />
        </div>

        <div className="max-w-120">
          <p className="font-manrope text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <i className="i-kmpa-arrow-right text-3xl color-white mt-10.5" />
        </div>

        <Image
          alt="divider-wave"
          className="w-screen absolute bottom-0 left-0"
          height={ 20 }
          src="/assets/backgrounds/bg-divider-wave.png"
          width={ 1000 }
        />
      </div>
    </section>
  );
}

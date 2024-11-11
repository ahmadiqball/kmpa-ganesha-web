'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockHeroBannerCarousel({ carousel }: PickPageComponent<'heroBannerCarousel'>) {
  const [activeContent, setActiveContent] = useState(0);
  const activeCarousel = carousel[activeContent];

  function changeActiveContent(action: 'next' | 'prev') {
    const factor = action === 'next' ? 1 : -1;

    if (activeContent + factor < 0) {
      setActiveContent(carousel.length - 1);
    } else if (activeContent + factor > carousel.length - 1) {
      setActiveContent(0);
    } else {
      setActiveContent(activeContent + factor);
    }
  }

  return (
    <section>
      <div
        className="relative h-[80vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${sanityImageUrlFor(activeCarousel.backgroundImage).url()})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center bg-black/40 color-white">
          <h6 className="text-3xl font-light font-poppins">{ activeCarousel.pretitle }</h6>

          <h1 className="mx-auto max-w-[930px] text-center text-[85px] leading-[1.05] font-florest">
            { activeCarousel.title }
          </h1>
        </div>

        { activeCarousel.mapImage
          ? (
            <Image
              alt="map suoh"
              className="absolute bottom-0 left-20 z-5 h-73 w-73 translate-y-1/2"
              height={ 280 }
              src={ sanityImageUrlFor(activeCarousel.mapImage).url() }
              width={ 280 }
            />
            )
          : null }

        <div className="absolute bottom-0 right-1 z-5 flex translate-y-1/2 items-center gap-4">
          { carousel.map((item, index) => (
            <button onClick={ () => setActiveContent(index) }>
              <Image
                alt="image"
                className={ classNames('h-34 object-cover object-center w-52.5', {
                  'ring-2 ring-[#D68B30]': activeContent === index,
                }) }
                height={ 137 }
                key={ index }
                src={ sanityImageUrlFor(item.backgroundImage).url() }
                width={ 210 }
              />
            </button>
          )) }

          <div className="absolute bottom-0 right-1/6 flex translate-y-1/2 gap-5">
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

      <div className="relative flex justify-center gap-22 bg-[#0A2429] pb-50 pt-25.5 color-white">
        <div className="flex flex-col items-end text-end">
          <h2 className="max-w-72 text-5xl font-medium font-poppins">{ activeCarousel.summaryTitle }</h2>

          <span className="mt-6 block pb-6 text-xl font-medium font-manrope">{ activeCarousel.summarySubtitle }</span>

          <span className="block h-0.5 w-17 bg-white" />
        </div>

        <div className="max-w-120">
          <p className="text-lg font-light font-manrope">
            { activeCarousel.summaryText }
          </p>

          <i className="i-kmpa-arrow-right mt-10.5 text-3xl color-white" />
        </div>
      </div>
    </section>
  );
};

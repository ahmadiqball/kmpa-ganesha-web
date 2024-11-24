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
        className="relative h-[98vh] bg-cover bg-center bg-no-repeat md:h-[80vh]"
        style={{ backgroundImage: `url(${sanityImageUrlFor(activeCarousel.backgroundImage).url()})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center bg-black/40 color-white">
          <h6 className="text-xl font-light font-poppins md:text-3xl">{ activeCarousel.pretitle }</h6>

          <h1 className="mx-auto mt-2 max-w-[930px] text-center text-5xl leading-[1.05] font-florest md:text-[85px]">
            { activeCarousel.title }
          </h1>
        </div>

        <div className="relative mx-auto max-w-400">
          { activeCarousel.mapImage
            ? (
              <Image
                alt="map suoh"
                className="absolute bottom-0 left-20 z-5 hidden size-73 translate-y-1/2 lg:block"
                height={ 280 }
                src={ sanityImageUrlFor(activeCarousel.mapImage).url() }
                width={ 280 }
              />
              )
            : null }

          <div className="absolute bottom-0 right-1 z-5 hidden translate-y-1/2 items-center gap-4 sm:flex">
            { carousel.map((item, index) => (
              <button onClick={ () => setActiveContent(index) }>
                <Image
                  alt="image"
                  className={ classNames('h-20 w-30 lg:h-34 lg:w-52.5 object-cover object-center rounded-lg', {
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
      </div>

      <div className="relative flex flex-col justify-center gap-4 bg-[#0A2429] px-8 py-15 color-white md:flex-row md:gap-22 xl:py-25 md:pt-40">
        <div className="flex flex-col md:items-end md:text-end">
          <h2 className="max-w-72 text-4xl font-medium font-poppins md:text-5xl">{ activeCarousel.summaryTitle }</h2>

          <span className="mt-2 block pb-4 text-xl font-manrope md:mt-6 md:pb-6 md:text-xl md:font-medium">{ activeCarousel.summarySubtitle }</span>

          <span className="block h-0.5 w-1/3 bg-white md:w-17" />
        </div>

        <div className="max-w-120">
          <p className="text-sm font-light font-manrope md:text-lg">
            { activeCarousel.summaryText }
          </p>

          <i className="i-kmpa-arrow-right mt-10.5 text-3xl color-white" />
        </div>
      </div>
    </section>
  );
};

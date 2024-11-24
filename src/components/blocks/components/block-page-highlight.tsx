import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockPageHighlight({ description, image, pretitle, title, url, layout, type }: PickPageComponent<'pageHighlight'>) {
  return (
    <section className={ type === 'dark' ? 'bg-[#0A2429] color-white' : 'bg-white color-[#0A2429]' }>
      <div className={ classNames(
        'mx-auto py-12 md:py-24 max-w-300 flex px-4 flex-col items-center gap-6 md:gap-14',
        layout === 'left' ? 'md:flex-row text-left' : 'md:flex-row-reverse text-right') }
      >
        <Image
          alt={ title || '' }
          className="h-70 min-w-1/2 rounded-xl object-cover object-center md:h-110 md:max-w-1/2 md:w-1/2"
          height={ 600 }
          src={ sanityImageUrlFor(image).url() }
          width={ 1000 }
        />

        <div>
          <p className="text-base md:text-xl md:font-medium">{ pretitle }</p>

          <h2 className="mt-2 max-w-8/10 text-2xl font-medium leading-[1.2] md:mt-4 md:text-5xl">{ title }</h2>

          <span className={ classNames('mt-3 md:mt-5 block h-0.5 w-1/3 md:w-17', type === 'dark' ? 'bg-white' : 'bg-[#0A2429]') } />

          <p className="mt-3 text-xs md:mt-5 md:text-base">{ description }</p>

          <Link href={ url }>
            <FaArrowRightLong className="mt-4 size-6 color-[#D68B30] md:mt-6 md:size-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}

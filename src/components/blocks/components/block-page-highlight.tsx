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
        'mx-auto py-24 max-w-300 flex items-center gap-14',
        layout === 'left' ? 'justify-start' : 'justify-end') }
      >
        <Image
          alt={ title || '' }
          className="h-110 max-w-1/2 min-w-1/2 w-1/2 rounded-xl object-cover object-center"
          height={ 600 }
          src={ sanityImageUrlFor(image).url() }
          width={ 1000 }
        />

        <div>
          <p className="text-xl font-medium">{ pretitle }</p>

          <h2 className="mt-4 max-w-8/10 text-5xl font-medium leading-[1.2]">{ title }</h2>

          <span className={ classNames('mt-5 block h-0.5 w-17', type === 'dark' ? 'bg-white' : 'bg-[#0A2429]') } />

          <p className="mt-5">{ description }</p>

          <Link href={ url }>
            <FaArrowRightLong className="mt-6 size-8 color-[#D68B30]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import classNames from 'classnames';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockInfoBlock({ image, backgroundColor, position, quote, text, title }: PickPageComponent<'infoBlock'>) {
  return (
    <section
      className="py-8 md:py-24"
      style={{ backgroundColor: backgroundColor?.hex }}
    >
      <div
        className={ classNames('flex flex-col max-w-300 mx-auto gap-4 md:gap-10 items-center px-4 md:px-8',
          position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row') }
      >
        <Image
          alt={ title || '' }
          className="max-h-80 w-auto rounded-xl object-cover object-center md:max-w-1/2 md:w-1/2"
          height={ 600 }
          src={ sanityImageUrlFor(image).url() }
          width={ 1000 }
        />

        <div className="w-full color-white md:max-w-1/2 md:w-1/2">
          <h5 className="text-2xl font-bold md:text-4xl">{ title }</h5>

          { text
            ? (
              <div className="mt-4 text-xs leading-[1.5] md:mt-8 md:text-base">
                <PortableText value={ text || [] } />
              </div>
              )
            : null }

          <blockquote className="text-center text-xl font-light italic md:text-4xl">
            { quote }
          </blockquote>
        </div>
      </div>

    </section>
  );
};

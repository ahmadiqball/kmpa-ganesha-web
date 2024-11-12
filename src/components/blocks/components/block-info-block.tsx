import classNames from 'classnames';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockInfoBlock({ image, backgroundColor, position, quote, text, title }: PickPageComponent<'infoBlock'>) {
  return (
    <section
      className="py-12"
      style={{ backgroundColor: backgroundColor?.hex }}
    >
      <div
        className={ classNames('flex max-w-300 mx-auto gap-10 items-center', position === 'right' ? 'flex-row-reverse' : 'flex-row') }
      >
        <Image
          alt={ title || '' }
          className="max-w-1/2 w-1/2 rounded-xl object-cover object-center"
          height={ 600 }
          src={ sanityImageUrlFor(image).url() }
          width={ 1000 }
        />

        <div className="max-w-1/2 w-1/2 color-white">
          <h5 className="text-4xl font-bold">{ title }</h5>

          <div className="mt-8">
            <PortableText value={ text || [] } />
          </div>

          <blockquote className="text-center text-4xl font-light italic">
            { quote }
          </blockquote>
        </div>
      </div>

    </section>
  );
};

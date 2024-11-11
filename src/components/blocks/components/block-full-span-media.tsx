import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockFullSpanMedia({ gradientColor, image, video }: PickPageComponent<'fullSpanMedia'>) {
  return (
    <section className="relative mt-10 h-180 w-full">
      { image
        ? (
          <Image
            alt="footer"
            className="h-full w-full object-cover object-center"
            height={ 500 }
            src={ sanityImageUrlFor(image).url() }
            width={ 1000 }
          />
          )
        : null }

      { video
        ? (
          <iframe src={ video } />
          )
        : null }

      <div
        className="absolute left-0 top-0 h-7/10 w-full"
        style={{ backgroundImage: `linear-gradient(to bottom, ${gradientColor?.hex}, transparent)` }}
      />
    </section>
  );
};

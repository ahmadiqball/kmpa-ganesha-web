import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockFullSpanMedia({ gradientColor, image, video }: PickPageComponent<'fullSpanMedia'>) {
  const videoId = video?.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/))([^"&?\/\s]{11})/)?.[1];

  return (
    <section className="relative h-200 w-full">
      { image
        ? (
          <>
            <Image
              alt="footer"
              className="h-full w-full object-cover object-center"
              height={ 500 }
              src={ sanityImageUrlFor(image).url() }
              width={ 1000 }
            />

            <div
              className="absolute left-0 top-0 h-7/10 w-full"
              style={{ backgroundImage: `linear-gradient(to bottom, ${gradientColor?.hex}, transparent)` }}
            />
          </>
          )
        : null }

      { video
        ? (
          <iframe className="h-full w-full" src={ `https://www.youtube.com/embed/${videoId}` } />
          )
        : null }

    </section>
  );
};

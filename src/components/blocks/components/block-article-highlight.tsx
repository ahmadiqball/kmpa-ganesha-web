import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import { FaArrowRightLong } from 'react-icons/fa6';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockArticleHighlight({ article, pretitle }: PickPageComponent<'articleHighlight'>) {
  return (
    <section className="mx-auto my-8 max-w-300 flex flex-col items-center gap-4 px-4 md:my-24 md:flex-row md:gap-16">
      <Image
        alt={ article.title }
        className="max-h-80 max-w-100 w-full rounded-xl md:max-h-none md:max-w-1/2 md:w-1/2"
        height={ 1000 }
        src={ sanityImageUrlFor(article.image).url() }
        width={ 1000 }
      />

      <div className="w-full md:max-w-1/2 md:w-1/2">
        <p className="text-base font-medium md:text-xl">{ pretitle }</p>

        <h5 className="mt-2 text-xl font-bold md:text-3xl">{ article.title }</h5>

        <div className="line-clamp-6 mt-2 text-xs md:mt-6 md:text-base">
          <PortableText value={ article.content.slice(0, 2) } />
        </div>

        <Link className="inline-block w-fit" href={ article.url.current }>
          <FaArrowRightLong className="mt-2 size-6 color-[#0A2429] md:mt-6 md:size-8" />
        </Link>
      </div>
    </section>
  );
}

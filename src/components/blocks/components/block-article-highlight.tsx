import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import { FaArrowRightLong } from 'react-icons/fa6';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockArticleHighlight({ article, pretitle }: PickPageComponent<'articleHighlight'>) {
  return (
    <section className="mx-auto my-24 max-w-300 flex items-center gap-16">
      <Image
        alt={ article.title }
        className="max-w-1/2 w-1/2 rounded-xl"
        height={ 600 }
        src={ sanityImageUrlFor(article.image).url() }
        width={ 600 }
      />

      <div className="max-w-1/2 w-1/2">
        <p className="text-xl font-medium">{ pretitle }</p>

        <h5 className="mt-2 text-3xl font-bold">{ article.title }</h5>

        <div className="mt-6">
          <PortableText value={ article.content.slice(0, 2) } />
        </div>

        <Link href={ article.url.current }>
          <FaArrowRightLong className="mt-6 size-8 color-[#0A2429]" />
        </Link>
      </div>
    </section>
  );
}

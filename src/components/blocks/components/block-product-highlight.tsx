import Image from 'next/image';
import Link from 'next/link';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockProductHighlight({ bakcgroundImage, description, products, title }: PickPageComponent<'productHighlight'>) {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-48"
      style={{ backgroundImage: `url(${sanityImageUrlFor(bakcgroundImage).url()})` }}
    >
      <div className="color-white">
        <h4 className="mx-auto max-w-150 text-center text-4xl italic">{ title }</h4>

        <p>{ description }</p>
      </div>

      <div className="mt-16 flex flex-wrap gap-8">
        { products?.map((product) => (
          <Link href={ product.link || '' }>
            <Image
              alt={ product.link || '' }
              className="h-115 w-auto"
              height={ 800 }
              src={ sanityImageUrlFor(product.image || '').url() }
              width={ 500 }
            />
          </Link>
        )) }
      </div>

      <div
        className="absolute left-0 top-0 h-full w-full -z-1"
        style={{ backgroundImage: 'linear-gradient(to bottom, #0A2429, transparent)' }}
      />
    </section>
  );
};

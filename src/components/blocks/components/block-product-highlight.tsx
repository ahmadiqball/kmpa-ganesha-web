import Image from 'next/image';
import Link from 'next/link';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockProductHighlight({ bakcgroundImage, description, products, title }: PickPageComponent<'productHighlight'>) {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-cover bg-center px-4 py-24 md:py-48"
      style={{ backgroundImage: `url(${sanityImageUrlFor(bakcgroundImage).url()})` }}
    >
      <div className="color-white">
        <h4 className="mx-auto max-w-150 text-center text-2xl italic md:text-4xl">{ title }</h4>

        <p className="md:text0base text-sm">{ description }</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-8 md:mt-16">
        { products?.map((product) => (
          <Link href={ product.link || '' }>
            <Image
              alt={ product.link || '' }
              className="h-60 w-auto md:h-115"
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

import classNames from 'classnames';
import Link from 'next/link';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockImageBanner({ backgroundImage, buttonLink, buttonText, description, layout, title }: PickPageComponent<'imageBanner'>) {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${sanityImageUrlFor(backgroundImage).url()})` }}
    >
      <div className={ classNames('h-140 flex flex-col justify-center max-w-300 mx-auto', layout === 'left' ? 'item-start' : 'items-end text-right') }>
        <h4 className="max-w-1/3 text-6xl color-white font-semibold">{ title }</h4>

        <p className="mt-4 max-w-2/5 color-white">{ description }</p>

        <Link
          className="mt-6 w-fit rounded-full bg-[#D68B30] px-8 py-2 color-white font-semibold"
          href={ buttonLink || '' }
        >
          { buttonText }
        </Link>
      </div>
    </section>
  );
};

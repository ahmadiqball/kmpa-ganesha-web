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
      <div className={ classNames('py-40 flex flex-col justify-center max-w-300 px-4 mx-auto', layout === 'left' ? 'item-start' : 'items-end text-right') }>
        <h4 className="text-3xl color-white font-semibold xl:max-w-1/3 md:text-6xl">{ title }</h4>

        <p className="mt-2 text-xs color-white md:mt-4 md:max-w-1/2 sm:max-w-4/5 xl:max-w-2/5 md:text-base">{ description }</p>

        <Link
          className="mt-4 w-fit rounded-full bg-[#D68B30] px-8 py-2 text-xs color-white font-semibold md:mt-6 md:text-base"
          href={ buttonLink || '' }
        >
          { buttonText }
        </Link>
      </div>
    </section>
  );
};

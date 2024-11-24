import classNames from 'classnames';
import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { CoreSanityIcon } from '~/components/core/components/core-sanity-icon';
import { sanityImageUrlFor } from '~/sanity/lib/image';

import '../styles/block-hero-banner-text.css';

const HORIZONTAL_POSITION = {
  left: 'items-start',
  middle: 'items-center',
  right: 'items-end',
};

const VERTICAL_POSITION = {
  top: 'justify-start',
  middle: 'justify-center',
  bottom: 'justify-end',
};

export function BlockHeroBannerText({
  backgroundColor,
  backgroundImage,
  gradientColor,
  pretitle,
  pretitleIcon,
  subtitle,
  textHorizontalPosition,
  textVerticalPosition,
  title,
}: PickPageComponent<'heroBannerText'>) {
  return (
    <section className="relative h-screen min-h-screen w-full py-12 md:py-24" style={{ background: backgroundColor?.hex }}>
      { backgroundImage
        ? (
          <Image
            alt="Bunikasih"
            className="absolute left-0 top-0 h-screen w-full object-cover object-center"
            fill
            src={ sanityImageUrlFor(backgroundImage).url() }
          />
          )
        : null }

      <div className={ classNames('relative z-10 mx-auto h-full px-4 md:px-8 max-w-300 w-full flex flex-col text-xl color-white font-light font-poppins',
        HORIZONTAL_POSITION[textHorizontalPosition], VERTICAL_POSITION[textVerticalPosition]) }
      >
        <div className="flex items-center gap-1">
          <CoreSanityIcon className="size-3 color-[#D68B30] md:size-6" svg={ pretitleIcon?.svg } />

          <span className="text-xs md:text-base">{ pretitle }</span>
        </div>

        <h1 className="mt-2 text-4xl leading-[1.05] font-florest md:text-[96px]">{ title }</h1>

        <p className="mt-2 text-sm md:text-base">{ subtitle }</p>
      </div>

      <div
        className="absolute bottom-0 h-100 w-full"
        style={{ backgroundImage: `linear-gradient(to top, ${gradientColor?.hex}, transparent)` }}
      />
    </section>
  );
}

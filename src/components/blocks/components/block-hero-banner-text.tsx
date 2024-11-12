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
    <section className="relative h-screen min-h-screen w-full" style={{ background: backgroundColor?.hex }}>
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

      <div className={ classNames('relative z-10 mx-auto h-full max-w-280 w-full flex flex-col pb-50 text-xl color-white font-light font-poppins',
        HORIZONTAL_POSITION[textHorizontalPosition], VERTICAL_POSITION[textVerticalPosition]) }
      >
        <div className="flex items-center gap-1">
          <CoreSanityIcon className="size-6 color-[#D68B30]" svg={ pretitleIcon?.svg || '' } />

          <span>{ pretitle }</span>
        </div>

        <h1 className="text-[96px] leading-[1.05] font-florest">{ title }</h1>

        <p>{ subtitle }</p>
      </div>

      <div
        className="absolute bottom-0 h-100 w-full"
        style={{ backgroundImage: `linear-gradient(to top, ${gradientColor?.hex}, transparent)` }}
      />
    </section>
  );
}

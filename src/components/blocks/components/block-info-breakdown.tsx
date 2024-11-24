import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { CoreSanityIcon } from '~/components/core/components/core-sanity-icon';
import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockInfoBreakdown({ image, breakdowns, title }: PickPageComponent<'infoBreakdown'>) {
  return (
    <section className="bg-[#0A2429] py-8 md:py-24">
      <div className="mx-auto max-w-300 px-4">
        <h6 className="text-center text-2xl color-white font-semibold md:text-4xl">{ title }</h6>

        <div className="mt-6 flex flex-col gap-6 md:mt-16 lg:flex-row md:gap-16">
          <Image
            alt={ title || '' }
            className="mx-auto h-fit max-w-1/3 w-full"
            height={ 500 }
            src={ sanityImageUrlFor(image).url() }
            width={ 500 }
          />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
            { breakdowns?.map((item) => (
              <div className="flex items-center gap-4">
                { item.image
                  ? (
                    <Image
                      alt={ item.text || '' }
                      className="block aspect-auto max-h-10 max-w-18 object-contain md:max-h-15 md:max-w-30"
                      height={ 500 }
                      src={ sanityImageUrlFor(item.image).url() }
                      width={ 500 }
                    />
                    )
                  : <CoreSanityIcon svg={ item.icon?.svg } /> }

                <p className="text-2.5 color-white lg:text-base md:text-sm">{ item.text }</p>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  );
}

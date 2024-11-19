import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { CoreSanityIcon } from '~/components/core/components/core-sanity-icon';
import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockInfoBreakdown({ image, breakdowns, title }: PickPageComponent<'infoBreakdown'>) {
  return (
    <section className="bg-[#0A2429] py-24">
      <div className="mx-auto max-w-300">
        <h6 className="text-center text-4xl color-white font-semibold">{ title }</h6>

        <div className="mt-16 flex gap-16">
          <Image
            alt={ title || '' }
            className="max-w-1/3 w-full"
            height={ 500 }
            src={ sanityImageUrlFor(image).url() }
            width={ 500 }
          />

          <div className="grid grid-cols-2 gap-8">
            { breakdowns?.map((item) => (
              <div className="flex items-center gap-4">
                { item.image
                  ? (
                    <Image
                      alt={ item.text || '' }
                      className="block aspect-auto max-h-15 max-w-30 object-contain"
                      height={ 500 }
                      src={ sanityImageUrlFor(item.image).url() }
                      width={ 500 }
                    />
                    )
                  : <CoreSanityIcon svg={ item.icon?.svg } /> }

                <p className="color-white">{ item.text }</p>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { CoreSanityIcon } from '~/components/core/components/core-sanity-icon';
import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockInfoTiles({ backgroundImage, tiles, title }: PickPageComponent<'infoTiles'>) {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(10,36,41,.7), rgba(10,36,41,.7)), url(${sanityImageUrlFor(backgroundImage || '').url()})` }}
    >
      <div className="mx-auto max-w-300 py-16">
        <h6 className="text-4xl color-[#D68B30] font-semibold">{ title }</h6>

        <div className="grid grid-cols-4 mt-14 gap-8">
          { tiles?.map((tile) => (
            <div className="text-center color-white">
              { tile.image
                ? (
                  <Image
                    alt={ tile.text || '' }
                    className="mx-auto size-25"
                    height={ 100 }
                    src={ sanityImageUrlFor(tile.image).url() }
                    width={ 100 }
                  />
                  )
                : <CoreSanityIcon className="size-25" svg={ tile.icon?.svg } /> }

              <p className="mt-6">{ tile.text }</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}

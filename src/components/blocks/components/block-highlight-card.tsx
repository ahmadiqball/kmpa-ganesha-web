import classNames from 'classnames';
import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockHighlightCard({ cards }: PickPageComponent<'highlightCard'>) {
  return (
    <section className="grid grid grid-cols-3 grid-rows-2 mx-auto my-24 h-130 max-w-300 gap-6">
      { cards?.map((card, index) => (
        <div
          className={ classNames('shadow-[4px_4px_14px_4px_rgba(0,0,0,.2)] rounded-2xl overflow-hidden relative', {
            'col-span-2 row-span-2': index === 0,
          }) }
          key={ card._id }
        >
          <Image
            alt={ card.title }
            className="absolute left-0 top-0 h-full w-full object-cover object-center"
            height={ 1000 }
            src={ sanityImageUrlFor(card.image).url() }
            width={ 1000 }
          />

          <div className={ classNames('relative z-10 h-full w-full flex items-end bg-black/40 color-white font-medium',
            index === 0 ? 'text-4xl p-10' : 'p-6 text-2xl',
          ) }
          >
            { card.title }
          </div>
        </div>
      )) }
    </section>
  );
}

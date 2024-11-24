import classNames from 'classnames';
import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

export function BlockHighlightCard({ cards }: PickPageComponent<'highlightCard'>) {
  return (
    <section className="grid-cols-3 mx-auto my-12 h-80 max-w-screen w-fit flex gap-6 overflow-scroll px-4 py-4 md:grid md:grid-rows-2 md:my-24 md:h-130 md:max-w-300 md:overflow-visible">
      { cards?.map((card, index) => (
        <div
          className={ classNames('shadow-[4px_4px_14px_4px_rgba(0,0,0,.2)] rounded-2xl overflow-hidden relative min-w-9/10 md:w-auto', {
            'md:col-span-2 md:row-span-2': index === 0,
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

          <div className={ classNames('relative z-10 p-4 md:p-6 text-xl md:text-2xl h-full w-full flex items-end bg-black/40 color-white font-medium',
            index === 0 ? 'md:text-4xl md:p-10' : '',
          ) }
          >
            { card.title }
          </div>
        </div>
      )) }
    </section>
  );
}

import classNames from 'classnames';
import Image from 'next/image';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

import { sanityImageUrlFor } from '~/sanity/lib/image';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../core/carousel/carousel';

export function BlockRecentArticles({ type, articles, title }: PickPageComponent<'recentArticles'>) {
  return (
    <section className="pt-14">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <div className="mx-auto max-w-250 flex items-center justify-between">
          <h4 className={ classNames('font-poppins font-semibold text-10',
            type === 'dark' ? 'color-[#0A2429]' : 'color-white',
          ) }
          >
            { title }
          </h4>

          <div className={ classNames('flex gap-5', type === 'dark' ? 'color-[#0A2429]' : 'color-white') }>
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="my-10">
          { articles.map((article) => (
            <CarouselItem className="relative mx-3 h-89 basis-1/3 shadow-[4px_4px_10px_4px_rgba(0,0,0,.2)]" key={ article._id }>
              <Image
                alt={ article.title }
                className="h-full w-full object-center"
                height={ 400 }
                src={ sanityImageUrlFor(article.image).url() }
                width={ 400 }
              />

              <div className="absolute bottom-0 h-1/2 w-full flex flex-col justify-end from-transparent to-black bg-gradient-to-b px-8 py-8 color-white font-poppins">
                <span className="text-lg font-light">{ article._createdAt }</span>

                <h6 className="mt-1 text-2xl font-semibold">{ article.title }</h6>
              </div>
            </CarouselItem>
          )) }
        </CarouselContent>
      </Carousel>
    </section>
  );
}

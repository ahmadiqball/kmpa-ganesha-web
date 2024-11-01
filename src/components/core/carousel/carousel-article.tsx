'use client';

import classNames from 'classnames';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';

const articles = [
  { date: '17 Agustus 2025', image: '/assets/images/article-1.png', title: 'Belajar Jadi Tokek' },
  { date: '21 September 2025', image: '/assets/images/article-2.png', title: 'Becanda di Hutan' },
  { date: '5 April 2025', image: '/assets/images/article-3.png', title: 'Becanda di Batu' },
  { date: '21 September 2025', image: '/assets/images/article-2.png', title: 'Becanda di Hutan' },
  { date: '5 April 2025', image: '/assets/images/article-3.png', title: 'Becanda di Batu' },
];

interface CarouselArticleProps {
  title?: string;
  variant?: 'dark' | 'light';
}

export function CarouselArticle({ title, variant = 'dark' }: CarouselArticleProps) {
  return (
    <section className="pt-14">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <div className="mx-auto max-w-250 flex items-center justify-between">
          <h4 className={ classNames('font-poppins font-semibold text-10',
            variant === 'dark' ? 'color-[#0A2429]' : 'color-white',
          ) }
          >
            { title }
          </h4>

          <div className={ classNames('flex gap-5', variant === 'dark' ? 'color-[#0A2429]' : 'color-white') }>
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="my-10">
          { articles.map((article) => (
            <CarouselItem className="relative mx-3 h-89 basis-1/3 shadow-[4px_4px_10px_4px_rgba(0,0,0,.2)]" key={ article.date }>
              <Image
                alt={ article.title }
                className="h-full w-full object-center"
                height={ 400 }
                src={ article.image }
                width={ 400 }
              />

              <div className="absolute bottom-0 h-1/2 w-full flex flex-col justify-end from-transparent to-black bg-gradient-to-b px-8 py-8 color-white font-poppins">
                <span className="text-lg font-light">{ article.date }</span>

                <h6 className="mt-1 text-2xl font-semibold">{ article.title }</h6>
              </div>
            </CarouselItem>
          )) }
        </CarouselContent>
      </Carousel>
    </section>
  );
}

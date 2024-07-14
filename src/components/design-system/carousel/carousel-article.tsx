'use client';

import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';

const articles = [
  { date: '17 Agustus 2025', image: '/assets/images/article-1.png', title: 'Belajar Jadi Tokek' },
  { date: '21 September 2025', image: '/assets/images/article-2.png', title: 'Becanda di Hutan' },
  { date: '5 April 2025', image: '/assets/images/article-3.png', title: 'Becanda di Batu' },
  { date: '21 September 2025', image: '/assets/images/article-2.png', title: 'Becanda di Hutan' },
  { date: '5 April 2025', image: '/assets/images/article-3.png', title: 'Becanda di Batu' },
];

export function CarouselArticle() {
  return (
    <section className="mt-14">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <div className="max-w-250 mx-auto flex justify-between items-center">
          <h4 className="font-poppins color-[#0A2429] font-semibold text-10">Artikel Terbaru</h4>

          <div className="flex gap-5">
            <CarouselPrevious />

            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="my-10">
          { articles.map((article) => (
            <CarouselItem className="h-89 basis-1/3 mx-3 relative shadow-[4px_4px_10px_4px_rgba(0,0,0,.2)]" key={ article.date }>
              <Image
                alt={ article.title }
                className="object-center w-full h-full"
                height={ 400 }
                src={ article.image }
                width={ 400 }
              />

              <div className="absolute color-white font-poppins h-1/2 w-full bottom-0 flex flex-col justify-end px-8 py-8 bg-gradient-to-b from-transparent to-black">
                <span className="text-lg font-light ">{ article.date }</span>

                <h6 className="text-2xl font-semibold mt-1">{ article.title }</h6>
              </div>
            </CarouselItem>
          )) }
        </CarouselContent>
      </Carousel>
    </section>
  );
}

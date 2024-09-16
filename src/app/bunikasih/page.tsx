import Image from 'next/image';

import { BunikasihBooklet } from '~~/components/bunikasih/bunikasih-booklet';
import { BunikasihHero } from '~~/components/bunikasih/bunikasih-hero';
import { BunikasihQuote } from '~~/components/bunikasih/bunikasih-quote';
import { BunikasihSection } from '~~/components/bunikasih/bunikasih-section';
import { CarouselArticle } from '~~/components/design-system/carousel/carousel-article';

export default function PageBunikasih() {
  return (
    <>
      <BunikasihHero />

      <BunikasihSection />

      <BunikasihQuote />

      <div className="bg-[#0A2429]">
        <CarouselArticle title="Artikel Bunikasih" variant="light" />
      </div>

      <section className="relative pt-10 bg-[#0A2429]">
        <div className="absolute bg-gradient-to-b from-[#0A2429] to-transparent w-full h-100" />

        <Image
          alt="bunikasih"
          height={ 2000 }
          src="/assets/backgrounds/bg-bunikasih-2.png"
          width={ 2000 }
        />
      </section>

      <BunikasihBooklet />
    </>
  );
}

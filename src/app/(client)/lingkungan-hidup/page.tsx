import { CarouselArticle } from '~~/components/design-system/carousel/carousel-article';
import { LingkunganHidupArticle } from '~~/components/lingkungan-hidup/lingkungan-hidup-article';
import { LingkunganHidupBanner } from '~~/components/lingkungan-hidup/lingkungan-hidup-banner';

export default function LingkunganHidup() {
  return (
    <>
      <LingkunganHidupBanner />

      <LingkunganHidupArticle />

      <CarouselArticle title="Bincang LH" />
    </>
  );
}

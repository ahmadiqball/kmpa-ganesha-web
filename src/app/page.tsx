import { CarouselArticle } from '~~/components/design-system/carousel/carousel-article';
import { LandingGallery } from '~~/components/landing/landing-gallery';
import { LandingHero } from '~~/components/landing/landing-hero';
import { LandingImageBanner } from '~~/components/landing/landing-image-banner';

export default function Home() {
  return (
    <>
      <LandingHero />

      <LandingGallery />

      <CarouselArticle />

      <LandingImageBanner />
    </>
  );
}

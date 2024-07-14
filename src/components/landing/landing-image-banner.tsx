import Image from 'next/image';

export function LandingImageBanner() {
  return (
    <section className="w-full h-170 relative mt-10">
      <Image
        alt="footer"
        className="w-full h-full object-cover"
        height={ 500 }
        src="/assets/backgrounds/bg-landing-footer.png"
        width={ 1000 }
      />

      <div className="absolute top-0 left-0 w-full h-7/10 bg-gradient-to-b from-white to-transparent" />
    </section>
  );
}

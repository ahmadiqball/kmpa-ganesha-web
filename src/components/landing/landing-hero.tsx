import Image from 'next/image';

export function LandingHero() {
  return (
    <section>
      <div className="bg-[url(/assets/backgrounds/exploring-suoh.png)] h-[80vh] bg-cover bg-no-repeat relative">
        <div className="w-full h-full flex flex-col items-center justify-center color-white bg-black/40">
          <h6 className="font-poppins text-3xl font-light">Exploring Suoh:</h6>

          <h1 className="font-florest text-[85px] leading-[1.05] max-w-[930px] mx-auto text-center">Synergy in conservation</h1>
        </div>

        <Image
          alt="map suoh"
          className="absolute bottom-0 translate-y-1/2 z-5 left-20 w-73 h-73"
          height={ 280 }
          src="/assets/backgrounds/map-suoh.png"
          width={ 280 }
        />
      </div>

      <div className="relative bg-[#0A2429] pt-25.5 pb-50 color-white flex gap-22 justify-center">
        <div className="flex flex-col items-end text-end">
          <h2 className="font-poppins text-5xl font-medium max-w-72">Mini Quote dari Artikel</h2>

          <span className="font-manrope font-medium text-xl mt-6 block pb-6">Exploring Suoh</span>

          <span className="w-17 h-0.5 bg-white block" />
        </div>

        <div className="max-w-120">
          <p className="font-manrope text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <i className="i-kmpa-arrow-right text-3xl color-white mt-10.5" />
        </div>

        <Image
          alt="divider-wave"
          className="w-screen absolute bottom-0 left-0"
          height={ 20 }
          src="/assets/backgrounds/bg-divider-wave.png"
          width={ 1000 }
        />
      </div>
    </section>
  );
}

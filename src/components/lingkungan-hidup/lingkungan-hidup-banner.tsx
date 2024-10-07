import Image from 'next/image';

export function LingkunganHidupBanner() {
  return (
    <section className="relative h-95vh flex flex-col">
      <Image
        alt="banner lingkungan hidup"
        className="h-95vh object-cover object-bottom absolute"
        height={ 1000 }
        src="/assets/backgrounds/IMG_7202 1.png"
        width={ 3000 }
      />

      <div className="relative grow px-24 color-white drop-shadow-2xl flex flex-col justify-center">
        <p className="font-poppins font-light text-2xl">
          Sepotong tulisan tentang kita dan bumi
        </p>

        <h1 className="font-florest text-8xl mt-2">Lingkungan Hidup</h1>
      </div>

      <Image
        className="relative"
        height={ 300 }
        src="/assets/images/gelombang (1).png"
        width={ 3000 }
      />
    </section>
  );
}

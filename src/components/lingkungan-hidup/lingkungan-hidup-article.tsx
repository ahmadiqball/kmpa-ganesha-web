import Image from 'next/image';

export function LingkunganHidupArticle() {
  return (
    <section className="px-24 py-16 flex gap-6 items-center">
      <Image
        className="shadow-2xl"
        height={ 300 }
        src="/assets/images/IMG_9969 1.png"
        width={ 450 }
      />

      <div className="color-[#0A2429] font-medium font-poppins">
        <h6 className="text-xl">Artikel Pilihan</h6>

        <h2 className="text-5xl mt-1">Ada Ada Saja</h2>

        <p className="mt-4 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur </p>
      </div>
    </section>
  );
}

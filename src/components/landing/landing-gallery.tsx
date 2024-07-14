import Image from 'next/image';

export function LandingGallery() {
  return (
    <section className="max-w-250 mx-auto my-10 flex h-115">
      <Image
        alt="gallery-1"
        className="w-2/3 h-full"
        height={ 400 }
        src="/assets/images/gallery-1.png"
        width={ 600 }
      />

      <div className="w-1/3 h-full color-white font-medium text-7 font-manrope">
        <div className="h-1/2 bg-[url(/assets/images/gallery-2.png)] bg-cover w-full flex items-end justify-end px-8 py-4">
          <p className="drop-shadow-[4px_4px_3px_rgba(0,0,0,.5)]">
            Judul Kegiatan Lain
          </p>
        </div>

        <div className="h-1/2 bg-[url(/assets/images/gallery-3.png)] bg-cover w-full px-8 py-4">
          <p className="drop-shadow-[4px_4px_3px_rgba(0,0,0,.5)] text-end">
            “Quote Kegiatan Lain-lain”
          </p>
        </div>
      </div>
    </section>
  );
}

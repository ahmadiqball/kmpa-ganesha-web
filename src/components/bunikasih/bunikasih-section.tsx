import Image from 'next/image';

export function BunikasihSection() {
  return (
    <section className="bg-[#0A2429] flex gap-12">
      <div className="relative shrink-0">
        <Image
          alt="bunikasih"
          className="h-135 w-92 object-cover object-center"
          height={ 2000 }
          src="/assets/backgrounds/img-bunikasih-1.png"
          width={ 1000 }
        />

        <Image
          alt="bunikasih"
          className="w-40 h-47 absolute right-1/20 bottom-1/20 translate-1/2"
          height={ 300 }
          src="/assets/backgrounds/img-bunikasih-2.png"
          width={ 300 }
        />
      </div>

      <div className="color-white font-poppins max-w-5/10">
        <h2 className="text-5xl font-medium">Sekilas Bunikasih</h2>

        <p className="text-xl mt-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          <br />

          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
    </section>
  );
}

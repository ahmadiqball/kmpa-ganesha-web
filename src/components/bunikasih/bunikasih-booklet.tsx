import Image from 'next/image';

export function BunikasihBooklet() {
  return (
    <section className="relative">
      <Image
        alt="bunikasih"
        height={ 500 }
        src="/assets/backgrounds/kubang 1.png"
        width={ 2000 }
      />

      <div className="absolute bg-gradient-to-b from-[#0A2429] to-transparent w-full h-full top-0 left-0" />

      <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
        <h5 className="text-4xl color-white italic font-poppins max-w-150 text-center font-300">
          Cek juga
          { ' ' }

          { ' ' }

          <span className="color-[#D68B30] font-medium">guide book</span>

          { ' ' }
          mengenai Bunikasih di sini!
        </h5>

        <Image
          alt="booklet bunikasih"
          className="w-80 mt-12 shadow-2xl"
          height={ 500 }
          src="/assets/images/sampul gb 1.png"
          width={ 300 }
        />
      </div>
    </section>
  );
}

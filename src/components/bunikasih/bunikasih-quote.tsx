import Image from 'next/image';

export function BunikasihQuote() {
  return (
    <section className="bg-[#0A2429] flex gap-12 items-center pl-20">
      <p className="font-poppins font-light italic text-4xl color-white text-center">
        “Quote Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utt”
      </p>

      <Image
        alt="bunikasih"
        className="h-120 w-120 object-cover object-center"
        height={ 1000 }
        src="/assets/images/img-bunikasih-3.png"
        width={ 1000 }
      />
    </section>
  );
}

import Image from 'next/image';

export function BunikasihHero() {
  return (
    <section className="relative w-full min-h-screen h-screen">
      <Image
        alt="Bunikasih"
        className="w-full h-screen object-cover object-center absolute top-0 left-0"
        fill
        src="/assets/backgrounds/bg-bunikasih.png"
      />

      <div className="relative z-10 flex flex-col w-full h-full justify-end max-w-280 mx-auto color-white pb-50 font-poppins text-xl font-light">
        <span>Cupunagara, Jawa Barat</span>

        <h1 className="font-florest text-[96px] leading-[1.05]">Bunikasih</h1>

        <p>Harmonisasi alam, masyarakat, dan konservasi</p>
      </div>

      <div className="bg-gradient-to-t from-[#0A2429] to-transparent w-full absolute bottom-0 h-100" />
    </section>
  );
}

import Image from 'next/image';

export function LayoutFooter() {
  return (
    <footer className="bg-[#0A2429]">
      <div className="mx-auto max-w-300 flex flex-col flex-wrap justify-between gap-8 px-4 py-13 md:flex-row md:gap-20">
        <figure className="min-w-fit flex items-center gap-3 color-white">
          <Image alt="logo" className="w-20 md:w-35" height={ 140 } src="/assets/images/logo-white.png" width={ 140 } />

          <h3 className="max-w-40 text-2xl font-florest md:text-4xl">KMPA Ganesha ITB</h3>
        </figure>

        <p className="w-max text-sm color-white md:text-base">
          Contact Person: 0812-1677-7593 (Kevin)
          <br />
          e-mail: kmpaganesha@km.itb.ac.id

          <br />

          <br />
          ITB Ganesha, Sunken Court, Jl. Ganesa No.10,

          <br />
          Lb. Siliwangi, Kecamatan Coblong,

          <br />
          Kota Bandung, Jawa Barat 40132
        </p>

        <div className="min-w-min color-white">
          <h6 className="text-xl font-bold">CONNECT WITH US</h6>

          <div className="mt-4 flex items-center gap-5">
            <i className="i-kmpa-linkedin text-3xl" />

            <i className="i-kmpa-spotify text-4xl" />

            <i className="i-kmpa-youtube text-4xl" />

            <i className="i-kmpa-instagram text-4xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}

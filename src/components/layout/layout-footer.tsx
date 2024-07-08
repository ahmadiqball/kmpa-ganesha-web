import Image from 'next/image';

export function LayoutFooter() {
  return (
    <footer className="bg-[#0A2429]">
      <div className="py-13 max-w-6xl mx-auto flex justify-between items-center">
        <figure className="flex items-center gap-3 color-white">
          <Image alt="logo" height={ 140 } src="/assets/images/logo-white.png" width={ 140 } />

          <h3 className="text-4xl w-40 font-florest">KMPA Ganesha ITB</h3>
        </figure>

        <p className="color-white w-89">
          Contact Person: 0812-1677-7593 (Kevin)
          e-mail: kmpaganesha@km.itb.ac.id
          <br />

          <br />
          ITB Ganesha, Sunken Court, Jl. Ganesa No.10,
          Lb. Siliwangi, Kecamatan Coblong,
          Kota Bandung, Jawa Barat 40132
        </p>

        <div className="color-white">
          <h6 className="text-xl font-bold text-center">CONNECT WITH US</h6>

          <div className="flex gap-5 items-center mt-4">
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

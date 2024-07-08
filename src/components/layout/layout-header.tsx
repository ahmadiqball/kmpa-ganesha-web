import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

const navigationItem = [
  {
    child: [
      { label: 'Ekspedisi dan Perjalanan', link: '/' },
      { label: 'Community Development', link: '/' },
      { label: 'Tanggap Bencana', link: '/' },
      { label: 'Lingkungan Hidup', link: '/' },
    ],
    label: 'Kegiatan',
  },
  {
    child: [
      { label: 'Organisasi', link: '/' },
      { label: 'Divisi Peminatan', link: '/' },
      { label: 'Pendidikan', link: '/' },

    ],
    label: 'Tentang KMPA',
  },
  {
    label: 'Galeri',
    link: '/',
  },
];

export function LayoutHeader() {
  return (
    <header className="bg-[#0A2429] fixed top-0 left-0 w-full">
      <NavigationMenu.Root className="max-w-6xl mx-auto py-3.5 flex items-center justify-between">
        <figure className="flex items-center gap-1">
          <Image alt="logo" height={ 40 } src="/assets/images/logo-white.png" width={ 40 } />

          <span className="font-florest color-white w-27 leading-[1.1]">KMPA GANESHA ITB</span>
        </figure>

        <NavigationMenu.List className="flex color-white gap-10 font-poppins">
          { navigationItem.map((item) => (
            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger>
                { item.label }
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="absolute bg-[#0A2429] w-70 bg-opacity-70 top-11">
                { item.child?.map((child) => (
                  <Link className="py-3 px-3 block" href={ child.link }>
                    { child.label }
                  </Link>
                )) }
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          )) }
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}

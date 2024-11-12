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
    <header className="fixed left-0 top-0 z-50 w-full bg-[#0A2429]">
      <NavigationMenu.Root className="mx-auto max-w-6xl flex items-center justify-between py-3.5">
        <Link className="flex items-center gap-1" href="/">
          <Image alt="logo" height={ 40 } src="/assets/images/logo-white.png" width={ 40 } />

          <span className="w-27 color-white leading-[1.1] font-florest">KMPA Ganesha ITB</span>
        </Link>

        <NavigationMenu.List className="flex gap-10 color-white font-poppins">
          { navigationItem.map((item) => (
            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger>
                { item.label }
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="absolute top-11 w-70 bg-[#0A2429] bg-opacity-70">
                { item.child?.map((child) => (
                  <Link className="block px-3 py-3" href={ child.link }>
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

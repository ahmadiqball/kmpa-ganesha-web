import type { Metadata } from 'next';

import { LayoutFooter } from '~/components/layout/layout-footer';
import { LayoutHeader } from '~/components/layout/layout-header';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | KMPA Ganesha ITB',
    default: 'KMPA Ganesha ITB',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/uno.css" rel="stylesheet" />
      </head>

      <body>
        <LayoutHeader />

        <main className="min-h-screen">
          { children }
        </main>

        <LayoutFooter />
      </body>
    </html>
  );
}

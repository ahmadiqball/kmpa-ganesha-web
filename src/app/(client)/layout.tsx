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
        <link href="/favicons/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />

        <link href="/favicons/favicon.svg" rel="icon" type="image/svg+xml" />

        <link href="/favicons/favicon.ico" rel="shortcut icon" />

        <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />

        <link href="/favicons/site.webmanifest" rel="manifest" />
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

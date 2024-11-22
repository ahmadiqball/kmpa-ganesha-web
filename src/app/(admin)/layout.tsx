import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | KMPA Ganesha ITB',
    default: 'Admin',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        { children }
      </body>
    </html>
  );
}

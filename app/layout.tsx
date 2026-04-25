import type { Metadata } from 'next';
import { Inter, Bubblegum_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bubblegum = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kids',
});

export const metadata: Metadata = {
  title: 'KidBoard Base',
  description: 'A fun, colorful achievement and exploration board for kids on the Base network.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bubblegum.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

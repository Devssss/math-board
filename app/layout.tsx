import type { Metadata } from 'next';
import { Inter, Bubblegum_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/onchain-providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bubblegum = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kids',
});

export async function generateMetadata(): Promise<Metadata> {
  const appUrl = process.env.APP_URL || '';
  return {
    title: 'KidBoard Base',
    description: 'A fun, colorful achievement and exploration board for kids on the Base network.',
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${appUrl}/og-image.png`,
        button: {
          title: 'Launch KidBoard',
          action: {
            type: 'launch_miniapp',
            name: 'KidBoard Base',
            url: appUrl,
            splashImageUrl: `${appUrl}/splash.png`,
            splashBackgroundColor: '#f8fafc',
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bubblegum.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#1e293b] bg-[#f8fafc]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

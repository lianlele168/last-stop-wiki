import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://laststop.robloxwikihub.com'),
  title: {
    default: 'Last Stop Wiki & Database — Bus Upgrades, Fuel Calculator & Codes',
    template: '%s | Last Stop Wiki',
  },
  description: 'The definitive community database for Last Stop on Roblox. Access real-time fuel and range calculators, redeem active Tickets codes, explore survivor classes tier lists, and weapons stats.',
  keywords: [
    'Last Stop roblox',
    'Last Stop codes',
    'Last Stop wiki',
    'Last Stop fuel calculator',
    'Last Stop classes tier list',
    'Last Stop weapons stats',
    'Last Stop bus upgrades',
    'Last Stop beginner guide',
    'The Hidden Route Last Stop'
  ],
  authors: [{ name: 'Last Stop Wiki Team' }],
  creator: 'Last Stop Community',
  publisher: 'Roblox Wiki Hub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laststop.robloxwikihub.com',
    siteName: 'Last Stop Wiki',
    title: 'Last Stop Wiki & Database — Roblox Survival Guide',
    description: 'Survive 95,000 meters in Roblox Last Stop. Interactive fuel simulator, verified codes, and class tier lists.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Stop Wiki — Roblox Survival Guide & Tools',
    description: 'Calculate fuel range to 95,000m, redeem active Tickets codes, and master every survivor class from Ghoul to Necromancer.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Last Stop Wiki',
    url: 'https://laststop.robloxwikihub.com',
    description: 'High-performance interactive database and tool suite for Roblox Last Stop.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://laststop.robloxwikihub.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-wasteland-950 text-gray-100 min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

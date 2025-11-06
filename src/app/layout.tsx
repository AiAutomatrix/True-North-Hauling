import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'True North Hauling | Cash for Cars & Scrap Removal in Winnipeg, MB',
  description: 'True North Hauling buys junk cars, trucks, and vans across Winnipeg and surrounding Manitoba areas. Get same-day pickup, instant cash, and free towing. We handle scrap vehicle removal, catalytic converter recycling, and commercial hauling. Family-owned, fast, and fair service you can trust.',
  keywords: 'cash for cars Winnipeg, scrap car removal Winnipeg, sell junk car Manitoba, vehicle hauling service, tow truck Winnipeg, catalytic converter recycling Winnipeg, free junk car pickup, commercial hauling Manitoba, used car buyer Winnipeg, flatbed towing service',
  alternates: {
    canonical: 'https://true-north-hauling.vercel.app/',
  },
  category: 'Automotive Services',
  themeColor: '#386641',
  manifest: '/manifest.json',
  openGraph: {
    title: 'True North Hauling | Cash for Cars & Scrap Removal in Winnipeg, MB',
    description: 'We pay top dollar for junk cars, scrap vehicles, and used catalytic converters in Winnipeg.',
    url: 'https://true-north-hauling.vercel.app/',
    siteName: 'True North Hauling',
    images: [
      {
        url: 'https://true-north-hauling.vercel.app/haul1.png', // Main image for sharing
        width: 1200,
        height: 630,
        alt: 'A flatbed tow truck ready for hauling a vehicle.',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True North Hauling | Cash for Cars & Scrap Removal in Winnipeg, MB',
    description: 'Fast cash for your junk cars and scrap metal in Winnipeg. Contact us for a free quote!',
    images: ['https://true-north-hauling.vercel.app/haul1.png'], // Main image for Twitter card
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'True North Hauling',
              url: 'https://true-north-hauling.vercel.app/',
              logo: 'https://true-north-hauling.vercel.app/haul1.png',
              image: 'https://true-north-hauling.vercel.app/haul1.png',
              description: 'We pay top dollar for junk cars, scrap vehicles, and used catalytic converters in Winnipeg and Manitoba.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Winnipeg',
                addressRegion: 'MB',
                addressCountry: 'CA',
              },
              areaServed: ['Winnipeg', 'Brandon', 'Steinbach', 'Selkirk'],
              openingHours: 'Mo-Sa 08:00-18:00',
              telephone: '+1-204-960-0090',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <script src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2025/11/05/22/20251105221411-X6KF1L25.js" defer></script>
      </body>
    </html>
  );
}

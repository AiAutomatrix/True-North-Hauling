import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'True North Hauling | Cash for Cars & Scrap Removal in Winnipeg, MB',
  description: 'Get top cash for your junk car, truck, or van in Winnipeg, Manitoba. True North Hauling offers fast, free vehicle hauling, scrap car removal, and vehicle purchasing services. Family-run, fair deals, and instant payment.',
  keywords: 'cash for cars, scrap car removal, junk car, vehicle hauling, car buying, Winnipeg, Manitoba, tow truck, flatbed service, catalytic converter recycling, commercial hauling',
  openGraph: {
    title: 'True North Hauling | Cash for Cars & Scrap Removal in Winnipeg, MB',
    description: 'We pay top dollar for junk cars, scrap vehicles, and used catalytic converters in Winnipeg.',
    url: 'https://true-north-hauling.vercel.app/',
    siteName: 'True North Hauling',
    images: [
      {
        url: '/haul1.png', // Main image for sharing
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
    images: ['/haul1.png'], // Main image for Twitter card
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

import { Metadata } from 'next'

export const metadatas: Metadata = {
  title: 'Ecosave Gas and Power | Business Utility Solutions',
  description: 'Compare business utility rates and find the best deals on energy, water, and waste management services.23456',
  metadataBase: new URL('https://ecosavegasandpower.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ecosave - Business Energy & Services Comparison',
    description: 'Compare and save on business energy, insurance, connectivity, and finance solutions.',
    url: 'https://ecosavegasandpower.com',
    siteName: 'Ecosave Gas & Power',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
import { Metadata } from 'next'

export const energymetadata: Metadata = {
  title: 'Save on Business Energy | Ecosave Gas & Power',
  description: 'Compare business energy suppliers and discover the cheapest business energy rates with Ecosave Gas & Power. We help UK businesses find the best commercial energy deals, reduce utility costs, and switch to reliable, cost-effective business gas and electricity plans. Start saving today with our expert business energy comparison and support.',
  keywords: ['Business Energy', 'Compare Business Utilities','edf business','british gas business','eon business energy','scottish power business energy',
    'business energy solutions','commercial energy suppliers','business gas prices','business electricity rates','business energy quotes','commercial gas suppliers',
    'commercial electricity providers','business energy switching','renewable business energy','green business energy','business energy contracts','SME energy deals',
    'business energy broker','business utility management','multi-site energy solutions','business energy savings','fixed business energy tariffs','flexible business energy plans',
    'business energy comparison','UK business energy suppliers','business energy consultancy','business energy support','business energy for offices','business energy for hospitality',
    'business energy for manufacturing','business energy for retail','business energy for farms','business energy customer service','business energy account management'],
  metadataBase: new URL('https://ecosavegasandpower.com/energy'),
  alternates: {
  canonical: '/energy',
    },
    openGraph: {
      title: 'Business Energy | Ecosave Gas & Power',
      description: 'Learn about Ecosave Gas and Power and our mission to help businesses reduce utility costs while promoting sustainable practices.',
      url: 'https://ecosavegasandpower.com/energy',
      siteName: 'Ecosave Gas & Power',
      locale: 'en_GB',
      type: 'website',
    },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },

} 
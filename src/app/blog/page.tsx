import { Metadata } from 'next'
import BlogContent from '@/components/features/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | Ecosave Gas & Power',
  description: 'Stay informed about energy management, sustainability, and industry trends with our latest articles and guides.',
  keywords: ['business energy','business gas','business electricity','business energy comparison','compare business energy prices',
    'switch business energy supplier', 'business energy savings','commercial energy suppliers','small business energy deals','medium business energy rates',
    'large business energy contracts','business utility management','business energy quotes online','renewable business energy','green business energy suppliers',
    'business energy switch UK','best business energy deals UK','business meter rates','energy broker UK','save money on business energy',
    'cheapest business gas rates UK','compare gas and electricity for business','energy saving tips for businesses','how to lower business energy bills',
    'fixed vs variable energy tariffs','when to renew business energy contracts','business energy market trends 2025','energy price cap for businesses', 
    'best time to switch business energy','carbon neutral business energy', 'renewable energy for SMEs', 'sustainability in business energy', 
    'how to reduce carbon footprint in the workplace','green business tariffs UK', 'eco-friendly energy suppliers','net zero business energy','UK energy market 2025',
     'commercial energy price trends','business utility management tips','energy market updates for businesses','energy broker insights',
      'smart meters for businesses','energy efficiency solutions UK','British Gas business','EDF business energy','E.ON Next business',
      'Octopus Energy business','Scottish Power business','SSE Energy Solutions','Npower Business Solutions','TotalEnergies Gas & Power',
      'Shell Energy business','SmartestEnergy UK','Haven Power business','Ecosave Gas & Power blog'],
      metadataBase: new URL('https://ecosavegasandpower.com/blog'),
      alternates: {
        canonical: '/blog',
        languages: {
          'en-US': '/blog/en',
          'es-ES': '/blog/es',
        },
      },
      openGraph: {
        title: 'Blog | Ecosave Gas & Power',
        description: 'Stay informed about energy management, sustainability, and industry trends with our latest articles and guides.',
        url: 'https://ecosavegasandpower.com/blog',
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
    };

export default function BlogPage() {
  return <BlogContent />
}
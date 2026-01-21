import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//static pages

  const staticUrls = [
    {
      url: 'https://ecosavegasandpower.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: 'https://ecosavegasandpower.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
      
    {
      url: 'https://ecosavegasandpower.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://ecosavegasandpower.com/careers',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://ecosavegasandpower.com/partners',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://ecosavegasandpower.com/water',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://ecosavegasandpower.com/waste',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://ecosavegasandpower.com/energy',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];


  const suppliers = [
    'britishgas',
    'eon',
    'YGP',
    'yu-energy',
    
  ];

  const supplierUrls = suppliers.map(name => ({
    url: `https://ecosavegasandpower.com/supplierpages/${name}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  
  // Blog post urls
  const blogUrls = blogPosts.map((post) => ({
    url: `https://ecosavegasandpower.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...supplierUrls, ...blogUrls]
}

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://klinickonnect.com';
  return [
    {
      url: `${baseUrl}/home`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/home#features`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/home#pricing`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/home#testimonials`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
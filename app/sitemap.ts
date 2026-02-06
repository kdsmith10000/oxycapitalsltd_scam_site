import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dirtycrypto.org'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/oxycapitals`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mirrorexp`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trucopy`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bridgestocks`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/everrextrade`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/affluenceaura`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

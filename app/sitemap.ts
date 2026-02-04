import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oxycapitals-scam.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

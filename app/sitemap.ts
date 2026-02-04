import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oxycapitals-scam.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/mirrorexp`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}

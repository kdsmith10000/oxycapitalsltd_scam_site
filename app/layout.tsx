import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCAM ALERT: OxyCapitals / OxyCapitalsLtd Exposed',
  description: 'Warning: OxyCapitals (oxycapitalsltd.com) is a cryptocurrency investment scam impersonating legitimate traders. Full blockchain evidence and transaction analysis inside.',
  keywords: 'oxycapitals, oxycapitalsltd, crypto scam, bitcoin scam, investment fraud, scam alert',
  openGraph: {
    title: 'SCAM ALERT: OxyCapitals Exposed - Full Evidence',
    description: 'Cryptocurrency investment scam exposed with full blockchain transaction analysis',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

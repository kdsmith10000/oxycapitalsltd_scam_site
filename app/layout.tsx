import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCAM ALERT: OxyCapitals / OxyCapitalsLtd Exposed | Crypto Phishing & Impersonation Scam',
  description: 'Warning: OxyCapitals (oxycapitalsltd.com) is a cryptocurrency investment scam impersonating Discord admins to steal Bitcoin. Full blockchain evidence, wallet addresses, and transaction analysis. Protect yourself from crypto phishing scams.',
  keywords: [
    'oxycapitals scam',
    'oxycapitalsltd scam',
    'oxycapitalsltd.com scam',
    'crypto scam',
    'cryptocurrency scam',
    'bitcoin scam',
    'crypto phishing',
    'cryptocurrency phishing',
    'discord impersonation scam',
    'crypto impersonation scam',
    'fake crypto trading platform',
    'crypto investment fraud',
    'bitcoin investment scam',
    'crypto scam warning',
    'cryptocurrency fraud alert',
    'fake crypto website',
    'crypto scam wallet address',
    'typosquatting scam',
    'discord admin impersonation',
    'crypto scam awareness',
    'how to spot crypto scams',
    'cryptocurrency scam report',
    'bitcoin fraud',
    'crypto theft',
    'fake trading platform scam',
    'pig butchering scam crypto',
    'romance scam crypto',
    'social engineering crypto scam',
  ].join(', '),
  authors: [{ name: 'Crypto Scam Awareness' }],
  creator: 'Crypto Scam Awareness',
  publisher: 'Crypto Scam Awareness',
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
  openGraph: {
    title: 'SCAM ALERT: OxyCapitals Exposed - Crypto Phishing & Impersonation Fraud',
    description: 'OxyCapitals (oxycapitalsltd.com) is a cryptocurrency scam impersonating Discord admins to steal Bitcoin. Full evidence and blockchain analysis inside.',
    type: 'website',
    locale: 'en_US',
    siteName: 'OxyCapitals Scam Exposed',
    images: [
      {
        url: '/evidence/scam homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'OxyCapitals Scam Website Homepage - Evidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCAM ALERT: OxyCapitals Crypto Scam Exposed',
    description: 'Warning: OxyCapitals impersonates Discord admins to steal cryptocurrency. Full evidence and wallet addresses exposed.',
    images: ['/evidence/scam homepage.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'scam awareness',
  other: {
    'google-site-verification': '',
    'revisit-after': '7 days',
    'rating': 'general',
    'referrer': 'origin-when-cross-origin',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': '#webpage',
      name: 'OxyCapitals Scam Exposed - Crypto Phishing Alert',
      description: 'Exposing the OxyCapitals cryptocurrency investment scam with full blockchain evidence and wallet addresses.',
      isPartOf: { '@id': '#website' },
      about: {
        '@type': 'Thing',
        name: 'Cryptocurrency Scam',
        description: 'A fraudulent cryptocurrency investment scheme using impersonation and phishing tactics',
      },
    },
    {
      '@type': 'WebSite',
      '@id': '#website',
      name: 'OxyCapitals Scam Exposed',
      description: 'Crypto scam awareness and fraud prevention resource',
    },
    {
      '@type': 'Article',
      '@id': '#article',
      headline: 'SCAM ALERT: OxyCapitals / OxyCapitalsLtd Cryptocurrency Fraud Exposed',
      description: 'Complete investigation and evidence exposing the OxyCapitals cryptocurrency scam, including blockchain transaction analysis, wallet addresses, and impersonation tactics.',
      author: {
        '@type': 'Organization',
        name: 'Crypto Scam Awareness',
      },
      datePublished: '2026-02-01',
      dateModified: '2026-02-03',
      articleSection: 'Scam Alert',
      keywords: 'oxycapitals scam, crypto scam, phishing, impersonation scam, bitcoin fraud, cryptocurrency fraud',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is OxyCapitals a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OxyCapitals (oxycapitalsltd.com) is a confirmed cryptocurrency scam. They impersonate legitimate Discord admins and crypto traders to trick victims into depositing Bitcoin and other cryptocurrencies to their wallet addresses. We have documented evidence including blockchain transaction analysis showing stolen funds being cashed out through exchanges.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the OxyCapitals scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The known scam wallet addresses include: Bitcoin (1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC, 1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2), Ethereum (0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09), and USDT Tron (TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR). Do NOT send any cryptocurrency to these addresses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the OxyCapitals scam work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scam operates by: 1) Impersonating trusted Discord admins using typosquatting (changing one letter in usernames), 2) Directing victims to their fake trading platform oxycapitalsltd.com, 3) Having victims deposit cryptocurrency which goes directly to the scammer\'s personal wallet, 4) The scammer then transfers funds to an exchange to cash out.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I sent money to OxyCapitals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you\'ve been scammed by OxyCapitals: 1) Report to FBI IC3 at ic3.gov, 2) Report to FTC at reportfraud.ftc.gov, 3) Report the wallet addresses to cryptocurrency exchanges like Binance and Coinbase, 4) Report the domain to the registrar Namecheap at abuse@namecheap.com, 5) Document all evidence including messages and transactions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I identify crypto impersonation scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Watch for these red flags: 1) Unsolicited messages about investment opportunities, 2) Usernames that look similar but have slight differences (typosquatting), 3) Pressure to act quickly or send money, 4) Requests to use unfamiliar trading platforms, 5) Promises of guaranteed returns. Always verify identities through official channels and never send crypto to strangers.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  title: 'MirrorExp Scam Exposed - $22,000+ Stolen via Typosquatting',
  description: 'SCAM ALERT: MirrorExp.com is a cryptocurrency scam using typosquatting to impersonate Discord admins. $22,000+ stolen in Bitcoin, Ethereum, and USDT. Full blockchain evidence, wallet addresses, and money laundering analysis exposed.',
  keywords: [
    'mirrorexp scam',
    'mirrorexp.com scam',
    'mirror exp scam',
    'mirrorexp review',
    'is mirrorexp legit',
    'mirrorexp fraud',
    'mirrorexp crypto scam',
    '_atraveller scam',
    'atraveller discord scam',
    'typosquatting scam',
    'typosquatting crypto',
    'typosquatting discord',
    'discord impersonation scam',
    'discord admin scam',
    'fake crypto trading platform',
    'bitcoin scam 2026',
    'crypto scam 2026',
    'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v',
    '0xE28425B27d555f870d3CaCAC4Bf7F549c768022F',
    'cryptocurrency impersonation',
    'crypto phishing',
    'fake trading platform',
    'bitcoin fraud',
    'ethereum scam',
    'usdt scam',
    'usdc scam',
  ].join(', '),
  openGraph: {
    title: 'MirrorExp Scam Exposed - Typosquatting Crypto Fraud',
    description: '$22,000+ stolen via typosquatting impersonation. Full blockchain evidence and wallet addresses exposed.',
    type: 'article',
    locale: 'en_US',
    url: `${baseUrl}/mirrorexp`,
    siteName: 'Dirty Crypto Scams',
    images: [
      {
        url: `${baseUrl}/evidence/mirrorexp/scam site screenshot evidence.jpg`,
        width: 1200,
        height: 630,
        alt: 'MirrorExp Scam Website - Fake Crypto Trading Platform Evidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MirrorExp Scam - $22,000+ Stolen via Typosquatting',
    description: 'Exposing MirrorExp.com crypto scam with blockchain evidence. Typosquatting impersonation attack documented.',
    images: [`${baseUrl}/evidence/mirrorexp/scam site screenshot evidence.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/mirrorexp`,
  },
}

// Page-specific JSON-LD
const mirrorExpJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/mirrorexp#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Dirty Crypto', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'MirrorExp Scam Investigation', item: `${baseUrl}/mirrorexp` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${baseUrl}/mirrorexp#article`,
      headline: 'MirrorExp Scam Exposed - $22,000+ Stolen via Typosquatting Attack',
      description: 'Complete investigation exposing the MirrorExp cryptocurrency scam including typosquatting tactics, blockchain transaction analysis, staging wallets, and exchange cash-out evidence.',
      image: `${baseUrl}/evidence/mirrorexp/scam site screenshot evidence.jpg`,
      author: {
        '@type': 'Organization',
        name: 'Dirty Crypto Scams',
        url: baseUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dirty Crypto Scams',
        url: baseUrl,
      },
      datePublished: '2026-02-02',
      dateModified: '2026-02-04',
      mainEntityOfPage: `${baseUrl}/mirrorexp`,
      articleSection: ['Scam Alert', 'Typosquatting', 'Blockchain Analysis'],
      keywords: 'mirrorexp scam, typosquatting, discord impersonation, crypto fraud, bitcoin scam',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is MirrorExp a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, MirrorExp (mirrorexp.com) is a confirmed cryptocurrency scam. They have stolen over $22,000 by impersonating Discord admins using typosquatting - changing ".atraveller" to "_atraveller" (a period to an underscore). Victims are directed to deposit crypto which is rapidly moved through staging wallets to exchanges.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the MirrorExp scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Known MirrorExp scam wallets: Bitcoin Primary (bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v) with $21,853 stolen, Ethereum/USDC (0xE28425B27d555f870d3CaCAC4Bf7F549c768022F), USDT (0xF4eE6d12f95f401BF6b0aB488Ec18E43bfdbeAFC). Funds flow to a $2.1M exchange consolidation pool at bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the MirrorExp typosquatting scam work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scammer creates a Discord username nearly identical to a real admin by changing one character: ".atraveller" becomes "_atraveller" (period → underscore). This subtle change is hard to spot. They then DM victims pretending to be the real admin, building trust before directing them to deposit crypto on the fake MirrorExp platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast does MirrorExp move stolen funds?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MirrorExp operates with alarming speed: Bitcoin deposits are moved to staging wallets within 74 minutes, and Ethereum is cashed out within just 5 minutes. This rapid extraction indicates automated monitoring of deposit wallets, making fund recovery extremely difficult.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Spot Typosquatting Scams Like MirrorExp',
      description: 'Learn to identify username impersonation attacks',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Check every character',
          text: 'Compare usernames character by character. Periods (.) and underscores (_) look similar. Letters like l, I, and 1 can be swapped.',
        },
        {
          '@type': 'HowToStep',
          name: 'Verify through official channels',
          text: 'If an admin contacts you, verify their identity through the official server or community channels before engaging.',
        },
        {
          '@type': 'HowToStep',
          name: 'Be suspicious of investment opportunities',
          text: 'Real community admins do not DM users with investment opportunities or requests to deposit cryptocurrency.',
        },
      ],
    },
  ],
}

export default function MirrorExpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mirrorExpJsonLd) }}
      />
      {children}
    </>
  )
}

import type { Metadata } from 'next'

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  title: 'OxyCapitals Scam Exposed - $40,400+ Stolen via Discord Impersonation',
  description: 'SCAM ALERT: OxyCapitalsLtd.com is a cryptocurrency scam using Discord admin impersonation. $40,400+ stolen in Bitcoin, Ethereum, and USDT. Full blockchain evidence, wallet addresses, and exchange cash-out analysis exposed.',
  keywords: [
    'oxycapitals scam',
    'oxycapitalsltd scam',
    'oxycapitalsltd.com scam',
    'oxycapitals review',
    'is oxycapitals legit',
    'oxycapitals fraud',
    'oxycapitals crypto scam',
    'sajmaogs scam',
    'sajmaogs discord',
    'salmaogs impersonation',
    'bridgestocks scam',
    'bridgestocks.com scam',
    'discord impersonation scam',
    'discord admin scam',
    'fake crypto trading platform',
    'bitcoin scam 2026',
    'crypto scam 2026',
    '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC',
    '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2',
    '0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09',
    'cryptocurrency impersonation',
    'crypto phishing',
    'fake trading platform',
    'bitcoin fraud',
    'ethereum scam',
    'usdt scam',
    'tron scam',
    'bybit scam wallet',
  ].join(', '),
  openGraph: {
    title: 'OxyCapitals Scam Exposed - Discord Impersonation Crypto Fraud',
    description: '$40,400+ stolen via Discord admin impersonation. Full blockchain evidence and wallet addresses exposed.',
    type: 'article',
    locale: 'en_US',
    url: `${baseUrl}/oxycapitals`,
    siteName: 'Dirty Crypto Scams',
      images: [
      {
        url: `${baseUrl}/evidence/scam%20homepage.jpg`,
        width: 1200,
        height: 630,
        alt: 'OxyCapitals Scam Website - Fake Crypto Trading Platform Evidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OxyCapitals Scam - $40,400+ Stolen via Discord Impersonation',
    description: 'Exposing OxyCapitalsLtd.com crypto scam with blockchain evidence. Impersonation attack documented.',
    images: [`${baseUrl}/evidence/scam%20homepage.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/oxycapitals`,
  },
}

// Page-specific JSON-LD
const oxyCapitalsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/oxycapitals#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Dirty Crypto', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'OxyCapitals Scam Investigation', item: `${baseUrl}/oxycapitals` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${baseUrl}/oxycapitals#article`,
      headline: 'OxyCapitals Scam Exposed - $40,400+ Stolen via Discord Impersonation',
      description: 'Complete investigation exposing the OxyCapitals cryptocurrency scam including Discord impersonation tactics, blockchain transaction analysis, multi-chain fund tracking, and exchange cash-out evidence.',
      image: `${baseUrl}/evidence/scam homepage.jpg`,
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
      datePublished: '2026-01-15',
      dateModified: '2026-02-04',
      mainEntityOfPage: `${baseUrl}/oxycapitals`,
      articleSection: ['Scam Alert', 'Discord Impersonation', 'Blockchain Analysis'],
      keywords: 'oxycapitals scam, oxycapitalsltd, discord impersonation, crypto fraud, bitcoin scam, sajmaogs',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is OxyCapitals a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OxyCapitals (oxycapitalsltd.com) is a confirmed cryptocurrency scam. They have stolen over $40,400 by impersonating Discord admins using typosquatting - changing "salmaogs" to "sajmaogs" (l to j). Victims are directed to deposit crypto on their fake trading platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the OxyCapitals scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Known OxyCapitals scam wallets: Bitcoin Collection (1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC), Bitcoin Personal (1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2), Bitcoin ByBit (192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB), Ethereum (0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09), USDT Tron (TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR). Do NOT send crypto to these addresses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the OxyCapitals impersonation scam work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scammer creates a Discord username nearly identical to a real admin by changing one letter: "salmaogs" becomes "sajmaogs" (l → j). They copy the profile picture and bio, then DM victims pretending to be the real admin, building trust before directing them to deposit crypto on the fake OxyCapitals platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is OxyCapitals related to BridgeStocks scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, BridgeStocks.com was a previous scam domain operated using the same Discord impersonation account (sajmaogs) and identical tactics. BridgeStocks has been taken down, but the operators continue with OxyCapitals and potentially other domains.',
          },
        },
        {
          '@type': 'Question',
          name: 'Has OxyCapitals been reported to authorities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OxyCapitals has been officially reported to Netcraft (cybersecurity authority) with Report ID f2f3oteicz4yrmh2qenr54. The domain is classified as Phishing & Malicious. Victims should also report to FBI IC3 and FTC.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Spot Discord Impersonation Scams Like OxyCapitals',
      description: 'Learn to identify Discord admin impersonation attacks',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Check username character by character',
          text: 'Compare usernames letter by letter. Similar characters like l/j, I/l/1, o/0 can be swapped. "salmaogs" vs "sajmaogs" differs by just one letter.',
        },
        {
          '@type': 'HowToStep',
          name: 'Verify through official server channels',
          text: 'If an admin contacts you via DM, verify their identity by checking their profile in the official server member list.',
        },
        {
          '@type': 'HowToStep',
          name: 'Never trust unsolicited investment opportunities',
          text: 'Real community admins do not DM users with investment opportunities or requests to deposit cryptocurrency on external platforms.',
        },
        {
          '@type': 'HowToStep',
          name: 'Research any platform before depositing',
          text: 'Search "[platform name] scam" before depositing. Check for legitimate business registration, team members, and user reviews.',
        },
      ],
    },
  ],
}

export default function OxyCapitalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(oxyCapitalsJsonLd) }}
      />
      {children}
    </>
  )
}

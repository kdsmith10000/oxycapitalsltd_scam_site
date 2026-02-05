import type { Metadata } from 'next'

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  title: 'TruCopy Scam Exposed - $30,869 Stolen via Multi-Chain Fraud',
  description: 'SCAM ALERT: TruCopy.org is a cryptocurrency scam using Discord impersonation to steal Bitcoin, Solana, Ethereum, and more. $30,869 stolen across 3 blockchains. Full blockchain evidence, transaction tables, and wallet addresses exposed.',
  keywords: [
    'trucopy scam',
    'trucopy.org scam',
    'trucopy review',
    'is trucopy legit',
    'trucopy fraud',
    'trucopy crypto scam',
    'trucopy warning',
    'discord impersonation scam',
    'discord admin scam',
    'fake crypto trading platform',
    'bitcoin scam 2026',
    'crypto scam 2026',
    'multi-chain scam',
    'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
    '0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529',
    'cryptocurrency impersonation',
    'crypto phishing',
    'fake trading platform',
    'bitcoin fraud',
    'ethereum scam',
    'solana scam',
    'litecoin scam',
    'dogecoin scam',
  ].join(', '),
  openGraph: {
    title: 'TruCopy Scam Exposed - Multi-Chain Crypto Fraud',
    description: '$30,869 stolen via Discord impersonation across Bitcoin, Solana, and Ethereum. Full blockchain evidence and wallet addresses exposed.',
    type: 'article',
    locale: 'en_US',
    url: `${baseUrl}/trucopy`,
    siteName: 'Dirty Crypto Scams',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruCopy Scam - $30,869 Stolen via Multi-Chain Fraud',
    description: 'Exposing TruCopy.org crypto scam with blockchain evidence. Discord impersonation attack stealing Bitcoin, Solana, and Ethereum.',
  },
  alternates: {
    canonical: `${baseUrl}/trucopy`,
  },
}

// Page-specific JSON-LD
const truCopyJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${baseUrl}/trucopy#article`,
      headline: 'TruCopy Scam Exposed - $25,000+ Stolen via Multi-Chain Discord Impersonation',
      description: 'Complete investigation exposing the TruCopy cryptocurrency scam including Discord impersonation tactics, blockchain transaction analysis across 8 different chains, and exchange cash-out evidence.',
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
      datePublished: '2026-02-04',
      dateModified: '2026-02-04',
      mainEntityOfPage: `${baseUrl}/trucopy`,
      articleSection: ['Scam Alert', 'Multi-Chain Fraud', 'Blockchain Analysis'],
      keywords: 'trucopy scam, discord impersonation, crypto fraud, bitcoin scam, multi-chain scam',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is TruCopy a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, TruCopy (trucopy.org) is a confirmed cryptocurrency scam. They have stolen over $25,000 in Bitcoin alone by impersonating Discord admins. The platform accepts deposits across 8 different cryptocurrencies (BTC, ETH, BCH, TRX, USDT, LTC, DOGE, SOL) to maximize theft potential.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the TruCopy scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Known TruCopy scam wallets include: Bitcoin (bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf) with $25,031 stolen, Ethereum/USDT (0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529), Tron (THGF14Xbju5nj2PZBW4yzCyLZCSj7ftZhw), Litecoin (Lhice6C2VmNo9FwgGfjPo7spr9T7Yo9NwC), Dogecoin (DE3BCqMmFNMs1VqGTcLCJVFPe2qCoPewij), and Solana (Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ).',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the TruCopy scam work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scammers impersonate trusted Discord admins and direct victims to deposit cryptocurrency on the fake TruCopy trading platform. The platform accepts 8 different cryptocurrencies to maximize theft. Once deposited, funds are rapidly moved to exchange wallets for cash-out, often within hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does TruCopy accept so many cryptocurrencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TruCopy accepts 8 different cryptocurrencies (BTC, ETH, BCH, TRX, USDT, LTC, DOGE, SOL) to maximize theft potential. By accepting whatever crypto victims hold, scammers increase their chances of receiving deposits. Legitimate platforms are typically more selective about supported currencies.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Spot Multi-Chain Crypto Scams Like TruCopy',
      description: 'Learn to identify fraudulent crypto platforms',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Check cryptocurrency support',
          text: 'Be suspicious of platforms accepting many different cryptocurrencies. Scammers maximize theft by accepting any crypto victims might hold.',
        },
        {
          '@type': 'HowToStep',
          name: 'Verify through official channels',
          text: 'If someone contacts you about an investment, verify their identity through official community channels before engaging.',
        },
        {
          '@type': 'HowToStep',
          name: 'Research the platform',
          text: 'Search for reviews and scam reports. Check if the company has verifiable registration and a real team.',
        },
        {
          '@type': 'HowToStep',
          name: 'Never trust unsolicited investment offers',
          text: 'Real admins do not DM users with investment opportunities. Any unsolicited crypto investment offer is likely a scam.',
        },
      ],
    },
  ],
}

export default function TruCopyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(truCopyJsonLd) }}
      />
      {children}
    </>
  )
}

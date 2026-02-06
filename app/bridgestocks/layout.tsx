import type { Metadata } from 'next'

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  title: 'BridgeStocks Scam Exposed - $35,389 Stolen via Discord Impersonation',
  description: 'SCAM ALERT: BridgeStocks.com was a cryptocurrency scam using Discord impersonation to steal Bitcoin. $35,389 stolen across 79 transactions. Full blockchain evidence, statistical analysis (HHI, Gini, Chi-squared), and wallet addresses exposed. Site taken down after Chainabuse report.',
  keywords: [
    'bridgestocks scam',
    'bridgestocks.com scam',
    'bridgestocks review',
    'is bridgestocks legit',
    'bridgestocks fraud',
    'bridgestocks crypto scam',
    'bridgestocks warning',
    'discord impersonation scam',
    'discord admin scam',
    'fake crypto trading platform',
    'bitcoin scam 2025',
    'bitcoin scam 2026',
    'crypto scam 2025',
    'crypto scam 2026',
    'typosquatting scam',
    'bc1qhppwpsp7hjxml7hpgwr9tk5xpadfuck2u0xktu',
    '1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc',
    '1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp',
    'cryptocurrency impersonation',
    'crypto phishing',
    'fake trading platform',
    'bitcoin fraud',
    'chainabuse report',
    'blockchain analysis',
    'herfindahl hirschman index',
  ].join(', '),
  openGraph: {
    title: 'BridgeStocks Scam Exposed - $35,389 Stolen via Discord Impersonation',
    description: '$35,389 stolen via Discord impersonation. Full blockchain evidence, statistical analysis, and wallet addresses exposed. Site taken down.',
    type: 'article',
    locale: 'en_US',
    url: `${baseUrl}/bridgestocks`,
    siteName: 'Dirty Crypto Scams',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BridgeStocks Scam - $35,389 Stolen via Discord Impersonation',
    description: 'Exposing BridgeStocks.com crypto scam with blockchain evidence and statistical analysis. Discord impersonation attack documented.',
  },
  alternates: {
    canonical: `${baseUrl}/bridgestocks`,
  },
}

// Page-specific JSON-LD
const bridgeStocksJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/bridgestocks#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Dirty Crypto', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'BridgeStocks Scam Investigation', item: `${baseUrl}/bridgestocks` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${baseUrl}/bridgestocks#article`,
      headline: 'BridgeStocks Scam Exposed - $35,389 Stolen via Discord Impersonation',
      description: 'Complete investigation exposing the BridgeStocks cryptocurrency scam including Discord impersonation tactics, blockchain transaction analysis with statistical methods (HHI, Gini Coefficient, Chi-squared), and exchange cash-out evidence.',
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
      datePublished: '2026-02-05',
      dateModified: '2026-02-05',
      mainEntityOfPage: `${baseUrl}/bridgestocks`,
      articleSection: ['Scam Alert', 'Blockchain Analysis', 'Statistical Analysis'],
      keywords: 'bridgestocks scam, discord impersonation, crypto fraud, bitcoin scam, statistical analysis',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is BridgeStocks a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, BridgeStocks (bridgestocks.com) was a confirmed cryptocurrency scam that stole $35,389 in Bitcoin. The site has been taken down after being reported to Chainabuse and the hosting provider. The scam used Discord impersonation to lure victims to a fake trading platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the BridgeStocks scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The BridgeStocks scam collection wallet is bc1qhppwpsp7hjxml7hpgwr9tk5xpadfuck2u0xktu. Funds were cashed out to 1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc ($27,962 - 89.8% of outflows) and 1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp ($2,539 - 8.2% of outflows).',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the BridgeStocks scam work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A scammer impersonated a Discord admin and directed victims to deposit cryptocurrency on the fake BridgeStocks trading platform. The deposit page accepted any value including non-numeric inputs like "LOL", proving it was fake. Deposited funds were rapidly moved to personal cash-out wallets.',
          },
        },
        {
          '@type': 'Question',
          name: 'What statistical methods were used to analyze BridgeStocks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The analysis used the Herfindahl-Hirschman Index (HHI = 0.8135, extremely concentrated), Gini Coefficient (0.96, near-perfect inequality), and Chi-squared test (p < 0.001) to confirm statistically significant behavioral changes before and after the Chainabuse report was filed.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Spot Crypto Scams Like BridgeStocks',
      description: 'Learn to identify fraudulent crypto platforms',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Test the deposit page',
          text: 'Try entering non-numeric values in the deposit field. If the platform accepts "LOL" as a deposit amount, it is clearly fake.',
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

export default function BridgeStocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bridgeStocksJsonLd) }}
      />
      {children}
    </>
  )
}

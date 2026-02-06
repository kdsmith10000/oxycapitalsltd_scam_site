import type { Metadata } from 'next'

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  title: 'AffluenceAura Scam Exposed - Abandoned Fake Investment Platform',
  description: 'SCAM ALERT: AffluenceAura.com is a fraudulent crypto investment platform with empty scam wallets on BTC, ETH, and BNB. Same V12Hosting as EverrexTrade scam. WhatsApp contact +1 406-330-0697. Not a registered business. Domain registered via Cosmotown Inc.',
  keywords: [
    'affluenceaura scam',
    'affluenceaura.com scam',
    'affluence aura scam',
    'is affluenceaura legit',
    'affluenceaura review',
    'affluenceaura fraud',
    'affluence aura review',
    'affluence aura crypto',
    'fake investment platform',
    'fake crypto trading platform',
    'crypto scam 2026',
    'abandoned crypto scam',
    'v12hosting scam',
    'cosmotown scam domain',
    'bc1ql6w87cknrxf7qn5x5rhejw8tufche4rykgqmfx',
    '0xB6C8EE0e6814d7016cF8afeA89942CDE382AC87a',
    'whatsapp crypto scam',
    '+1 406-330-0697 scam',
  ].join(', '),
  openGraph: {
    title: 'AffluenceAura Scam Exposed - Abandoned Fake Investment Platform',
    description: 'AffluenceAura.com is a fake crypto investment platform with empty scam wallets. Same hosting as EverrexTrade. Full domain analysis and wallet evidence documented.',
    type: 'article',
    locale: 'en_US',
    url: `${baseUrl}/affluenceaura`,
    siteName: 'Dirty Crypto Scams',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AffluenceAura Scam - Abandoned Fake Investment Platform Exposed',
    description: 'Exposing AffluenceAura.com fake investment platform. Empty scam wallets, same V12Hosting as EverrexTrade, WhatsApp contact traced.',
  },
  alternates: {
    canonical: `${baseUrl}/affluenceaura`,
  },
}

const affluenceAuraJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/affluenceaura#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Dirty Crypto', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'AffluenceAura Scam Investigation', item: `${baseUrl}/affluenceaura` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${baseUrl}/affluenceaura#article`,
      headline: 'AffluenceAura Scam Exposed - Abandoned Fake Crypto Investment Platform',
      description: 'Investigation exposing AffluenceAura.com as a fraudulent investment platform with empty scam wallets across BTC, ETH, and BNB. Shares V12Hosting infrastructure with EverrexTrade scam. WhatsApp number and domain analysis documented.',
      author: { '@type': 'Organization', name: 'Dirty Crypto Scams', url: baseUrl },
      publisher: { '@type': 'Organization', name: 'Dirty Crypto Scams', url: baseUrl },
      datePublished: '2026-02-05',
      dateModified: '2026-02-05',
      mainEntityOfPage: `${baseUrl}/affluenceaura`,
      articleSection: ['Scam Alert', 'Fake Investment Platform', 'Abandoned Scam'],
      keywords: 'affluenceaura scam, fake investment platform, abandoned crypto scam, v12hosting, whatsapp scam',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is AffluenceAura a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, AffluenceAura (affluenceaura.com) is a confirmed scam. It is a fake crypto investment platform with empty scam wallets on Bitcoin, Ethereum, and BNB. The site is not a registered business, uses WHOIS privacy, and shares the same V12Hosting infrastructure as the known EverrexTrade scam. No money has been deposited into its wallets, suggesting it was abandoned before gaining victims.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the AffluenceAura scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Known AffluenceAura scam wallets include: Bitcoin (bc1ql6w87cknrxf7qn5x5rhejw8tufche4rykgqmfx), Ethereum/BNB (0xB6C8EE0e6814d7016cF8afeA89942CDE382AC87a), and a possible Tezos address (TZB2iyLWCyiQXa7K8GAMs12XGR12FkqRzL). All wallets have zero transactions and zero balance as of February 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AffluenceAura connected to other scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AffluenceAura shares the same V12Hosting nameservers (ns1.v12hosting.com, ns2.v12hosting.com) as the EverrexTrade scam, suggesting they may be operated by the same network or built from the same scam kit. Both are fake trading/investment platforms with hidden domain registration.',
          },
        },
      ],
    },
  ],
}

export default function AffluenceAuraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(affluenceAuraJsonLd) }}
      />
      {children}
    </>
  )
}

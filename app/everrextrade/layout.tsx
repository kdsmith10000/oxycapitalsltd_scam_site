import type { Metadata } from 'next'

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  title: 'EverrexTrade Scam Exposed - Fake Forex Trading Platform',
  description: 'SCAM ALERT: EverrexTrade.com (Everrex Trade) is a fraudulent trading platform promoted through Discord impersonation. Uses typosquatting username salmaogs_pm to impersonate real admin salmaogs. Domain registered via GoDaddy with hidden WHOIS. Investigation ongoing.',
  keywords: [
    'everrextrade scam',
    'everrextrade.com scam',
    'everrex trade scam',
    'everrex scam',
    'is everrextrade legit',
    'everrextrade review',
    'everrextrade fraud',
    'everrex trade review',
    'salmaogs_pm scam',
    'salmaogs_pm discord',
    'discord impersonation scam',
    'discord admin scam',
    'fake forex trading platform',
    'fake trading platform scam',
    'crypto scam 2026',
    'typosquatting scam',
    'discord crypto scam',
    'cryptocurrency impersonation',
    'fake stocks trading',
    'everrex fraud',
  ].join(', '),
  openGraph: {
    title: 'EverrexTrade Scam Exposed - Fake Forex Trading Platform',
    description: 'EverrexTrade.com is a fake trading platform promoted via Discord impersonation. Username salmaogs_pm impersonates real admin salmaogs. Full evidence documented.',
    type: 'article',
    locale: 'en_US',
    url: `${baseUrl}/everrextrade`,
    siteName: 'Dirty Crypto Scams',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EverrexTrade Scam - Fake Forex Trading Platform Exposed',
    description: 'Exposing EverrexTrade.com fake trading platform. Discord impersonation via typosquatting to lure victims. Domain analysis and evidence documented.',
  },
  alternates: {
    canonical: `${baseUrl}/everrextrade`,
  },
}

const everrexTradeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/everrextrade#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Dirty Crypto', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'EverrexTrade Scam Investigation', item: `${baseUrl}/everrextrade` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${baseUrl}/everrextrade#article`,
      headline: 'EverrexTrade Scam Exposed - Fake Forex Trading Platform Using Discord Impersonation',
      description: 'Investigation exposing EverrexTrade.com as a fraudulent trading platform promoted through Discord impersonation and typosquatting. Domain analysis, scammer conversations, and platform evidence documented.',
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
      mainEntityOfPage: `${baseUrl}/everrextrade`,
      articleSection: ['Scam Alert', 'Fake Trading Platform', 'Discord Impersonation'],
      keywords: 'everrextrade scam, everrex trade fraud, fake forex platform, discord impersonation, typosquatting',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is EverrexTrade a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, EverrexTrade (everrextrade.com) is a confirmed scam. The site is a fake forex/stocks trading platform promoted through Discord impersonation. The scammer uses the username salmaogs_pm to impersonate a real community admin. The website contains Latin placeholder text (lorem ipsum), hidden WHOIS registration, and uses the exact same impersonation tactics as other known scam operations like OxyCapitals, MirrorExp, and TruCopy.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the EverrexTrade scam work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The scammer creates a fake Discord account (salmaogs_pm) that impersonates a real community admin (salmaogs). They DM potential victims asking about their "trading progress" and direct them to register on everrextrade.com, described as an "expert mirror trading broker." The site is a fraudulent platform designed to steal deposits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is behind the EverrexTrade scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The domain everrextrade.com is registered through GoDaddy with WHOIS privacy (Domains By Proxy, LLC). The scammer operates under the Discord username salmaogs_pm, impersonating the same real admin (salmaogs) targeted by multiple other scam operations. This suggests a coordinated criminal network.',
          },
        },
      ],
    },
  ],
}

export default function EverrexTradeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(everrexTradeJsonLd) }}
      />
      {children}
    </>
  )
}

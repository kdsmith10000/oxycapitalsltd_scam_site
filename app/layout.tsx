import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://dirtycrypto.org'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dirty Crypto Scams Exposed | OxyCapitals & MirrorExp Fraud Alert',
    template: '%s | Dirty Crypto Scams',
  },
  description: 'Exposing cryptocurrency scams with blockchain evidence. OxyCapitals, MirrorExp, and other crypto frauds documented with wallet addresses, transaction analysis, and impersonation tactics. $62,400+ stolen. Protect yourself from Bitcoin, Ethereum, and USDT scams.',
  keywords: [
    // Brand/Domain keywords
    'dirty crypto scams',
    'dirtycrypto',
    'crypto scam database',
    'cryptocurrency fraud database',
    // Specific scam names
    'oxycapitals scam',
    'oxycapitalsltd scam',
    'oxycapitalsltd.com scam',
    'oxycapitals review',
    'is oxycapitals legit',
    'oxycapitals fraud',
    'mirrorexp scam',
    'mirrorexp.com scam',
    'mirror exp scam',
    'mirrorexp review',
    'is mirrorexp legit',
    'mirrorexp fraud',
    'bridgestocks scam',
    'bridgestocks.com scam',
    // Scammer usernames
    'sajmaogs scam',
    'sajmaogs discord',
    '_atraveller scam',
    'atraveller discord scam',
    // General crypto scam keywords
    'crypto scam',
    'cryptocurrency scam',
    'bitcoin scam',
    'bitcoin scam 2026',
    'crypto scam 2026',
    'ethereum scam',
    'usdt scam',
    'usdc scam',
    'tether scam',
    'crypto phishing',
    'cryptocurrency phishing',
    'crypto phishing attack',
    // Scam types
    'discord impersonation scam',
    'discord scam',
    'discord crypto scam',
    'crypto impersonation scam',
    'fake crypto trading platform',
    'fake crypto exchange',
    'crypto investment fraud',
    'bitcoin investment scam',
    'crypto scam warning',
    'cryptocurrency fraud alert',
    'fake crypto website',
    'crypto scam wallet address',
    'scam bitcoin wallet',
    'scam ethereum wallet',
    // Typosquatting
    'typosquatting scam',
    'typosquatting attack crypto',
    'typosquatting discord',
    'username impersonation',
    'discord admin impersonation',
    // Educational
    'crypto scam awareness',
    'how to spot crypto scams',
    'how to identify crypto scam',
    'cryptocurrency scam report',
    'report crypto scam',
    'bitcoin fraud',
    'crypto theft',
    'stolen bitcoin',
    'stolen cryptocurrency',
    'fake trading platform scam',
    // Pig butchering
    'pig butchering scam',
    'pig butchering scam crypto',
    'romance scam crypto',
    'crypto romance scam',
    'social engineering crypto scam',
    // Recovery/reporting
    'crypto scam recovery',
    'report bitcoin scam',
    'fbi crypto scam',
    'ic3 crypto fraud',
    // Wallet addresses (for people searching specific addresses)
    '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC',
    '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2',
    '0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09',
    'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v',
  ].join(', '),
  authors: [{ name: 'Dirty Crypto Scams' }, { name: 'Crypto Scam Awareness' }],
  creator: 'Dirty Crypto Scams',
  publisher: 'Dirty Crypto Scams',
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
    title: 'Dirty Crypto Scams - Exposing Cryptocurrency Fraud with Blockchain Evidence',
    description: '$62,400+ stolen by OxyCapitals & MirrorExp scams. Full blockchain analysis, wallet addresses, and evidence exposed. Protect yourself from crypto fraud.',
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Dirty Crypto Scams',
    images: [
      {
        url: `${baseUrl}/evidence/scam homepage.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dirty Crypto Scams - Exposing OxyCapitals and MirrorExp Cryptocurrency Fraud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dirty Crypto Scams - $62,400+ Stolen Exposed',
    description: 'Exposing cryptocurrency scams with blockchain evidence. OxyCapitals, MirrorExp, and other crypto frauds documented.',
    images: [`${baseUrl}/evidence/scam homepage.jpg`],
    creator: '@dirtycryptoscam',
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'scam awareness',
  other: {
    'google-site-verification': '',
    'revisit-after': '3 days',
    'rating': 'general',
    'referrer': 'origin-when-cross-origin',
    'msvalidate.01': '',
    'yandex-verification': '',
    'apple-mobile-web-app-title': 'Dirty Crypto',
    'application-name': 'Dirty Crypto Scams',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://dirtycrypto.org/#website',
      url: 'https://dirtycrypto.org',
      name: 'Dirty Crypto Scams',
      description: 'Exposing cryptocurrency scams with blockchain evidence. Documenting crypto fraud, scam wallet addresses, and impersonation tactics.',
      publisher: { '@id': 'https://dirtycrypto.org/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://dirtycrypto.org/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://dirtycrypto.org/#organization',
      name: 'Dirty Crypto Scams',
      url: 'https://dirtycrypto.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dirtycrypto.org/logo.png',
      },
      sameAs: [],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://dirtycrypto.org/#webpage',
      url: 'https://dirtycrypto.org',
      name: 'Dirty Crypto Scams - Exposing Cryptocurrency Fraud',
      description: 'Exposing cryptocurrency scams including OxyCapitals and MirrorExp with full blockchain evidence, wallet addresses, and $62,400+ in documented losses.',
      isPartOf: { '@id': 'https://dirtycrypto.org/#website' },
      about: {
        '@type': 'Thing',
        name: 'Cryptocurrency Scam Investigation',
        description: 'Investigation and documentation of cryptocurrency fraud schemes including phishing, impersonation, and typosquatting attacks',
      },
      breadcrumb: { '@id': 'https://dirtycrypto.org/#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://dirtycrypto.org/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dirtycrypto.org' },
        { '@type': 'ListItem', position: 2, name: 'OxyCapitals Scam', item: 'https://dirtycrypto.org' },
        { '@type': 'ListItem', position: 3, name: 'MirrorExp Scam', item: 'https://dirtycrypto.org/mirrorexp' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://dirtycrypto.org/#article',
      headline: 'SCAM ALERT: OxyCapitals & MirrorExp Cryptocurrency Fraud Exposed - $62,400+ Stolen',
      description: 'Complete investigation exposing the OxyCapitals and MirrorExp cryptocurrency scams, including blockchain transaction analysis, wallet addresses, typosquatting tactics, and money laundering evidence.',
      image: 'https://dirtycrypto.org/evidence/scam homepage.jpg',
      author: { '@id': 'https://dirtycrypto.org/#organization' },
      publisher: { '@id': 'https://dirtycrypto.org/#organization' },
      datePublished: '2026-02-01',
      dateModified: '2026-02-04',
      mainEntityOfPage: { '@id': 'https://dirtycrypto.org/#webpage' },
      articleSection: ['Scam Alert', 'Cryptocurrency Fraud', 'Blockchain Analysis'],
      keywords: 'oxycapitals scam, mirrorexp scam, crypto scam, phishing, impersonation scam, bitcoin fraud, cryptocurrency fraud, typosquatting, discord scam',
      wordCount: 5000,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.warning-pulse'],
      },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://dirtycrypto.org/#scamlist',
      name: 'Exposed Cryptocurrency Scams',
      description: 'List of cryptocurrency scams documented with blockchain evidence',
      numberOfItems: 2,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'OxyCapitals Scam',
          description: 'Fake crypto trading platform stealing $40,400+ via Discord impersonation',
          url: 'https://dirtycrypto.org',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'MirrorExp Scam',
          description: 'Typosquatting crypto scam stealing $22,000+ via fake admin impersonation',
          url: 'https://dirtycrypto.org/mirrorexp',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://dirtycrypto.org/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is OxyCapitals a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OxyCapitals (oxycapitalsltd.com) is a confirmed cryptocurrency scam that has stolen over $40,400. They impersonate legitimate Discord admins using typosquatting (changing one letter in usernames like "salmaogs" to "sajmaogs") to trick victims into depositing Bitcoin and other cryptocurrencies. We have documented blockchain evidence showing stolen funds being cashed out through exchanges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is MirrorExp a scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, MirrorExp (mirrorexp.com) is a confirmed cryptocurrency scam that has stolen over $22,000. They use typosquatting to impersonate Discord admins (changing ".atraveller" to "_atraveller") to direct victims to their fake trading platform. Funds are rapidly moved through staging wallets to exchanges within minutes of deposit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the OxyCapitals scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Known OxyCapitals scam wallet addresses include: Bitcoin Collection (1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC), Bitcoin Personal (1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2), Bitcoin ByBit (192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB), Bitcoin SegWit (bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46), Ethereum (0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09), and USDT Tron (TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR). Do NOT send any cryptocurrency to these addresses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the MirrorExp scam wallet addresses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Known MirrorExp scam wallet addresses include: Bitcoin Primary (bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v), Ethereum/USDC (0xE28425B27d555f870d3CaCAC4Bf7F549c768022F), and USDT (0xF4eE6d12f95f401BF6b0aB488Ec18E43bfdbeAFC). These wallets are part of a larger criminal operation with connections to a $2.1M exchange consolidation pool.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does typosquatting work in crypto scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typosquatting is when scammers create usernames nearly identical to trusted admins by changing just one character. Examples: "salmaogs" becomes "sajmaogs" (l→j), or ".atraveller" becomes "_atraveller" (period→underscore). These tiny changes are easy to miss at a glance, allowing scammers to impersonate trusted community members.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I report a cryptocurrency scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Report cryptocurrency scams to: 1) FBI IC3 at ic3.gov, 2) FTC at reportfraud.ftc.gov, 3) Chainabuse.com and BitcoinAbuse.com to flag wallet addresses, 4) The cryptocurrency exchanges (Binance, Coinbase, etc.) where scammers cash out, 5) Discord Trust & Safety for impersonation accounts, 6) Domain registrars like Namecheap to get scam websites taken down.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I identify crypto impersonation scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Red flags include: 1) Unsolicited DMs about investment opportunities, 2) Usernames with subtle differences from real admins (check character by character), 3) Pressure to act quickly, 4) Requests to use unfamiliar trading platforms, 5) Promises of guaranteed returns, 6) Requests to send crypto to "verify" your wallet. Always verify identities through official channels.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I sent money to a crypto scam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you have been scammed: 1) Document everything - save messages, wallet addresses, transaction IDs, 2) Report to FBI IC3 and FTC immediately, 3) Report the wallet addresses to blockchain abuse databases, 4) Contact the exchange where funds were sent (they may be able to freeze accounts), 5) Report impersonation accounts to the platform (Discord, Telegram), 6) Share your experience to warn others.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much money has been stolen by these crypto scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Based on blockchain analysis: OxyCapitals has stolen $40,400+ across Bitcoin, Ethereum, and Tron. MirrorExp has stolen $22,000+ primarily in Bitcoin. Combined documented losses exceed $62,400. Actual losses are likely higher as many victims do not report and some transactions may not be captured in our analysis.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are OxyCapitals and MirrorExp related scams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both scams use identical methodology: Discord admin impersonation via typosquatting, fake trading platforms, rapid fund extraction to exchanges. While we cannot confirm they are run by the same operators, the operational patterns are strikingly similar, suggesting either the same group or shared scam playbooks within criminal networks.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://dirtycrypto.org/#howto-identify',
      name: 'How to Identify Cryptocurrency Scams',
      description: 'Step-by-step guide to identifying and avoiding cryptocurrency scams',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Verify usernames character by character',
          text: 'Scammers use typosquatting to impersonate trusted users. Check every character in usernames - "l" can become "j", periods can become underscores.',
        },
        {
          '@type': 'HowToStep',
          name: 'Be suspicious of unsolicited investment opportunities',
          text: 'Real admins and legitimate investors do not DM random users with investment opportunities.',
        },
        {
          '@type': 'HowToStep',
          name: 'Research any trading platform',
          text: 'Search "[platform name] scam" before depositing. Check for legitimate business registration and verifiable team members.',
        },
        {
          '@type': 'HowToStep',
          name: 'Check wallet addresses on blockchain explorers',
          text: 'Before sending crypto, search the wallet address on Bitcoin abuse databases and blockchain explorers for suspicious activity.',
        },
        {
          '@type': 'HowToStep',
          name: 'Never send crypto to "verify" your wallet',
          text: 'Legitimate services never require you to send cryptocurrency to verify your wallet or unlock rewards.',
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
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Theme and PWA */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        
        {/* Search Engine Verification - Replace YOUR_CODE with actual verification codes */}
        {/* Google Search Console: get code from https://search.google.com/search-console */}
        {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
        {/* Bing Webmaster Tools */}
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Canonical - explicit for SEO */}
        <link rel="canonical" href="https://dirtycrypto.org" />
        
        {/* Language alternatives (for future expansion) */}
        <link rel="alternate" hrefLang="en" href="https://dirtycrypto.org" />
        <link rel="alternate" hrefLang="x-default" href="https://dirtycrypto.org" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

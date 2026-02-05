'use client'

import Link from 'next/link'

type PageName = 'oxycapitals' | 'mirrorexp' | 'trucopy' | 'everrextrade' | 'affluenceaura'

interface InvestigationFooterProps {
  currentPage: PageName
  tags: string[]
}

const links: Record<PageName, { href: string; label: string; color: string }> = {
  oxycapitals: { href: '/oxycapitals', label: 'OxyCapitals Investigation', color: 'text-red-400 hover:underline' },
  mirrorexp: { href: '/mirrorexp', label: 'MirrorExp Investigation', color: 'text-orange-400 hover:underline' },
  trucopy: { href: '/trucopy', label: 'TruCopy Investigation', color: 'text-purple-400 hover:underline' },
  everrextrade: { href: '/everrextrade', label: 'EverrexTrade Investigation', color: 'text-yellow-400 hover:underline' },
  affluenceaura: { href: '/affluenceaura', label: 'AffluenceAura Investigation', color: 'text-teal-400 hover:underline' },
}

export default function InvestigationFooter({ currentPage, tags }: InvestigationFooterProps) {
  const otherPages = (Object.keys(links) as PageName[]).filter((key) => key !== currentPage)

  return (
    <footer className="py-8 px-4 text-center text-gray-500">
      <p className="mb-2">This site was created to expose cryptocurrency fraud and protect potential victims.</p>
      <p className="text-sm">All information is based on publicly available blockchain data and documented evidence.</p>
      <p className="text-sm mt-4">Last updated: February 2026</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/" className="text-blue-400 hover:underline text-sm">
          &larr; Back to Dirty Crypto
        </Link>
        {otherPages.map((key) => (
          <span key={key} className="contents">
            <span className="text-gray-700">|</span>
            <Link href={links[key].href} className={`${links[key].color} text-sm`}>
              {links[key].label}
            </Link>
          </span>
        ))}
      </div>
      <nav className="mt-6 text-xs text-gray-600 space-x-4">
        {tags.map((tag, i) => (
          <span key={i}>
            {i > 0 && <span className="mr-4">•</span>}
            {tag}
          </span>
        ))}
      </nav>
    </footer>
  )
}

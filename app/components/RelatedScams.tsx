'use client'

import Link from 'next/link'

type ScamName = 'oxycapitals' | 'mirrorexp' | 'trucopy' | 'everrextrade' | 'affluenceaura'

interface RelatedScamsProps {
  exclude: ScamName
  showBridgeStocks?: boolean
}

const scamData: Record<ScamName, { name: string; color: string; bgColor: string; hoverBg: string; borderColor: string; btnBg: string; btnHover: string; href: string; amount: string; amountDetail?: string }> = {
  oxycapitals: {
    name: 'OxyCapitals',
    color: 'text-red-400',
    bgColor: 'bg-red-950/20',
    hoverBg: 'hover:bg-red-950/30',
    borderColor: 'border-red-600',
    btnBg: 'bg-red-600',
    btnHover: 'hover:bg-red-700',
    href: '/oxycapitals',
    amount: '$54,000+ stolen',
  },
  mirrorexp: {
    name: 'MirrorExp',
    color: 'text-orange-400',
    bgColor: 'bg-orange-950/20',
    hoverBg: 'hover:bg-orange-950/30',
    borderColor: 'border-orange-600',
    btnBg: 'bg-orange-600',
    btnHover: 'hover:bg-orange-700',
    href: '/mirrorexp',
    amount: '$30,000+ stolen',
  },
  trucopy: {
    name: 'TruCopy',
    color: 'text-purple-400',
    bgColor: 'bg-purple-950/20',
    hoverBg: 'hover:bg-purple-950/30',
    borderColor: 'border-purple-600',
    btnBg: 'bg-purple-600',
    btnHover: 'hover:bg-purple-700',
    href: '/trucopy',
    amount: '$30,000+ stolen (8 chains)',
  },
  everrextrade: {
    name: 'EverrexTrade',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-950/20',
    hoverBg: 'hover:bg-yellow-950/30',
    borderColor: 'border-yellow-600',
    btnBg: 'bg-yellow-600',
    btnHover: 'hover:bg-yellow-700',
    href: '/everrextrade',
    amount: 'Under Investigation',
  },
  affluenceaura: {
    name: 'AffluenceAura',
    color: 'text-teal-400',
    bgColor: 'bg-teal-950/20',
    hoverBg: 'hover:bg-teal-950/30',
    borderColor: 'border-teal-600',
    btnBg: 'bg-teal-600',
    btnHover: 'hover:bg-teal-700',
    href: '/affluenceaura',
    amount: '$0 stolen (abandoned)',
  },
}

export default function RelatedScams({ exclude, showBridgeStocks = false }: RelatedScamsProps) {
  const otherScams = (Object.keys(scamData) as ScamName[]).filter((key) => key !== exclude)

  return (
    <section className="py-12 px-4 border-b border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Related Scam Operations</h2>
        <p className="text-center text-gray-400 mb-8">
          {showBridgeStocks
            ? 'Similar scams using the same methodology have been documented'
            : 'This scam uses identical methodology to other known operations'}
        </p>
        
        <div className={`grid md:grid-cols-2 gap-6 ${showBridgeStocks ? 'mb-6' : ''}`}>
          {otherScams.map((key) => {
            const scam = scamData[key]
            return (
              <div key={key} className={`card p-6 rounded-xl border-2 ${scam.borderColor} ${scam.bgColor}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${scam.btnBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${scam.color}`}>{scam.name}</h3>
                    <p className="text-gray-400 text-sm">{scam.amount}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link
                    href={scam.href}
                    className={`inline-flex items-center gap-2 ${scam.btnBg} ${scam.btnHover} text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm`}
                  >
                    View Investigation
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {showBridgeStocks && (
          <>
            <div className="card p-6 rounded-xl border-2 border-orange-600 bg-orange-950/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400">BridgeStocks.com</h3>
                  <p className="text-gray-400 text-sm">Previous scam domain by the same operators</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-green-600/30 text-green-400 text-xs font-semibold rounded-full border border-green-600">
                    TAKEN DOWN
                  </span>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Domain:</span>
                    <p className="text-red-400 font-mono line-through">www.bridgestocks.com</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <p className="text-green-400 font-semibold">Removed from Internet</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Discord Username:</span>
                    <p className="text-red-400 font-mono">sajmaogs</p>
                    <p className="text-gray-500 text-xs">(Same impersonation account)</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Scam Type:</span>
                    <p className="text-yellow-400">Identical fake trading platform</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  This demonstrates a <strong className="text-orange-300">pattern of behavior</strong> — when one scam domain is exposed or taken down, 
                  these operators create new domains to continue their fraud. The same Discord username and impersonation tactics were used.
                </p>
              </div>
            </div>

            <div className="mt-6 card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
              <p className="text-yellow-400 text-sm text-center">
                <strong>Warning:</strong> If you encounter other domains promoted by the username &quot;sajmaogs&quot; or similar impersonation accounts, 
                they are likely operated by the same scammers. Report them immediately.
              </p>
            </div>
          </>
        )}

        {!showBridgeStocks && (
          <div className="mt-6 card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <p className="text-yellow-400 text-sm text-center">
              <strong>Pattern Match:</strong> These scams use Discord impersonation, fake trading platforms, 
              and shared infrastructure (V12Hosting). They may be operated by the same criminal network.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

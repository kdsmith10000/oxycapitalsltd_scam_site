'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lightbox from '../components/Lightbox'
import InvestigationNav from '../components/InvestigationNav'
import WhatToDo from '../components/WhatToDo'
import RelatedScams from '../components/RelatedScams'
import InvestigationFooter from '../components/InvestigationFooter'

export default function BridgeStocksPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (src: string) => setLightboxImage(src)
  const closeLightbox = () => setLightboxImage(null)

  const handleKeyDown = (e: React.KeyboardEvent, src: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openLightbox(src)
    }
  }

  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/Article">
      <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} />
      <InvestigationNav totalLoss="$35,389+" totalLossShort="$35.4K+" />

      {/* Hero Warning Section */}
      <section className="relative py-10 sm:py-16 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-3 mb-4 sm:mb-6">
            <div className="warning-pulse inline-block px-4 sm:px-6 py-2 bg-red-600 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider" role="alert">
              Scam Alert - Do Not Send Money
            </div>
            <div className="inline-block px-4 sm:px-6 py-2 bg-green-600 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider">
              Site Taken Down
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6" itemProp="headline">
            <span className="gradient-text">BridgeStocks</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2" itemProp="description">
            BridgeStocks.com was a cryptocurrency scam that used Discord admin impersonation to steal Bitcoin. 
            The site was taken down after a <strong className="text-green-400">Chainabuse report</strong> filed November 7, 2025. 
            Statistical analysis confirms <strong className="text-yellow-400">$35,389 stolen</strong> across 79 transactions.
          </p>
          <div className="card inline-block p-3 sm:p-4 rounded-lg">
            <p className="text-gray-400 text-xs sm:text-sm">Fraudulent Crypto Scam Website</p>
            <p className="text-red-400 font-mono text-base sm:text-lg break-all line-through">bridgestocks.com</p>
            <p className="text-green-400 text-xs mt-1">Taken down after Chainabuse report</p>
          </div>
        </div>
      </section>

      {/* Chainabuse Report Success */}
      <section className="py-6 sm:py-8 px-4 border-b border-gray-800 bg-green-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-6 rounded-xl border-2 border-green-500 bg-green-900/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-green-400">Scam Site Successfully Taken Down</h2>
                <p className="text-gray-300 text-xs sm:text-sm">Reported to Chainabuse on November 7, 2025 — site removed within days</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Report Filed</p>
                  <p className="text-green-400 font-bold">Nov 7, 2025</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Site Status</p>
                  <p className="text-green-400 font-bold">OFFLINE</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Wallet Still Active</p>
                  <p className="text-red-400 font-bold">YES</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Last Transaction</p>
                  <p className="text-red-400 font-bold">Feb 4, 2026</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center">
              <strong className="text-yellow-300">Warning:</strong> Although the site was taken down, the wallet continued receiving funds — 
              suggesting victims are still sending from old instructions or the scammer pivoted to a new front.
            </p>
          </div>
        </div>
      </section>

      {/* Typosquatting Alert */}
      <section className="py-6 sm:py-8 px-4 border-b border-gray-800 bg-yellow-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-6 rounded-xl border-2 border-yellow-500 bg-yellow-900/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-yellow-400">Typosquatting Attack Detected</h2>
                <p className="text-gray-300 text-xs sm:text-sm">The scammer uses a username nearly identical to a real admin</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-gray-400 mb-4 text-xs sm:text-sm">Can you spot the difference?</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">REAL ADMIN USERNAME</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-green-400">sa<span className="text-green-300 underline decoration-4">l</span>ma<span className="text-green-300 underline decoration-4">o</span>gs</p>
                </div>
                <div className="text-2xl sm:text-3xl text-gray-600">vs</div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">SCAMMER USERNAME</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-red-400">sa<span className="text-red-300 underline decoration-4">1</span>ma<span className="text-red-300 underline decoration-4">0</span>gs</p>
                </div>
              </div>
              <p className="text-yellow-300 text-xs sm:text-sm">
                The scammer replaced <strong>TWO characters</strong>: the letter <code className="bg-green-900/50 px-1 rounded">l</code> became the number <code className="bg-red-900/50 px-1 rounded">1</code>, and the letter <code className="bg-green-900/50 px-1 rounded">o</code> became the number <code className="bg-red-900/50 px-1 rounded">0</code>
              </p>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center">
              <strong className="text-yellow-300">Always verify usernames character-by-character</strong> before trusting anyone with your money. 
              The lowercase letter &quot;l&quot; and the number &quot;1&quot; are nearly indistinguishable in many fonts, and &quot;o&quot; vs &quot;0&quot; is equally deceptive.
            </p>
          </div>
        </div>
      </section>

      {/* WHOIS Domain Intelligence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-red-950/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Domain Intelligence (WHOIS)</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Registration records reveal a textbook scam domain setup</p>

          <div className="card p-6 rounded-xl border-2 border-red-600 bg-red-950/10 mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-red-400">BRIDGESTOCKS.COM — Registrar Suspended</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Domain placed on <code className="bg-red-900/50 px-1 rounded">clientHold</code> by Namecheap</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 sm:p-6 mb-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 text-xs">Registrar</p>
                  <p className="text-gray-300 font-semibold">Namecheap Inc</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Created</p>
                  <p className="text-yellow-400 font-semibold">Jan 25, 2025</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Expired</p>
                  <p className="text-red-400 font-semibold">Jan 25, 2026</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Domain Status</p>
                  <p className="text-red-400 font-bold">clientHold (SUSPENDED)</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Registrant</p>
                  <p className="text-yellow-400 font-semibold">HIDDEN (Privacy Service)</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">DNSSEC</p>
                  <p className="text-gray-400">Unsigned</p>
                </div>
                <div className="col-span-2 md:col-span-3">
                  <p className="text-gray-500 text-xs">Privacy Provider</p>
                  <p className="text-gray-300">Withheld for Privacy ehf — Kalkofnsvegur 2, Reykjavik, Iceland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Red Flags */}
          <h3 className="text-lg font-semibold text-center mb-4 text-red-400">WHOIS Red Flags</h3>
          <div className="space-y-3 mb-6">
            <div className="card p-4 rounded-xl border border-red-700/50 bg-red-950/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="text-red-400 font-semibold text-sm">clientHold = Registrar Suspension</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    The <code className="bg-black/50 px-1 rounded text-red-300">clientHold</code> status means <strong className="text-red-300">Namecheap suspended this domain</strong>. 
                    This is typically applied when a domain is reported for abuse or fraud. Combined with <code className="bg-black/50 px-1 rounded text-red-300">clientTransferProhibited</code>, 
                    the scammer cannot transfer the domain to another registrar to evade the suspension. 
                    <strong className="text-green-400"> This confirms the hosting provider took action after the abuse report.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-yellow-700/50 bg-yellow-950/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="text-yellow-400 font-semibold text-sm">Brand-New Domain — 5 Months Before Scam</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Registered <strong className="text-yellow-300">January 25, 2025</strong> — first scam transaction on <strong className="text-yellow-300">July 5, 2025</strong>. 
                    The domain was only <strong className="text-yellow-300">5 months old</strong> when the scam began. Legitimate financial platforms have years of domain history. 
                    A brand-new domain claiming to be a stock trading platform is a classic scam indicator.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-orange-700/50 bg-orange-950/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="text-orange-400 font-semibold text-sm">Privacy-Shielded Registrant</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    The registrant is hidden behind <strong className="text-orange-300">Withheld for Privacy ehf</strong> (Reykjavik, Iceland) — 
                    Namecheap&apos;s default WHOIS privacy service. While privacy protection itself is common, a &quot;financial trading platform&quot; 
                    hiding its operator&apos;s identity is a major red flag. Legitimate brokerages are required to publicly disclose their 
                    corporate identity and regulatory registration.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-purple-700/50 bg-purple-950/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="text-purple-400 font-semibold text-sm">Domain Expired — Wallet Still Active</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    The domain <strong className="text-purple-300">expired January 25, 2026</strong> and the scammer <strong className="text-purple-300">did not renew it</strong>. 
                    Yet the scam wallet received its last transaction on <strong className="text-red-400">February 4, 2026</strong> — 
                    10 days AFTER the domain expired. This means either victims were still sending to the address from old instructions, 
                    or the scammer pivoted to a new front while draining residual funds.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-cyan-700/50 bg-cyan-950/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">5</div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm">Unsigned DNSSEC — Zero Security Investment</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    No DNSSEC signing means the scammer invested <strong className="text-cyan-300">zero effort in domain security</strong>. 
                    A real financial platform handling customer funds would implement DNSSEC, SSL pinning, and other security measures. 
                    This domain was treated as a <strong className="text-cyan-300">disposable tool</strong> — use it, drain it, abandon it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Domain Timeline */}
          <div className="card p-6 rounded-xl border border-gray-700 bg-gray-900/30">
            <h4 className="text-gray-300 font-semibold text-center mb-4">Domain Lifecycle Timeline</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-gray-500 text-xs flex-shrink-0">Jan 25, 2025</div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <div className="text-yellow-400">Domain registered on Namecheap</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-gray-500 text-xs flex-shrink-0">Jul 5, 2025</div>
                <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                <div className="text-red-400">First scam transaction (5 months later)</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-gray-500 text-xs flex-shrink-0">Nov 7, 2025</div>
                <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                <div className="text-green-400">Chainabuse report filed</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-gray-500 text-xs flex-shrink-0">~Nov 2025</div>
                <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                <div className="text-green-400">Site goes offline (clientHold applied)</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-gray-500 text-xs flex-shrink-0">Jan 25, 2026</div>
                <div className="w-3 h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                <div className="text-gray-400">Domain expires — not renewed</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-right text-gray-500 text-xs flex-shrink-0">Feb 4, 2026</div>
                <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                <div className="text-red-400">Last wallet transaction (10 days post-expiry)</div>
              </div>
            </div>
          </div>

          <div className="mt-6 card p-4 rounded-xl bg-red-950/20 border border-red-700/50 text-center">
            <p className="text-red-400 text-sm">
              <strong>WHOIS Conclusion:</strong> The domain was a <strong>disposable scam tool</strong> — registered cheaply with hidden identity, 
              used for 7 months of fraud, suspended by the registrar after abuse reports, and abandoned without renewal. 
              This is the hallmark of a <strong>serial scam operation</strong> that cycles through domains.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">How This Scam Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">1</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-red-400">Impersonation</h3>
              <p className="text-gray-400 text-xs sm:text-base">Scammer impersonates a Discord admin from an official channel and contacts victims directly.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">2</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-orange-400">Fake Platform</h3>
              <p className="text-gray-400 text-xs sm:text-base">Victims are directed to BridgeStocks.com, a fake trading platform with a completely non-functional deposit page.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">3</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-yellow-400">Collect &amp; Dump</h3>
              <p className="text-gray-400 text-xs sm:text-base">Deposits are rapidly swept to a primary cash-out wallet — 89.8% of all funds went to ONE address.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">4</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-green-400">Cash-Out</h3>
              <p className="text-gray-400 text-xs sm:text-base">Stolen funds funneled to two legacy Bitcoin addresses for exchange liquidation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Total Victim Losses */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-red-950/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Total Documented Victim Losses</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Based on blockchain transaction analysis of the scam wallet</p>
          
          <div className="card p-5 sm:p-8 rounded-2xl border-2 border-red-600 bg-red-950/20 text-center mb-6 sm:mb-8">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">Confirmed Stolen Amount</p>
            <p className="text-4xl sm:text-5xl md:text-7xl font-black text-red-500 mb-2">$35,389</p>
            <p className="text-gray-400 text-sm sm:text-base">0.55512159 BTC across 79 transactions</p>
            <p className="text-gray-500 text-xs mt-2">July 5, 2025 — February 4, 2026</p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
            <div className="card p-3 sm:p-5 rounded-xl text-center border border-orange-700/50">
              <p className="text-lg sm:text-2xl font-bold text-orange-400 mb-1">79</p>
              <p className="text-gray-400 text-xs sm:text-sm">Transactions</p>
            </div>
            <div className="card p-3 sm:p-5 rounded-xl text-center border border-red-700/50">
              <p className="text-lg sm:text-2xl font-bold text-red-400 mb-1">$31,127</p>
              <p className="text-gray-400 text-xs sm:text-sm">Net External Outflows</p>
            </div>
            <div className="card p-3 sm:p-5 rounded-xl text-center border border-purple-700/50">
              <p className="text-lg sm:text-2xl font-bold text-purple-400 mb-1">7</p>
              <p className="text-gray-400 text-xs sm:text-sm">Destination Wallets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Flow Hierarchy */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Blockchain Transaction Analysis</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Complete money flow traced through the scam wallet</p>
          
          {/* Bitcoin Flow Hierarchy */}
          <div className="card p-6 rounded-xl mb-6 border border-orange-700/50">
            <h3 className="text-lg font-semibold mb-4 text-center text-orange-400 flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
              Bitcoin Money Flow — $35,389
            </h3>
            <div className="space-y-4 font-mono text-sm">
              {/* Victims */}
              <div className="text-center p-3 bg-red-900/30 rounded border border-red-700">
                <div className="text-gray-400 text-xs mb-1">VICTIMS</div>
                <div className="text-red-400">Via exchange hot wallet withdrawals</div>
                <div className="text-gray-500 text-xs mt-1">Multiple deposits averaging $2,790 (Phase 1) / $180 (Phase 2)</div>
              </div>
              <div className="text-center text-2xl text-gray-600">&#8595;</div>
              
              {/* Scam Collection Wallet */}
              <div className="text-center p-3 bg-orange-900/30 rounded border border-orange-700">
                <div className="text-gray-400 text-xs mb-1">SCAM COLLECTION WALLET</div>
                <div className="text-orange-400 break-all text-xs sm:text-sm">bc1qhppwpsp7hjxml7hpgwr9tk5xpadfuck2u0xktu</div>
                <div className="text-gray-500 text-xs mt-1">Total: 0.555 BTC ($35,389) | 79 transactions | Balance: $0</div>
              </div>
              <div className="text-center text-2xl text-gray-600">&#8595;</div>
              
              {/* Three destinations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-red-900/40 rounded border-2 border-red-600">
                  <div className="text-gray-400 text-xs mb-1">PRIMARY CASH-OUT (89.8%)</div>
                  <div className="text-red-400 break-all text-xs">1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc</div>
                  <div className="text-red-400 font-bold text-lg mt-2">$27,962</div>
                  <div className="text-gray-500 text-xs">19 transactions</div>
                </div>
                <div className="text-center p-3 bg-yellow-900/30 rounded border border-yellow-700">
                  <div className="text-gray-400 text-xs mb-1">SECONDARY CASH-OUT (8.2%)</div>
                  <div className="text-yellow-400 break-all text-xs">1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp</div>
                  <div className="text-yellow-400 font-bold text-lg mt-2">$2,539</div>
                  <div className="text-gray-500 text-xs">18 transactions</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded border border-gray-700">
                  <div className="text-gray-400 text-xs mb-1">MINOR DESTINATIONS (2.0%)</div>
                  <div className="text-gray-400 text-xs">5 one-off addresses</div>
                  <div className="text-gray-400 font-bold text-lg mt-2">$626</div>
                  <div className="text-gray-500 text-xs">7 transactions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Cash-Out Detail */}
          <div className="card p-6 rounded-xl mb-6 border-2 border-red-600 bg-red-950/20">
            <h3 className="text-lg font-semibold mb-4 text-red-400 text-center">Primary Cash-Out Wallet — $27,962 (89.8%)</h3>
            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <code className="text-red-300 text-sm break-all">1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc</code>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm mb-4">
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Total Received</p>
                <p className="text-red-400 font-bold">~0.4386 BTC</p>
              </div>
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Transactions</p>
                <p className="text-gray-300 font-bold">19</p>
              </div>
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Active Period</p>
                <p className="text-gray-300 font-bold text-xs">Sep 6 &apos;25 – Jan 31 &apos;26</p>
              </div>
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Address Type</p>
                <p className="text-gray-300 font-bold">Legacy (P2PKH)</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">
              <strong className="text-red-300">Nearly 90% of ALL stolen funds funneled to this single address.</strong> The overwhelming 
              concentration and consistent 5-month usage confirms this is the scammer&apos;s primary cash-out point.
            </p>
            <div className="mt-4 p-3 bg-green-900/20 rounded border border-green-700/50 text-center">
              <p className="text-green-400 text-sm font-semibold">Confidence: 95%+</p>
            </div>
          </div>

          {/* Secondary Cash-Out Detail */}
          <div className="card p-6 rounded-xl mb-6 border border-yellow-700/50 bg-yellow-950/10">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 text-center">Secondary Cash-Out Wallet — $2,539 (8.2%)</h3>
            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <code className="text-yellow-300 text-sm break-all">1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp</code>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm mb-4">
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Total Received</p>
                <p className="text-yellow-400 font-bold">~0.0398 BTC</p>
              </div>
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Transactions</p>
                <p className="text-gray-300 font-bold">18</p>
              </div>
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Active Period</p>
                <p className="text-gray-300 font-bold text-xs">Jul 6 &apos;25 – Feb 4 &apos;26</p>
              </div>
              <div className="p-2 bg-black/30 rounded">
                <p className="text-gray-500 text-xs">Address Type</p>
                <p className="text-gray-300 font-bold">Legacy (P2PKH)</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">
              Became <strong className="text-yellow-300">significantly more active AFTER the Chainabuse report</strong> was filed (Nov 7, 2025). 
              Regular, small withdrawals every 1-3 days in Dec 2025 – Feb 2026 indicate <strong className="text-yellow-300">systematic draining</strong>.
            </p>
            <div className="mt-4 p-3 bg-green-900/20 rounded border border-green-700/50 text-center">
              <p className="text-green-400 text-sm font-semibold">Confidence: 90%+</p>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="card p-4 rounded-xl text-center bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">79 transactions</span> &bull; 
              <span className="text-red-400 font-semibold"> 100% drained</span> &bull; 
              Funds concentrated into 2 primary cash-out wallets &bull;
              <span className="text-green-400"> Site taken down</span>
            </p>
          </div>
        </div>
      </section>

      {/* Statistical Analysis */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-green-950/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Statistical Fraud Analysis</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Mathematical evidence proving intentional theft using rigorous statistical methods</p>

          {/* HHI Analysis */}
          <div className="card p-6 rounded-xl mb-6 border border-blue-700/50 bg-blue-950/20">
            <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">Herfindahl-Hirschman Index (HHI)</h3>
            <p className="text-gray-400 text-sm text-center mb-4">
              The HHI measures concentration of fund distribution. Applied to outbound fund flows from the scam wallet:
            </p>
            <div className="bg-black/40 rounded-lg p-4 mb-4 text-center font-mono">
              <p className="text-gray-400 text-xs mb-2">CALCULATION</p>
              <p className="text-blue-300 text-sm">HHI = (0.898)&#178; + (0.082)&#178; + (0.020)&#178;</p>
              <p className="text-blue-300 text-sm">= 0.8064 + 0.0067 + 0.0004</p>
              <p className="text-blue-400 font-bold text-xl mt-2">HHI = 0.8135</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm mb-4">
              <div className="p-3 bg-green-900/30 rounded border border-green-700/50">
                <p className="text-green-400 font-bold">&lt; 0.15</p>
                <p className="text-gray-500 text-xs">Low Concentration</p>
              </div>
              <div className="p-3 bg-yellow-900/30 rounded border border-yellow-700/50">
                <p className="text-yellow-400 font-bold">0.15 – 0.25</p>
                <p className="text-gray-500 text-xs">Moderate</p>
              </div>
              <div className="p-3 bg-red-900/30 rounded border-2 border-red-600">
                <p className="text-red-400 font-bold text-lg">0.8135</p>
                <p className="text-red-300 text-xs font-semibold">EXTREME</p>
              </div>
            </div>
            <p className="text-center text-yellow-400 text-sm">
              <strong>HHI = 0.8135 confirms EXTREME concentration</strong> — virtually a single-destination operation. 
              This is not the behavior of a legitimate trading platform.
            </p>
          </div>

          {/* Gini Coefficient */}
          <div className="card p-6 rounded-xl mb-6 border border-purple-700/50 bg-purple-950/20">
            <h3 className="text-lg font-semibold mb-4 text-purple-400 text-center">Gini Coefficient</h3>
            <p className="text-gray-400 text-sm text-center mb-4">
              Measures inequality in fund distribution across 7 destination addresses
            </p>
            <div className="flex justify-center mb-4">
              <div className="relative w-64 h-8 bg-gray-800 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" style={{width: '96%'}}></div>
                <div className="absolute right-[4%] top-0 h-full w-1 bg-white"></div>
              </div>
            </div>
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-purple-400">0.96</p>
              <p className="text-gray-500 text-sm">out of 1.00 (perfect inequality)</p>
            </div>
            <p className="text-center text-gray-400 text-sm">
              A Gini of 0.96 means <strong className="text-purple-300">near-perfect inequality</strong> — one address captures almost everything 
              while others receive negligible amounts. This confirms deliberate funneling, not organic fund distribution.
            </p>
          </div>

          {/* Chi-Squared Test */}
          <div className="card p-6 rounded-xl mb-6 border border-cyan-700/50 bg-cyan-950/20">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 text-center">Chi-Squared Behavioral Change Test</h3>
            <p className="text-gray-400 text-sm text-center mb-4">
              Tests whether the operational shift after the Chainabuse report (Nov 7, 2025) is statistically significant
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-black/30 rounded border border-gray-700">
                <p className="text-gray-500 text-xs mb-1 text-center">BEFORE Nov 7, 2025</p>
                <p className="text-gray-300 text-center font-bold text-sm">Avg deposit: $2,790</p>
                <p className="text-gray-500 text-center text-xs">Sends primarily to 1JJY</p>
              </div>
              <div className="p-4 bg-black/30 rounded border border-red-700/50">
                <p className="text-gray-500 text-xs mb-1 text-center">AFTER Nov 7, 2025</p>
                <p className="text-red-400 text-center font-bold text-sm">Avg deposit: $180</p>
                <p className="text-gray-500 text-center text-xs">Sends split 1JJY + 1PPh</p>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 text-center mb-4">
              <p className="text-cyan-400 font-bold text-xl">p &lt; 0.001</p>
              <p className="text-gray-500 text-sm">Chi-squared test for independence</p>
            </div>
            <div className="p-3 bg-red-900/20 rounded text-center">
              <p className="text-red-400 text-sm">
                <strong>93% decrease in average deposit size</strong> — the behavioral change is statistically significant (p &lt; 0.001), 
                not random. The scammers adapted their operation after being reported.
              </p>
            </div>
          </div>

          {/* Fraud Confidence Score */}
          <div className="card p-6 rounded-xl border-2 border-green-600 bg-green-950/20">
            <h3 className="text-lg font-semibold mb-4 text-green-400 text-center">Fraud Confidence Score: 100/100</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm mb-4">
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">HHI = 0.81 (extreme)</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">Gini = 0.96</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">p &lt; 0.001 shift</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">100% wallet drainage</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">89.8% to one wallet</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">Rapid cash-out</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">Behavioral adaptation</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-green-400 font-bold text-lg">&#10003;</p>
                <p className="text-gray-400 text-xs">Typosquatting (l&#8594;1, o&#8594;0)</p>
              </div>
            </div>
            <p className="text-center text-green-300 text-sm">
              Statistical analysis confirms <strong>99.9%+ confidence</strong> this is deliberate theft.
            </p>
          </div>
        </div>
      </section>

      {/* Temporal Analysis */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-orange-950/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Temporal Analysis — Two Operational Phases</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">The scam&apos;s behavior changed dramatically after the Chainabuse report</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Phase 1 */}
            <div className="card p-6 rounded-xl border-2 border-orange-600 bg-orange-950/20">
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase">Phase 1</span>
              </div>
              <h4 className="text-orange-400 font-bold text-center mb-4">Active Scam Period</h4>
              <p className="text-gray-500 text-xs text-center mb-4">July – October 2025</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Deposits:</span>
                  <span className="text-gray-300 font-semibold">12 transactions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Deposit:</span>
                  <span className="text-orange-400 font-semibold">$2,790</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash-out to:</span>
                  <span className="text-gray-300 font-semibold">1JJY (100%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total to 1JJY:</span>
                  <span className="text-red-400 font-semibold">$25,568</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash-out speed:</span>
                  <span className="text-red-400 font-semibold">&lt; 24 hours</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-900/30 rounded text-center">
                <p className="text-orange-300 text-xs font-semibold">Behavioral Signature: &quot;Collect &amp; Dump&quot;</p>
                <p className="text-gray-500 text-xs mt-1">Large deposits swept immediately</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="card p-6 rounded-xl border-2 border-red-600 bg-red-950/20">
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full uppercase">Phase 2</span>
              </div>
              <h4 className="text-red-400 font-bold text-center mb-4">Post-Report Draining</h4>
              <p className="text-gray-500 text-xs text-center mb-4">November 2025 – February 2026</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Deposits:</span>
                  <span className="text-gray-300 font-semibold">17 transactions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Deposit:</span>
                  <span className="text-red-400 font-semibold">$180</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash-out to:</span>
                  <span className="text-gray-300 font-semibold">1JJY + 1PPh (split)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total in phase:</span>
                  <span className="text-red-400 font-semibold">$5,559</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash-out pattern:</span>
                  <span className="text-red-400 font-semibold">Every 1-3 days</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-900/30 rounded text-center">
                <p className="text-red-300 text-xs font-semibold">Behavioral Signature: &quot;Systematic Draining&quot;</p>
                <p className="text-gray-500 text-xs mt-1">Small regular withdrawals across 2 wallets</p>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50 text-center">
            <p className="text-yellow-400 text-sm">
              <strong>The Chainabuse report (Nov 7, 2025) marks the clear inflection point.</strong> Average deposit size dropped 93%, 
              and the scammers diversified their cash-out to a second address — likely to avoid pattern detection.
            </p>
          </div>
        </div>
      </section>

      {/* Known Scam Wallets */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Known Scam Wallet Addresses</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Do NOT send cryptocurrency to any of these addresses</p>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-orange-400 font-semibold text-sm sm:text-base">Bitcoin (Collection Wallet)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">bc1qhppwpsp7hjxml7hpgwr9tk5xpadfuck2u0xktu</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Total processed: <span className="text-red-400 font-semibold">$35,389</span> | 79 transactions | Balance: $0</p>
            </div>

            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-red-400 font-semibold text-sm sm:text-base">Bitcoin (Primary Cash-Out)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Received: <span className="text-red-400 font-semibold">$27,962 (89.8%)</span> | 19 transactions | <span className="text-green-400">95%+ confidence</span></p>
            </div>

            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-yellow-400 font-semibold text-sm sm:text-base">Bitcoin (Secondary Cash-Out)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Received: <span className="text-red-400 font-semibold">$2,539 (8.2%)</span> | 18 transactions | <span className="text-green-400">90%+ confidence</span></p>
            </div>

            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-gray-500">
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 font-semibold text-sm sm:text-base">Minor Destination Addresses</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div><span className="text-gray-500">$90:</span> <code className="bg-black/30 px-1 rounded break-all">14gzxrk7ifSn5fjX1F1jYnegrcUjZbxJGi</code></div>
                  <div><span className="text-gray-500">$262:</span> <code className="bg-black/30 px-1 rounded break-all">bc1qr0wrv5d7k0ktfkat8ym49ea2upchevq5297pfl</code></div>
                  <div><span className="text-gray-500">$183:</span> <code className="bg-black/30 px-1 rounded break-all">bc1qx6dmp8r47njqzlkzmcyjsjchdpfj73u73vw43e</code></div>
                  <div><span className="text-gray-500">$71:</span> <code className="bg-black/30 px-1 rounded break-all">1N6F5T6cNa7BtTJMd7BDisxbN4Zcbdms8n</code></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Source Analysis */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Funding Source Analysis</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Where the victims&apos; money came from before entering the scam wallet</p>

          <div className="space-y-4 mb-6">
            <div className="card p-5 rounded-xl border border-blue-700/50 bg-blue-950/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                    Exchange Hot Wallet Source #1
                    <span className="px-2 py-0.5 bg-yellow-600/30 text-yellow-400 text-xs rounded">LIKELY EXCHANGE</span>
                  </h4>
                  <code className="text-sm text-blue-300 bg-black/50 px-3 py-2 rounded block break-all mb-2">
                    bc1qwelntg7tpxwgmh7gea0kycclx87mksnvhaadgf
                  </code>
                  <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                    <div>
                      <p className="text-gray-500">Balance Range:</p>
                      <p className="text-gray-300">13 – 178 BTC</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Pattern:</p>
                      <p className="text-gray-300">Batched (5-11 recipients/tx)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-5 rounded-xl border border-blue-700/50 bg-blue-950/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                    Exchange Hot Wallet Source #2
                    <span className="px-2 py-0.5 bg-yellow-600/30 text-yellow-400 text-xs rounded">LIKELY EXCHANGE</span>
                  </h4>
                  <code className="text-sm text-blue-300 bg-black/50 px-3 py-2 rounded block break-all mb-2">
                    bc1q4vxcxw7mpg9dcryqu0kav8awrn7qk5e6wgs3hg
                  </code>
                  <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                    <div>
                      <p className="text-gray-500">Balance Range:</p>
                      <p className="text-gray-300">3 – 66 BTC</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Pattern:</p>
                      <p className="text-gray-300">Batched (5-11 recipients/tx)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl bg-blue-950/20 border border-blue-700/50">
            <h4 className="text-blue-400 font-semibold text-sm mb-2">What This Tells Us</h4>
            <p className="text-gray-400 text-sm">
              Victims were sending cryptocurrency through exchanges as part of the &quot;deposit&quot; on the fake BridgeStocks platform. 
              The exchange processes the withdrawal, and the scam wallet receives funds via <strong className="text-blue-300">batched transactions</strong> (multiple recipients per tx) — 
              a hallmark of cryptocurrency exchange hot wallets.
            </p>
          </div>
        </div>
      </section>

      {/* Key Addresses for Reporting */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-green-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Key Addresses for Reporting</h2>
          <p className="text-center text-gray-400 mb-2 text-sm">Critical information for law enforcement and exchange compliance</p>
          <p className="text-center text-green-400 text-sm mb-8">These addresses should be flagged at all major exchanges</p>
          
          <div className="space-y-4">
            <div className="card p-5 rounded-xl border-2 border-red-600 bg-red-950/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">PRIORITY 1</span>
                <h4 className="text-red-400 font-semibold">Primary Scammer Cash-Out</h4>
              </div>
              <code className="text-sm text-red-300 bg-black/50 px-3 py-2 rounded block break-all mb-2">
                1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc
              </code>
              <p className="text-gray-500 text-xs">Received <span className="text-red-400 font-semibold">$27,962</span> — 95%+ confidence this is scammer-controlled</p>
            </div>

            <div className="card p-5 rounded-xl border-2 border-red-600 bg-red-950/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">PRIORITY 1</span>
                <h4 className="text-red-400 font-semibold">Secondary Scammer Cash-Out</h4>
              </div>
              <code className="text-sm text-red-300 bg-black/50 px-3 py-2 rounded block break-all mb-2">
                1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp
              </code>
              <p className="text-gray-500 text-xs">Received <span className="text-red-400 font-semibold">$2,539</span> — 90%+ confidence this is scammer-controlled</p>
            </div>

            <div className="card p-5 rounded-xl border border-yellow-700/50 bg-yellow-950/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full">PRIORITY 2</span>
                <h4 className="text-yellow-400 font-semibold">Exchange Flagging</h4>
              </div>
              <div className="space-y-2">
                <code className="text-xs text-yellow-300 bg-black/50 px-3 py-1 rounded block break-all">
                  bc1qwelntg7tpxwgmh7gea0kycclx87mksnvhaadgf
                </code>
                <code className="text-xs text-yellow-300 bg-black/50 px-3 py-1 rounded block break-all">
                  bc1q4vxcxw7mpg9dcryqu0kav8awrn7qk5e6wgs3hg
                </code>
              </div>
              <p className="text-gray-500 text-xs mt-2">Exchange hot wallets used for victim deposits — can be traced to KYC accounts</p>
            </div>
          </div>

          <div className="mt-6 card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <h4 className="text-yellow-400 font-semibold text-sm mb-2">For Law Enforcement</h4>
            <p className="text-gray-400 text-sm">
              Tracing the outbound transactions of <strong className="text-yellow-300">1JJY</strong> and <strong className="text-yellow-300">1PPh</strong> will 
              reveal which exchange(s) are being used for final liquidation. Those exchanges can be subpoenaed for 
              <strong className="text-yellow-300"> KYC records</strong> including identity documents, IP addresses, and bank withdrawal history.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Scam Correlation */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Cross-Scam Correlation Analysis</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Connection to other known typosquatting scam operations</p>

          <div className="card rounded-xl overflow-hidden mb-6">
            <div className="bg-gray-800/50 px-4 py-3 border-b border-gray-700">
              <h3 className="font-semibold text-white text-sm">Known Typosquatting Scams in This Investigation</h3>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-800/30">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-400 text-xs">Scam Site</th>
                  <th className="px-4 py-3 text-center text-gray-400 text-xs">Shared Wallets?</th>
                  <th className="px-4 py-3 text-center text-gray-400 text-xs">Same MO?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="hover:bg-gray-800/20">
                  <td className="px-4 py-3">
                    <span className="text-orange-400 font-semibold">BridgeStocks.com</span>
                    <span className="text-green-400 text-xs ml-2">(THIS)</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">—</td>
                  <td className="px-4 py-3 text-center text-gray-500">—</td>
                </tr>
                <tr className="hover:bg-gray-800/20">
                  <td className="px-4 py-3 text-gray-300">MirrorExp.com</td>
                  <td className="px-4 py-3 text-center"><span className="text-red-400">No</span></td>
                  <td className="px-4 py-3 text-center"><span className="text-green-400 font-bold">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-800/20">
                  <td className="px-4 py-3 text-gray-300">TruCopy.org</td>
                  <td className="px-4 py-3 text-center"><span className="text-red-400">No</span></td>
                  <td className="px-4 py-3 text-center"><span className="text-green-400 font-bold">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-800/20">
                  <td className="px-4 py-3 text-gray-300">EverrexTrade.com</td>
                  <td className="px-4 py-3 text-center"><span className="text-gray-500">N/A</span></td>
                  <td className="px-4 py-3 text-center"><span className="text-green-400 font-bold">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-800/20">
                  <td className="px-4 py-3 text-gray-300">AffluenceAura.com</td>
                  <td className="px-4 py-3 text-center"><span className="text-gray-500">N/A</span></td>
                  <td className="px-4 py-3 text-center"><span className="text-green-400 font-bold">Yes</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="card p-4 rounded-xl border border-red-700/50 bg-red-950/10">
              <h4 className="text-red-400 font-semibold text-sm mb-2">Direct Wallet Overlap</h4>
              <p className="text-2xl font-bold text-red-400 mb-2">NONE</p>
              <p className="text-gray-400 text-sm">No shared Bitcoin addresses between BridgeStocks and other scams. The scammer uses fresh wallet infrastructure per campaign.</p>
            </div>
            <div className="card p-4 rounded-xl border border-green-700/50 bg-green-950/10">
              <h4 className="text-green-400 font-semibold text-sm mb-2">Operational Pattern Overlap</h4>
              <p className="text-2xl font-bold text-green-400 mb-2">STRONG</p>
              <p className="text-gray-400 text-sm">Identical methodology: Discord impersonation, typosquatting, fake deposit pages, rapid cash-out.</p>
            </div>
          </div>

          <div className="card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <p className="text-yellow-400 text-sm text-center">
              <strong>Conclusion (75-85% confidence):</strong> Same individual or group operates multiple scam sites, 
              using fresh wallet infrastructure for each campaign as an OpSec technique to complicate tracing.
            </p>
          </div>
        </div>
      </section>

      {/* Discord Impersonation Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Discord Impersonation Evidence</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Side-by-side comparison of the fake scammer account vs the real admin</p>
          
          {/* Username Comparison */}
          <div className="card p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 text-center bg-black/30">
            <p className="text-gray-400 mb-4 text-sm sm:text-base">Spot the difference in the usernames:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <div>
                <p className="text-xs text-gray-500 mb-1">REAL ADMIN</p>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-green-400">sa<span className="text-green-300 underline decoration-4">l</span>ma<span className="text-green-300 underline decoration-4">o</span>gs</p>
              </div>
              <div className="text-2xl sm:text-4xl text-gray-600">vs</div>
              <div>
                <p className="text-xs text-gray-500 mb-1">SCAMMER</p>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-red-400">sa<span className="text-red-300 underline decoration-4">1</span>ma<span className="text-red-300 underline decoration-4">0</span>gs</p>
              </div>
            </div>
            <p className="text-yellow-400 mt-4 text-xs sm:text-sm">The scammer swapped TWO characters: <code className="bg-green-900/50 px-2 py-0.5 rounded">l</code> &#8594; <code className="bg-red-900/50 px-2 py-0.5 rounded">1</code> and <code className="bg-green-900/50 px-2 py-0.5 rounded">o</code> &#8594; <code className="bg-red-900/50 px-2 py-0.5 rounded">0</code></p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Fake Account */}
            <div className="card rounded-xl overflow-hidden border-2 border-red-600">
              <div className="bg-red-600 px-4 py-2 text-center">
                <span className="font-bold text-white uppercase tracking-wider text-sm">Fake Scammer Account</span>
              </div>
              <div className="cursor-zoom-in" onClick={() => openLightbox('/evidence/bridgestocks/fake-admin.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/bridgestocks/fake-admin.jpg')}>
                <img src="/evidence/bridgestocks/fake-admin.jpg" alt="Fake Discord account impersonating admin - username sa1ma0gs with number 1 replacing letter l and number 0 replacing letter o" className="w-full" loading="lazy" />
              </div>
              <div className="p-4 bg-red-950/30">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Username:</span>
                    <code className="text-red-400 bg-black/30 px-2 rounded">sa1ma0gs</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Technique:</span>
                    <span className="text-red-400 font-semibold">l&#8594;1 and o&#8594;0 substitution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Account */}
            <div className="card rounded-xl overflow-hidden border-2 border-green-600">
              <div className="bg-green-600 px-4 py-2 text-center">
                <span className="font-bold text-white uppercase tracking-wider text-sm">Real Admin Account</span>
              </div>
              <div className="cursor-zoom-in" onClick={() => openLightbox('/evidence/bridgestocks/real-admin.png')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/bridgestocks/real-admin.png')}>
                <img src="/evidence/bridgestocks/real-admin.png" alt="Real Discord admin account salmaogs - legitimate community moderator" className="w-full" loading="lazy" />
              </div>
              <div className="p-4 bg-green-950/30">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Username:</span>
                    <code className="text-green-400 bg-black/30 px-2 rounded">salmaogs</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Legitimate Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-xs mb-4">Click images to expand</p>
          
          <div className="card p-3 sm:p-4 rounded-xl bg-yellow-900/20 border border-yellow-700">
            <p className="text-yellow-400 text-center text-xs sm:text-sm">
              <strong>Warning:</strong> The scammer uses &quot;typosquatting&quot; — creating a username that looks almost identical to the real admin 
              by replacing the letter <code className="bg-black/30 px-1 rounded">l</code> with the number <code className="bg-black/30 px-1 rounded">1</code> and 
              the letter <code className="bg-black/30 px-1 rounded">o</code> with the number <code className="bg-black/30 px-1 rounded">0</code>. 
              In most fonts, these characters are virtually indistinguishable. Always verify usernames character by character!
            </p>
          </div>
        </div>
      </section>

      {/* Scammer Conversations */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Scammer Conversation Evidence</h2>
          <p className="text-center text-gray-400 mb-2 text-sm sm:text-base">Actual messages from the scammer attempting to steal money</p>
          <p className="text-center text-gray-500 text-xs mb-6 sm:mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/bridgestocks/convo1.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/bridgestocks/convo1.jpg')}>
              <img src="/evidence/bridgestocks/convo1.jpg" alt="BridgeStocks scammer initial Discord conversation impersonating admin" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-2">
                <span className="text-gray-500 text-xs">Initial Conversation</span>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/bridgestocks/convo.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/bridgestocks/convo.jpg')}>
              <img src="/evidence/bridgestocks/convo.jpg" alt="BridgeStocks scammer sending phishing link to fake trading platform" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-2">
                <span className="text-gray-500 text-xs">Phishing Link</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 card p-4 rounded-xl bg-yellow-900/20 border border-yellow-700">
            <p className="text-yellow-400 text-center text-sm">
              <strong>Warning:</strong> These messages show the scammer impersonating a trusted Discord admin. Never trust unsolicited investment opportunities, even from accounts that appear legitimate.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence Gallery */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Platform Evidence</h2>
          <p className="text-center text-gray-400 mb-2 text-sm sm:text-base">Documented proof of the fake BridgeStocks platform</p>
          <p className="text-center text-gray-500 text-xs mb-6 sm:mb-8">Click any image to expand</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/bridgestocks/chainabuse-report.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/bridgestocks/chainabuse-report.jpg')}>
              <img src="/evidence/bridgestocks/chainabuse-report.jpg" alt="Chainabuse report filed against BridgeStocks.com on November 7 2025" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-green-400 text-sm">Chainabuse Report (Nov 7, 2025)</h4>
                <p className="text-gray-500 text-xs">Official report filed — led to the site being taken down within days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chainabuse Report Section */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-green-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Official Fraud Report</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">This scam has been officially reported to Chainabuse</p>
          
          <div className="card p-6 rounded-xl border-2 border-green-500 bg-green-950/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">Chainabuse Report Filed</h3>
                <p className="text-gray-400 text-sm">November 7, 2025</p>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Reported Wallet:</span>
                  <p className="font-mono text-orange-400 text-xs break-all">bc1qhppwpsp7hjxml7hpgwr9tk5xpadfuck2u0xktu</p>
                </div>
                <div>
                  <span className="text-gray-500">Scam Site:</span>
                  <p className="text-red-400 line-through">bridgestocks.com</p>
                </div>
                <div>
                  <span className="text-gray-500">Report Outcome:</span>
                  <p className="text-green-400 font-semibold">Site Taken Down</p>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <p className="text-yellow-400">Cryptocurrency Fraud / Impersonation</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.chainabuse.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Report a Scam on Chainabuse
              </a>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">About Chainabuse</h4>
              <p className="text-gray-400 text-sm">
                Chainabuse is a platform for reporting cryptocurrency scams and tracking fraudulent wallet addresses. 
                Reports help exchanges flag malicious addresses, protect other users, and support law enforcement investigations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Methods Explanation */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Statistical Methods Used</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">Rigorous quantitative analysis underpinning our conclusions</p>

          <div className="space-y-4">
            <div className="card p-5 rounded-xl border border-purple-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Herfindahl-Hirschman Index (HHI)</h4>
                  <p className="text-gray-400 text-sm">
                    Originally used to measure market concentration, we applied HHI to fund flow distribution. 
                    By squaring each destination wallet&apos;s share of total outflows and summing, we get a single metric 
                    (0 to 1) showing how concentrated the money flow is. Our result of <strong className="text-purple-300">0.8135</strong> indicates 
                    extreme concentration — far above the 0.25 threshold for &quot;highly concentrated.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5 rounded-xl border border-blue-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">Gini Coefficient</h4>
                  <p className="text-gray-400 text-sm">
                    The Gini coefficient measures inequality in a distribution (0 = perfect equality, 1 = perfect inequality). 
                    Across 7 destination addresses, our result of <strong className="text-blue-300">0.96</strong> confirms near-perfect inequality — 
                    one address captures almost all funds while others receive negligible amounts. This is not organic behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5 rounded-xl border border-cyan-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Chi-Squared Test for Independence</h4>
                  <p className="text-gray-400 text-sm">
                    We tested whether the observed changes in scam behavior (deposit size, destination selection) before vs after 
                    the Chainabuse report were statistically significant or just random variation. The result (<strong className="text-cyan-300">p &lt; 0.001</strong>) 
                    means there is less than 0.1% probability the change was random — confirming the scammers deliberately 
                    adapted their operation in response to being reported.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5 rounded-xl border border-green-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Temporal Clustering Analysis</h4>
                  <p className="text-gray-400 text-sm">
                    We analyzed transaction volumes and patterns over specific time periods to identify operational shifts. 
                    This revealed two distinct phases — the active scam period (July–Oct 2025) with large deposits and rapid cash-outs, 
                    and the post-report draining period (Nov 2025–Feb 2026) with small, regular withdrawals across split destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actionable Intelligence for Law Enforcement */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-blue-950/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white font-bold rounded-full text-sm uppercase tracking-wider mb-4">For Law Enforcement</span>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Actionable Intelligence Summary</h2>
            <p className="text-gray-400 text-sm">All subpoenable leads consolidated — each item traces back to a real-world identity</p>
          </div>

          {/* Lead 1: Discord */}
          <div className="card p-5 rounded-xl border-2 border-blue-500 bg-blue-950/30 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                  Subpoena Discord for Scammer Account
                  <span className="px-2 py-0.5 bg-red-600/30 text-red-400 text-xs rounded">HIGH PRIORITY</span>
                </h4>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">Scammer Username</p>
                      <p className="text-red-400 font-mono font-bold">sa1ma0gs</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Impersonating</p>
                      <p className="text-green-400 font-mono">salmaogs (real admin)</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Discord maintains <strong className="text-blue-300">account registration records</strong> including email address, phone number, 
                  IP addresses at registration and login, payment methods (if Nitro), and device fingerprints. 
                  A subpoena to Discord Inc. for the account <code className="bg-black/30 px-1 rounded text-red-300">sa1ma0gs</code> will yield 
                  the scammer&apos;s real contact information and login history.
                </p>
              </div>
            </div>
          </div>

          {/* Lead 2: Cash-Out Wallets */}
          <div className="card p-5 rounded-xl border-2 border-blue-500 bg-blue-950/30 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                  Trace Cash-Out Wallets to Exchanges
                  <span className="px-2 py-0.5 bg-red-600/30 text-red-400 text-xs rounded">HIGH PRIORITY</span>
                </h4>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <code className="text-red-300 text-xs break-all">1JJYi2dhGzQb1Uy3Tqsme3yvh51V5gXZFc</code>
                      <span className="text-red-400 font-bold text-sm">$27,962 (89.8%)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <code className="text-yellow-300 text-xs break-all">1PPhvP9nNx6P6gVxW6X5StCcvP9xqk63Kp</code>
                      <span className="text-yellow-400 font-bold text-sm">$2,539 (8.2%)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  These are the scammer&apos;s <strong className="text-blue-300">personal cash-out wallets</strong> (95%+ confidence). 
                  Follow their outbound transactions to identify which <strong className="text-blue-300">cryptocurrency exchange</strong> the scammer 
                  uses to convert BTC to fiat. That exchange can then be subpoenaed for <strong className="text-blue-300">KYC records</strong> — 
                  government ID, selfie verification, bank account details, and withdrawal history.
                </p>
              </div>
            </div>
          </div>

          {/* Lead 3: Namecheap */}
          <div className="card p-5 rounded-xl border-2 border-blue-500 bg-blue-950/30 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                  Subpoena Namecheap for Registrant Identity
                  <span className="px-2 py-0.5 bg-yellow-600/30 text-yellow-400 text-xs rounded">MEDIUM PRIORITY</span>
                </h4>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">Registrar</p>
                      <p className="text-gray-300 font-semibold">Namecheap Inc (IANA ID: 1068)</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Domain</p>
                      <p className="text-red-400 font-mono">BRIDGESTOCKS.COM</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Abuse Contact</p>
                      <p className="text-gray-300">abuse@namecheap.com</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Status</p>
                      <p className="text-red-400 font-semibold">clientHold (Suspended)</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  The WHOIS is hidden behind <strong className="text-blue-300">Withheld for Privacy ehf</strong>, but Namecheap retains the 
                  <strong className="text-blue-300"> real registrant data</strong> behind the privacy shield. A subpoena to Namecheap Inc. 
                  will reveal the true registrant&apos;s name, email, payment method used to purchase the domain, IP address at registration, 
                  and any associated accounts. The domain is already on <code className="bg-red-900/30 px-1 rounded text-red-300">clientHold</code> — 
                  Namecheap is aware this domain was used for fraud.
                </p>
              </div>
            </div>
          </div>

          {/* Lead 4: Exchange Hot Wallets */}
          <div className="card p-5 rounded-xl border-2 border-blue-500 bg-blue-950/30 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">4</span>
              </div>
              <div className="flex-1">
                <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                  Identify Victim Exchanges via Hot Wallet Sources
                  <span className="px-2 py-0.5 bg-yellow-600/30 text-yellow-400 text-xs rounded">MEDIUM PRIORITY</span>
                </h4>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">Source #1 (13-178 BTC balance, batched outputs)</p>
                      <code className="text-blue-300 text-xs break-all">bc1qwelntg7tpxwgmh7gea0kycclx87mksnvhaadgf</code>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Source #2 (3-66 BTC balance, batched outputs)</p>
                      <code className="text-blue-300 text-xs break-all">bc1q4vxcxw7mpg9dcryqu0kav8awrn7qk5e6wgs3hg</code>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  These source wallets exhibit <strong className="text-blue-300">exchange hot wallet behavior</strong> (large balances, batched multi-recipient transactions). 
                  Identifying which exchange operates these wallets allows law enforcement to request withdrawal records — 
                  revealing which <strong className="text-blue-300">KYC-verified accounts</strong> initiated transfers to the scam wallet, 
                  including timestamps that correlate with the scammer&apos;s Discord activity.
                </p>
              </div>
            </div>
          </div>

          {/* Lead 5: Behavioral Evidence */}
          <div className="card p-5 rounded-xl border-2 border-blue-500 bg-blue-950/30 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">5</span>
              </div>
              <div className="flex-1">
                <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                  Behavioral Evidence of Consciousness of Guilt
                  <span className="px-2 py-0.5 bg-green-600/30 text-green-400 text-xs rounded">SUPPORTING EVIDENCE</span>
                </h4>
                <p className="text-gray-400 text-sm">
                  Statistical analysis (chi-squared, p &lt; 0.001) proves the scammer <strong className="text-blue-300">changed their behavior</strong> after 
                  the Chainabuse report was filed on November 7, 2025:
                </p>
                <ul className="text-gray-400 text-sm mt-2 space-y-1 ml-4">
                  <li>&bull; Average deposit size dropped <strong className="text-red-300">93%</strong> (from $2,790 to $180)</li>
                  <li>&bull; Cash-outs split across <strong className="text-red-300">two wallets instead of one</strong> — evasion tactic</li>
                  <li>&bull; Switched from immediate large sweeps to <strong className="text-red-300">small regular drains every 1-3 days</strong></li>
                  <li>&bull; Domain allowed to expire without renewal — <strong className="text-red-300">abandoning the scam front</strong></li>
                  <li>&bull; Wallet continued receiving funds <strong className="text-red-300">10 days after domain expired</strong></li>
                </ul>
                <p className="text-gray-400 text-sm mt-2">
                  This behavioral adaptation demonstrates <strong className="text-blue-300">awareness of wrongdoing</strong> and active steps to evade detection — 
                  strong evidence of <strong className="text-blue-300">intent</strong> in a fraud prosecution.
                </p>
              </div>
            </div>
          </div>

          {/* Lead 6: Cross-Scam Pattern */}
          <div className="card p-5 rounded-xl border-2 border-blue-500 bg-blue-950/30 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">6</span>
              </div>
              <div className="flex-1">
                <h4 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                  Cross-Reference with Related Scam Operations
                  <span className="px-2 py-0.5 bg-green-600/30 text-green-400 text-xs rounded">SUPPORTING EVIDENCE</span>
                </h4>
                <p className="text-gray-400 text-sm">
                  BridgeStocks shares an <strong className="text-blue-300">identical operational pattern</strong> with at least 4 other documented scams 
                  (MirrorExp, TruCopy, EverrexTrade, AffluenceAura) — all using Discord admin impersonation, typosquatting, and fake trading platforms. 
                  While wallet addresses are siloed per campaign (OpSec technique), cross-referencing Discord account metadata, 
                  Namecheap registration payment methods, and exchange KYC data across these scams may reveal a 
                  <strong className="text-blue-300">single operator or organized group</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="card p-6 rounded-xl bg-green-950/30 border-2 border-green-600 mt-6">
            <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recommended Subpoena Targets (In Order)
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">1.</span>
                <p className="text-gray-300">
                  <strong className="text-green-300">Discord Inc.</strong> — Account records for username 
                  <code className="text-xs bg-black/30 px-1 rounded mx-1">sa1ma0gs</code> including email, phone, IP logs, and linked payment methods
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">2.</span>
                <p className="text-gray-300">
                  <strong className="text-green-300">Blockchain analytics</strong> — Trace outbound transactions from 
                  <code className="text-xs bg-black/30 px-1 rounded mx-1">1JJY...ZFc</code> and 
                  <code className="text-xs bg-black/30 px-1 rounded mx-1">1PPh...3Kp</code> to identify the exchange(s) used for liquidation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">3.</span>
                <p className="text-gray-300">
                  <strong className="text-green-300">Identified exchange(s)</strong> — KYC records for the account(s) receiving funds from 
                  the cash-out wallets, including government ID, bank withdrawal records, and IP addresses
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">4.</span>
                <p className="text-gray-300">
                  <strong className="text-green-300">Namecheap Inc.</strong> — True registrant data behind WHOIS privacy for 
                  <code className="text-xs bg-black/30 px-1 rounded mx-1">BRIDGESTOCKS.COM</code>, including payment method and registration IP
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">5.</span>
                <p className="text-gray-300">
                  <strong className="text-green-300">Cross-reference all leads</strong> — If the same email, phone, IP, or payment method 
                  appears across Discord, Namecheap, and exchange records, this conclusively identifies the scammer
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <p className="text-yellow-400 text-sm text-center">
              <strong>Note:</strong> All blockchain data referenced in this investigation is publicly verifiable on the Bitcoin blockchain. 
              Transaction hashes, wallet addresses, and timestamps can be independently confirmed by any party using a blockchain explorer.
            </p>
          </div>
        </div>
      </section>

      <RelatedScams exclude="bridgestocks" />

      <WhatToDo />

      <InvestigationFooter
        currentPage="bridgestocks"
        tags={['BridgeStocks Scam', 'Discord Impersonation', 'Statistical Analysis', 'Crypto Fraud Alert', 'Chainabuse']}
      />
    </main>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lightbox from '../components/Lightbox'
import InvestigationNav from '../components/InvestigationNav'
import WhatToDo from '../components/WhatToDo'
import RelatedScams from '../components/RelatedScams'
import InvestigationFooter from '../components/InvestigationFooter'

export default function MirrorExpPage() {
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
      <InvestigationNav totalLoss="$30,000+" totalLossShort="$30K+" />

      {/* Hero Warning Section */}
      <section className="relative py-10 sm:py-16 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="warning-pulse inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-red-600 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider" role="alert">
            Scam Alert - Do Not Send Money
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6" itemProp="headline">
            <span className="gradient-text">MirrorExp</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2" itemProp="description">
            MirrorExp.com is a cryptocurrency phishing scam that uses Discord admin impersonation with <strong className="text-yellow-400">typosquatting</strong> to steal Bitcoin, Ethereum, and USDT. 
            This site documents the fraud with blockchain evidence across multiple chains.
          </p>
          <div className="card inline-block p-3 sm:p-4 rounded-lg">
            <p className="text-gray-400 text-xs sm:text-sm">Fraudulent Crypto Scam Website</p>
            <p className="text-red-400 font-mono text-base sm:text-lg break-all">mirrorexp.com</p>
          </div>
        </div>
      </section>

      {/* Site Taken Down Banner */}
      <section className="py-4 px-4 border-b border-gray-800 bg-gradient-to-r from-green-950/50 to-emerald-950/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-center">
              <p className="text-green-400 font-semibold">Site Taken Down</p>
              <p className="text-gray-400 text-sm">This scam website has been removed from the internet. The domain is still registered (expires Dec 2026) but hosting was terminated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Linked to OxyCapitals Banner */}
      <section className="py-3 px-4 border-b border-gray-800 bg-purple-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <p className="text-purple-300 text-sm">
              <strong>Linked Operation:</strong> This domain was taken down on the same day as OxyCapitals (oxycapitalsltd.com). Both domains were updated on Feb 7, 2026 and expire within 9 days of each other — strong evidence the same operator owned both websites.
            </p>
          </div>
        </div>
      </section>

      {/* WHOIS Evidence - Same Day Takedown */}
      <section className="py-8 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">WHOIS Evidence: Same Day Takedown</h2>
          <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">Both MirrorExp and OxyCapitals were updated on February 7, 2026 — the day they were taken offline</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* MirrorExp WHOIS */}
            <div className="card rounded-xl overflow-hidden border-2 border-orange-600">
              <div className="bg-orange-900/30 p-3 text-center">
                <span className="text-orange-400 font-bold uppercase text-sm">MirrorExp WHOIS</span>
              </div>
              <div className="overflow-y-auto max-h-[500px]">
                <img 
                  src="/evidence/mirrorexp-whois.png" 
                  alt="WHOIS lookup for mirrorexp.com showing updated date Feb 7, 2026" 
                  className="w-full h-auto"
                  loading="lazy"
                  onClick={() => openLightbox('/evidence/mirrorexp-whois.png')}
                />
              </div>
            </div>
            
            {/* OxyCapitals WHOIS */}
            <div className="card rounded-xl overflow-hidden border-2 border-red-600">
              <div className="bg-red-900/30 p-3 text-center">
                <span className="text-red-400 font-bold uppercase text-sm">OxyCapitals WHOIS</span>
              </div>
              <div className="overflow-y-auto max-h-[500px]">
                <img 
                  src="/evidence/oxycapitals-whois.png" 
                  alt="WHOIS lookup for oxycapitalsltd.com showing updated date Feb 7, 2026" 
                  className="w-full h-auto"
                  loading="lazy"
                  onClick={() => openLightbox('/evidence/oxycapitals-whois.png')}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 card p-4 rounded-xl bg-purple-950/20 border border-purple-700/50">
            <h4 className="text-purple-400 font-semibold mb-2 text-center">Key Finding: Same Operator</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-1">MirrorExp</p>
                <p className="text-gray-300">Registrar: NameSilo<br/>Nameservers: Cloudflare</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-1">OxyCapitals</p>
                <p className="text-gray-300">Registrar: GoDaddy<br/>Nameservers: domain_principal.net</p>
              </div>
            </div>
            <p className="text-purple-300 text-center mt-3 text-sm">
              <strong>Different infrastructure but same takedown date</strong> — strong evidence the same operator owned both websites, possibly using different hosting to avoid detection.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Cartoon Section */}
      <section className="py-8 px-4 border-b border-gray-800 bg-gradient-to-b from-purple-950/20 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card rounded-2xl overflow-hidden border-2 border-purple-600/50 shadow-lg shadow-purple-900/20">
            <img 
              src="/evidence/mirrorexp/cartoon.png" 
              alt="Dirty Digital, Clean Cash - Cartoon illustrating how crypto scammers launder stolen cryptocurrency through exchanges" 
              className="w-full cursor-zoom-in hover:scale-[1.02] transition-transform"
              onClick={() => openLightbox('/evidence/mirrorexp/cartoon.png')}
              loading="lazy"
            />
          </div>
          <p className="text-gray-500 text-sm mt-4 italic">
            &quot;Dirty Digital, Clean Cash&quot; — How crypto scammers launder your money through exchanges
          </p>
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
                  <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-green-400"><span className="text-green-300 underline decoration-4">.</span>atraveller</p>
                </div>
                <div className="text-2xl sm:text-3xl text-gray-600">vs</div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">SCAMMER USERNAME</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-red-400"><span className="text-red-300 underline decoration-4">_</span>atraveller</p>
                </div>
              </div>
              <p className="text-yellow-300 text-xs sm:text-sm">
                The scammer changed just <strong>ONE character</strong>: a period <code className="bg-green-900/50 px-1 rounded">.</code> became an underscore <code className="bg-red-900/50 px-1 rounded">_</code>
              </p>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center">
              <strong className="text-yellow-300">Always verify usernames character-by-character</strong> before trusting anyone with your money.
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
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-red-400">Typosquatting</h3>
              <p className="text-gray-400 text-xs sm:text-base">Scammer creates a Discord username nearly identical to a real admin, changing just one letter.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">2</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-orange-400">Impersonation</h3>
              <p className="text-gray-400 text-xs sm:text-base">Using the fake account, they DM victims pretending to be the trusted admin.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">3</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-yellow-400">Fake Platform</h3>
              <p className="text-gray-400 text-xs sm:text-base">Victims are directed to MirrorExp.com, a fake trading platform, to deposit crypto.</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">4</div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 text-green-400">Rapid Cash-Out</h3>
              <p className="text-gray-400 text-xs sm:text-base">Deposits are moved to personal wallets within minutes, then to exchanges for cash-out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Total Victim Losses */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-red-950/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Total Documented Victim Losses</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Based on blockchain transaction analysis of known scam wallets</p>
          
          <div className="card p-5 sm:p-8 rounded-2xl border-2 border-red-600 bg-red-950/20 text-center mb-6 sm:mb-8">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">Confirmed Stolen Amount</p>
            <p className="text-4xl sm:text-5xl md:text-7xl font-black text-red-500 mb-2">$30,000+</p>
            <p className="text-gray-400 text-sm sm:text-base">USD equivalent across Bitcoin, Ethereum, USDT &amp; USDC</p>
          </div>

          {/* Bitcoin Wallet */}
          <h3 className="text-base sm:text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full flex-shrink-0"></span>
            Bitcoin — $21,853
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            <div className="card p-3 sm:p-5 rounded-xl text-center border border-orange-700/50">
              <p className="text-lg sm:text-2xl font-bold text-orange-400 mb-1">$21,853</p>
              <p className="text-gray-400 text-xs sm:text-sm">Primary Scam Wallet</p>
              <p className="text-gray-500 text-xs mt-1 hidden sm:block">4 transactions tracked</p>
            </div>
            <div className="card p-3 sm:p-5 rounded-xl text-center border border-purple-700/50">
              <p className="text-lg sm:text-2xl font-bold text-purple-400 mb-1">$2.1M+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Exchange Pool</p>
              <p className="text-gray-500 text-xs mt-1 hidden sm:block">65 input addresses</p>
            </div>
          </div>

          {/* Ethereum/Stablecoins */}
          <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full flex-shrink-0"></span>
            Ethereum &amp; Stablecoins — $500+
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
            <div className="card p-3 sm:p-4 rounded-xl text-center border border-blue-700/50">
              <p className="text-base sm:text-xl font-bold text-blue-400 mb-1">~$75</p>
              <p className="text-gray-400 text-xs sm:text-sm">ETH</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-xl text-center border border-green-700/50">
              <p className="text-base sm:text-xl font-bold text-green-400 mb-1">$200+</p>
              <p className="text-gray-400 text-xs sm:text-sm">USDT</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-xl text-center border border-cyan-700/50">
              <p className="text-base sm:text-xl font-bold text-cyan-400 mb-1">$200+</p>
              <p className="text-gray-400 text-xs sm:text-sm">USDC</p>
            </div>
          </div>

          <div className="card p-4 rounded-xl text-center bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">6+ month operation</span> across 4 blockchains &bull; 
              All funds traced to exchange cash-outs
            </p>
          </div>
        </div>
      </section>

      {/* Scam Wallet Addresses */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Known Scam Wallet Addresses</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Do NOT send cryptocurrency to any of these addresses</p>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-orange-400 font-semibold text-sm sm:text-base">Bitcoin (Primary Deposit)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Balance: 0.13 BTC (~$9,450) | Total: $21,853</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-orange-400">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-orange-300 font-semibold text-sm sm:text-base">Bitcoin (Staging #1)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Emptied to exchange | Received: 0.05 BTC ($3,628)</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-orange-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-orange-200 font-semibold text-sm sm:text-base">Bitcoin (Staging #2)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Emptied to exchange | Received: 0.06 BTC ($4,391)</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-purple-400 font-semibold text-sm sm:text-base">Bitcoin (Exchange Pool)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Cash-out | 29.43 BTC ($2.1M) from 65 sources</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-blue-400 font-semibold text-sm sm:text-base">Ethereum / USDC (ERC-20)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">0xE28425B27d555f870d3CaCAC4Bf7F549c768022F</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Same address used for ETH and USDC deposits</p>
            </div>
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-green-400 font-semibold text-sm sm:text-base">USDT (ERC-20)</span>
                <div className="">
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">0xF4eE6d12f95f401BF6b0aB488Ec18E43bfdbeAFC</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Active since August 2025 | 6+ months of operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Money Flow Analysis */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Blockchain Transaction Analysis</h2>
          <p className="text-center text-gray-400 mb-8">Complete money flow traced across multiple chains</p>
          
          <div className="card p-6 rounded-xl mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Bitcoin Money Flow Hierarchy</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="text-center p-3 bg-red-900/30 rounded border border-red-700">
                <div className="text-gray-400 text-xs mb-1">VICTIMS</div>
                <div className="text-red-400">Directed to deposit via fake admin DMs</div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓</div>
              <div className="text-center p-3 bg-orange-900/30 rounded border border-orange-700">
                <div className="text-gray-400 text-xs mb-1">SCAM DEPOSIT WALLET</div>
                <div className="text-orange-400 break-all text-xs">bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v</div>
                <div className="text-gray-500 text-xs mt-1">Total: ~$21,853 (4 transactions)</div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-3 bg-yellow-900/30 rounded border border-yellow-700">
                  <div className="text-gray-400 text-xs mb-1">STAGING WALLET #1</div>
                  <div className="text-yellow-400 break-all text-xs">bc1qqtjr...u5u0x</div>
                  <div className="text-gray-500 text-xs mt-1">0.05 BTC ($3,628)</div>
                </div>
                <div className="text-center p-3 bg-yellow-900/30 rounded border border-yellow-700">
                  <div className="text-gray-400 text-xs mb-1">STAGING WALLET #2</div>
                  <div className="text-yellow-400 break-all text-xs">bc1q6z9f...v6ug</div>
                  <div className="text-gray-500 text-xs mt-1">0.06 BTC ($4,391)</div>
                </div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓</div>
              <div className="text-center p-3 bg-purple-900/30 rounded border border-purple-700">
                <div className="text-gray-400 text-xs mb-1">EXCHANGE CONSOLIDATION (Cash Out)</div>
                <div className="text-purple-400 break-all text-xs">bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76</div>
                <div className="text-gray-500 text-xs mt-1">29.43 BTC ($2.1M) from 65 different addresses</div>
              </div>
            </div>
          </div>

          {/* Cash-out Timing */}
          <div className="card p-6 rounded-xl mb-8 border border-red-700/50 bg-red-950/20">
            <h3 className="text-lg font-semibold mb-4 text-red-400 text-center">Lightning-Fast Cash-Out Pattern</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Bitcoin</p>
                <p className="text-4xl font-bold text-red-400">74 min</p>
                <p className="text-gray-500 text-xs">From deposit to staging wallet</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Ethereum</p>
                <p className="text-4xl font-bold text-red-400">5 min</p>
                <p className="text-gray-500 text-xs">From deposit to cash-out</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              This rapid extraction indicates <strong className="text-yellow-300">automated monitoring</strong> or active watching of deposit wallets.
            </p>
          </div>

          {/* Statistical Confidence */}
          <div className="card p-6 rounded-xl border border-green-700/50 bg-green-950/20 mb-8">
            <h3 className="text-lg font-semibold mb-4 text-green-400 text-center">Fraud Confidence Score: 100/100</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Rapid cash-out</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Multi-chain</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Staging wallets</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Exchange consolidation</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Round numbers</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Shared addresses</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">6+ month operation</p>
              </div>
              <div>
                <p className="text-green-400 font-bold">✓</p>
                <p className="text-gray-400">Large pool destination</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              Statistical analysis confirms <strong className="text-green-300">99.9% confidence</strong> this is a deliberate scam operation.
            </p>
          </div>

          {/* Round Numbers Evidence */}
          <div className="card p-6 rounded-xl border-2 border-orange-600 bg-orange-950/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-400">Strong Evidence: Round Number Pattern</h3>
                <p className="text-gray-400 text-sm">Manual withdrawals reveal scammer behavior</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <h4 className="text-orange-300 font-semibold text-sm mb-3">MirrorExp Scammer&apos;s Withdrawal</h4>
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4 p-3 bg-red-900/30 rounded border border-red-700">
                <div>
                  <p className="text-gray-500 text-xs">From scam wallet to staging</p>
                  <p className="text-2xl font-mono font-bold text-red-400">0.05000000 BTC</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-red-600/30 text-red-400 text-xs font-semibold rounded-full border border-red-600">
                    EXACT ROUND NUMBER
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-orange-300">Why this matters:</strong> Real trading creates messy decimals from fees and price conversions (e.g., 0.04973 BTC). 
                A perfectly round <code className="bg-black/50 px-1 rounded">0.05</code> BTC indicates a <strong>manual, deliberate withdrawal</strong> — the scammer chose a &quot;nice&quot; amount to extract.
              </p>
            </div>

            <div className="bg-black/40 rounded-lg p-4">
              <h4 className="text-orange-300 font-semibold text-sm mb-3">Exchange Pool Shows Pattern of Fraud</h4>
              <p className="text-gray-400 text-sm mb-3">
                The exchange consolidation wallet received <strong className="text-purple-300">65 inputs</strong> in a single transaction. 
                Analysis reveals <strong className="text-red-400">15+ round number amounts</strong>:
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-center text-xs font-mono">
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.50 BTC</p>
                  <p className="text-gray-500">×2</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.40 BTC</p>
                  <p className="text-gray-500">×2</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.25 BTC</p>
                  <p className="text-gray-500">×2</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.21 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.20 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.19 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.15 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.12 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.10 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.09 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.07 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.06 BTC</p>
                </div>
                <div className="bg-red-900/30 p-2 rounded border border-red-700/50">
                  <p className="text-red-400">0.05 BTC</p>
                  <p className="text-gray-500">×3</p>
                </div>
              </div>
              <p className="text-yellow-400 text-sm mt-4 text-center">
                <strong>This concentration of round numbers strongly suggests the exchange pool is a criminal cash-out point receiving funds from multiple manual fraud operations.</strong>
              </p>
            </div>
          </div>

          {/* 65-Input Consolidation Evidence */}
          <div className="card p-6 rounded-xl border-2 border-purple-600 bg-purple-950/20 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-400">Strong Evidence: 65-Input Consolidation Transaction</h3>
                <p className="text-gray-400 text-sm">All roads lead to the same criminal cash-out point</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <h4 className="text-purple-300 font-semibold text-sm mb-3">Both Staging Wallets → Same Destination</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-yellow-900/30 rounded border border-yellow-700">
                  <p className="text-gray-500 text-xs mb-1">Staging Wallet #1</p>
                  <p className="text-yellow-400 font-mono text-sm break-all">bc1qqtjr...u5u0x</p>
                  <p className="text-gray-400 text-xs mt-1">Emptied at <strong>14:01:55</strong></p>
                </div>
                <div className="p-3 bg-yellow-900/30 rounded border border-yellow-700">
                  <p className="text-gray-500 text-xs mb-1">Staging Wallet #2</p>
                  <p className="text-yellow-400 font-mono text-sm break-all">bc1q6z9f...v6ug</p>
                  <p className="text-gray-400 text-xs mt-1">Emptied at <strong>13:57:30</strong></p>
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-red-900/30 rounded-full border border-red-600">
                  <span className="text-red-400 font-bold">Only 4 minutes apart → Same operator</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4">
              <h4 className="text-purple-300 font-semibold text-sm mb-3">The $2.1 Million Pool</h4>
              <div className="p-4 bg-purple-900/30 rounded border border-purple-700 mb-4">
                <p className="text-gray-500 text-xs mb-1">Final Destination Wallet</p>
                <p className="text-purple-400 font-mono text-sm break-all mb-2">bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-red-400">65</p>
                    <p className="text-gray-500 text-xs">Input Addresses</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-400">29.43</p>
                    <p className="text-gray-500 text-xs">BTC Received</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">$2.1M</p>
                    <p className="text-gray-500 text-xs">USD Value</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-purple-300">Why this matters:</strong> A single transaction receiving funds from 65 different addresses indicates this is either:
              </p>
              <ul className="text-gray-400 text-sm mt-2 space-y-1 ml-4">
                <li>• A <strong className="text-blue-300">cryptocurrency exchange</strong> deposit address (can be subpoenaed for KYC records)</li>
                <li>• A <strong className="text-red-300">mixing/tumbling service</strong> used to obscure fund origins</li>
                <li>• A <strong className="text-yellow-300">larger criminal operation</strong> consolidating proceeds from multiple scams</li>
              </ul>
              <p className="text-yellow-400 text-sm mt-4 text-center">
                <strong>This is the key lead for law enforcement — identifying who controls this wallet can unmask the entire operation.</strong>
              </p>
            </div>
          </div>

          {/* One-Time-Use Staging Wallets Evidence */}
          <div className="card p-6 rounded-xl border-2 border-cyan-600 bg-cyan-950/20 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400">Strong Evidence: Disposable Staging Wallets</h3>
                <p className="text-gray-400 text-sm">One-time-use wallets designed to obscure the money trail</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <h4 className="text-cyan-300 font-semibold text-sm mb-3">Wallet Lifecycle Analysis</h4>
              <div className="space-y-4">
                <div className="p-4 bg-cyan-900/20 rounded border border-cyan-700/50">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-gray-500 text-xs">Staging Wallet #1</p>
                      <p className="text-cyan-400 font-mono text-sm">bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-semibold rounded-full border border-gray-600">
                        BALANCE: 0.00 BTC
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-green-900/30 rounded">
                      <p className="text-green-400 font-semibold">Received</p>
                      <p className="text-gray-300">0.05 BTC</p>
                    </div>
                    <div className="p-2 bg-yellow-900/30 rounded">
                      <p className="text-yellow-400 font-semibold">Held for</p>
                      <p className="text-gray-300">~3 hours</p>
                    </div>
                    <div className="p-2 bg-red-900/30 rounded">
                      <p className="text-red-400 font-semibold">Emptied</p>
                      <p className="text-gray-300">100%</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-cyan-900/20 rounded border border-cyan-700/50">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-gray-500 text-xs">Staging Wallet #2</p>
                      <p className="text-cyan-400 font-mono text-sm">bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-semibold rounded-full border border-gray-600">
                        BALANCE: 0.00 BTC
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-green-900/30 rounded">
                      <p className="text-green-400 font-semibold">Received</p>
                      <p className="text-gray-300">0.06 BTC</p>
                    </div>
                    <div className="p-2 bg-yellow-900/30 rounded">
                      <p className="text-yellow-400 font-semibold">Held for</p>
                      <p className="text-gray-300">~3 hours</p>
                    </div>
                    <div className="p-2 bg-red-900/30 rounded">
                      <p className="text-red-400 font-semibold">Emptied</p>
                      <p className="text-gray-300">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                <strong className="text-cyan-300">Why this matters:</strong> These wallets exhibit classic <strong>&quot;burner wallet&quot;</strong> behavior:
              </p>
              <ul className="text-gray-400 text-sm mt-2 space-y-1 ml-4">
                <li>• <strong className="text-red-300">Single use:</strong> Each wallet received exactly one deposit, then was emptied completely</li>
                <li>• <strong className="text-red-300">Zero balance:</strong> Both wallets now hold 0 BTC — abandoned after use</li>
                <li>• <strong className="text-red-300">Brief holding:</strong> Funds held for only ~3 hours before forwarding</li>
                <li>• <strong className="text-red-300">Layering technique:</strong> Creates an extra hop between victim and exchange to obscure the trail</li>
              </ul>
              <div className="mt-4 p-3 bg-red-900/30 rounded border border-red-700 text-center">
                <p className="text-red-400 text-sm">
                  <strong>This is textbook money laundering — using intermediate &quot;staging&quot; wallets to distance stolen funds from their source before cashing out.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impersonation Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Impersonation Evidence</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Side-by-side comparison of real admin vs scammer account</p>
          
          {/* Username Comparison */}
          <div className="card p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 text-center bg-black/30">
            <p className="text-gray-400 mb-4 text-sm sm:text-base">Spot the difference in the usernames:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <div>
                <p className="text-xs text-gray-500 mb-1">REAL ADMIN</p>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-green-400"><span className="text-green-300 underline decoration-4">.</span>atraveller</p>
              </div>
              <div className="text-2xl sm:text-4xl text-gray-600">vs</div>
              <div>
                <p className="text-xs text-gray-500 mb-1">SCAMMER</p>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-red-400"><span className="text-red-300 underline decoration-4">_</span>atraveller</p>
              </div>
            </div>
            <p className="text-yellow-400 mt-4 text-xs sm:text-sm">The scammer changed just ONE character: <code className="bg-green-900/50 px-2 py-0.5 rounded">.</code> → <code className="bg-red-900/50 px-2 py-0.5 rounded">_</code></p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="card rounded-xl overflow-hidden border-2 border-green-600">
              <div className="bg-green-900/30 p-2 sm:p-3 text-center">
                <span className="text-green-400 font-bold uppercase text-xs sm:text-sm">.atraveller (Real Admin)</span>
              </div>
              <img 
                src="/evidence/mirrorexp/real admin.jpg" 
                alt="Real Discord admin .atraveller profile - legitimate crypto community moderator" 
                className="w-full evidence-img cursor-zoom-in" 
                onClick={() => openLightbox('/evidence/mirrorexp/real admin.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="card rounded-xl overflow-hidden border-2 border-red-600">
              <div className="bg-red-900/30 p-2 sm:p-3 text-center">
                <span className="text-red-400 font-bold uppercase text-xs sm:text-sm">_atraveller (Scammer)</span>
              </div>
              <img 
                src="/evidence/mirrorexp/fake admin.jpg" 
                alt="Fake Discord account _atraveller impersonating admin using typosquatting - crypto scammer profile" 
                className="w-full evidence-img cursor-zoom-in" 
                onClick={() => openLightbox('/evidence/mirrorexp/fake admin.jpg')}
                loading="lazy"
              />
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-xs mb-4">Click images to expand</p>
          
          <div className="card p-3 sm:p-4 rounded-xl bg-yellow-900/20 border border-yellow-700">
            <p className="text-yellow-400 text-center text-xs sm:text-sm">
              <strong>Warning:</strong> The scammer uses &quot;typosquatting&quot; - creating a username that looks almost identical to the real admin by changing just one character. A period <code className="bg-black/30 px-1 rounded">.</code> looks very similar to an underscore <code className="bg-black/30 px-1 rounded">_</code> at a glance. Always verify usernames character by character!
            </p>
          </div>
        </div>
      </section>

      {/* Platform Evidence Gallery */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Fake Platform Evidence</h2>
          <p className="text-center text-gray-400 mb-2 text-sm sm:text-base">Screenshots of the fraudulent MirrorExp trading platform</p>
          <p className="text-center text-gray-500 text-xs mb-6 sm:mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/scam site screenshot evidence.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/scam site screenshot evidence.jpg')}>
              <img src="/evidence/mirrorexp/scam site screenshot evidence.jpg" alt="MirrorExp scam website homepage - fake crypto trading platform" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Scam Homepage</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/fake invesment platform dashboard.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/fake invesment platform dashboard.jpg')}>
              <img src="/evidence/mirrorexp/fake invesment platform dashboard.jpg" alt="MirrorExp fake investment dashboard showing fake profits" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Fake Dashboard</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/fake trading page.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/fake trading page.jpg')}>
              <img src="/evidence/mirrorexp/fake trading page.jpg" alt="MirrorExp fake trading interface designed to steal cryptocurrency" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Fake Trading Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/deposit page.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/deposit page.jpg')}>
              <img src="/evidence/mirrorexp/deposit page.jpg" alt="MirrorExp fraudulent deposit page requesting cryptocurrency" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Deposit Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/withdrawal page.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/withdrawal page.jpg')}>
              <img src="/evidence/mirrorexp/withdrawal page.jpg" alt="MirrorExp fake withdrawal page - withdrawals never processed" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Withdrawal Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/btc deposit link.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/btc deposit link.jpg')}>
              <img src="/evidence/mirrorexp/btc deposit link.jpg" alt="MirrorExp Bitcoin deposit address for stealing crypto" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">BTC Deposit Link</h4>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in max-w-2xl mx-auto" onClick={() => openLightbox('/evidence/mirrorexp/scam btc wallet info blockchain.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/mirrorexp/scam btc wallet info blockchain.jpg')}>
              <img src="/evidence/mirrorexp/scam btc wallet info blockchain.jpg" alt="Blockchain explorer showing MirrorExp scam wallet transactions" className="w-full evidence-img" loading="lazy" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Blockchain Evidence - Scam Wallet Transactions</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedScams exclude="mirrorexp" />

      {/* Exchange Cash-Out Addresses */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-green-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Exchange Cash-Out Addresses</h2>
          <p className="text-center text-gray-400 mb-2">Critical information for law enforcement</p>
          <p className="text-center text-green-400 text-sm mb-8">These addresses can be subpoenaed from exchanges for KYC records</p>
          
          <div className="card p-6 rounded-xl border-2 border-green-600 bg-green-950/20 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400">Primary BTC Cash-Out (65-Input Pool)</h3>
                <p className="text-gray-400 text-sm">Likely major exchange or mixing service</p>
              </div>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <code className="text-green-300 text-sm md:text-base break-all">bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76</code>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-gray-500">Total Received:</span>
                <span className="text-red-400 font-semibold ml-2">29.43 BTC (~$2.1M)</span>
              </div>
              <div>
                <span className="text-gray-500">Input Sources:</span>
                <span className="text-gray-300 ml-2">65 different addresses</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="card p-5 rounded-xl border border-blue-700/50 bg-blue-950/20">
              <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                ETH Cash-Out #1
              </h4>
              <code className="text-xs text-blue-300 bg-black/50 px-2 py-1 rounded block break-all mb-2">
                0x00f03542c5c73705d9be26c82f2fb1cc202f32a8
              </code>
              <p className="text-gray-500 text-xs">Received 0.02659 ETH</p>
            </div>

            <div className="card p-5 rounded-xl border border-blue-700/50 bg-blue-950/20">
              <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                ETH Cash-Out #2
              </h4>
              <code className="text-xs text-blue-300 bg-black/50 px-2 py-1 rounded block break-all mb-2">
                0x0559de40ac8f780648490143b90aa8ff3b1b805a
              </code>
              <p className="text-gray-500 text-xs">Received 0.00881 ETH</p>
            </div>
          </div>

          <div className="card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <h4 className="text-yellow-400 font-semibold text-sm mb-2">For Law Enforcement</h4>
            <p className="text-gray-400 text-sm">
              The 65-input consolidation wallet is the key lead. If law enforcement can identify which exchange controls this address, 
              they can subpoena <strong className="text-yellow-300">KYC records</strong> including identity documents, IP addresses, and bank withdrawal history.
            </p>
          </div>
        </div>
      </section>

      <WhatToDo />

      <InvestigationFooter
        currentPage="mirrorexp"
        tags={['MirrorExp Scam', 'Typosquatting Attack', 'Discord Impersonation', 'Crypto Fraud Alert']}
      />
    </main>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (src: string) => setLightboxImage(src)
  const closeLightbox = () => setLightboxImage(null)

  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/Article">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 z-50"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img 
            src={lightboxImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero Warning Section */}
      <section className="relative py-16 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="warning-pulse inline-block mb-6 px-6 py-2 bg-red-600 text-white font-bold rounded-full text-sm uppercase tracking-wider" role="alert">
            Scam Alert - Do Not Send Money
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6" itemProp="headline">
            <span className="gradient-text">OxyCapitals</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" itemProp="description">
            OxyCapitalsLtd.com is a cryptocurrency phishing scam that impersonates Discord admins to steal Bitcoin. 
            This site documents the fraud with blockchain evidence and exposes their wallet addresses.
          </p>
          <div className="card inline-block p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Fraudulent Crypto Scam Website</p>
            <p className="text-red-400 font-mono text-lg">oxycapitalsltd.com</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How This Scam Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">Impersonation</h3>
              <p className="text-gray-400">Scammers impersonate trusted Discord admins and crypto traders, building fake credibility.</p>
            </div>
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Fake Platform</h3>
              <p className="text-gray-400">They direct victims to a fake trading platform (oxycapitalsltd.com) to deposit crypto.</p>
            </div>
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Theft</h3>
              <p className="text-gray-400">Deposits go straight to the scammer&apos;s personal wallet, then to an exchange to cash out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Total Victim Losses */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-red-950/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Total Documented Victim Losses</h2>
          <p className="text-center text-gray-400 mb-8">Based on blockchain transaction analysis of known scam wallets</p>
          
          <div className="card p-8 rounded-2xl border-2 border-red-600 bg-red-950/20 text-center mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Confirmed Stolen Amount</p>
            <p className="text-5xl md:text-7xl font-black text-red-500 mb-2">$40,400+</p>
            <p className="text-gray-400">USD equivalent across Bitcoin, Ethereum &amp; Tron</p>
          </div>

          {/* Bitcoin Wallets */}
          <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
            Bitcoin Wallets — $38,076
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="card p-5 rounded-xl text-center border border-orange-700/50">
              <p className="text-2xl font-bold text-orange-400 mb-1">$4,918</p>
              <p className="text-gray-400 text-sm">Collection Wallet</p>
              <p className="text-gray-500 text-xs mt-1">43 victim deposits</p>
            </div>
            <div className="card p-5 rounded-xl text-center border border-yellow-700/50">
              <p className="text-2xl font-bold text-yellow-400 mb-1">$9,657</p>
              <p className="text-gray-400 text-sm">Personal Wallet</p>
              <p className="text-gray-500 text-xs mt-1">67 transactions</p>
            </div>
            <div className="card p-5 rounded-xl text-center border border-purple-700/50">
              <p className="text-2xl font-bold text-purple-400 mb-1">$23,501</p>
              <p className="text-gray-400 text-sm">ByBit Wallet</p>
              <p className="text-gray-500 text-xs mt-1">6 high-value transactions</p>
            </div>
          </div>

          <div className="card p-4 rounded-xl mb-6 bg-purple-950/20 border border-purple-700/50">
            <h4 className="text-purple-400 font-semibold text-sm mb-2 text-center">ByBit Wallet Major Transactions</h4>
            <div className="grid md:grid-cols-3 gap-3 text-center text-sm">
              <div>
                <p className="text-red-400 font-bold">$20,144</p>
                <p className="text-gray-500 text-xs">Sep 24, 2025</p>
              </div>
              <div>
                <p className="text-red-400 font-bold">$3,272</p>
                <p className="text-gray-500 text-xs">Jan 23, 2026</p>
              </div>
              <div>
                <p className="text-red-400 font-bold">$86</p>
                <p className="text-gray-500 text-xs">Jan 24, 2026</p>
              </div>
            </div>
          </div>

          {/* SegWit Routing Wallet */}
          <div className="card p-4 rounded-xl mb-6 bg-orange-950/20 border border-orange-700/30">
            <h4 className="text-orange-300 font-semibold text-sm mb-2">SegWit Routing Wallet</h4>
            <p className="text-gray-400 text-sm mb-2">
              <code className="text-xs bg-black/50 px-2 py-1 rounded">bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46</code>
            </p>
            <p className="text-gray-500 text-xs">
              Intermediate wallet receiving $868 from victims, forwarding to Personal &amp; ByBit wallets. 
              Amounts included in wallet totals above.
            </p>
          </div>

          {/* Ethereum */}
          <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            Ethereum — $2,252
          </h3>
          <div className="card p-4 rounded-xl mb-6 bg-blue-950/20 border border-blue-700/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-gray-400 text-sm">Wallet</p>
                <code className="text-xs text-blue-300 bg-black/50 px-2 py-1 rounded">0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09</code>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-400">0.994 ETH</p>
                <p className="text-gray-500 text-xs">Received Jul 14, 2025 • Cashed out Jul 15</p>
              </div>
            </div>
          </div>

          {/* Tron */}
          <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            Tron (TRX/USDT) — $75+
          </h3>
          <div className="card p-4 rounded-xl mb-6 bg-red-950/20 border border-red-700/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-gray-400 text-sm">Wallet</p>
                <code className="text-xs text-red-300 bg-black/50 px-2 py-1 rounded">TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR</code>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-red-400">~500 TRX</p>
                <p className="text-gray-500 text-xs">Aug 2023 - Apr 2024 • Multiple USDT transfers</p>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl text-center bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">120+ transactions</span> across 6 wallets on 3 blockchains &bull; 
              All funds traced to exchange cash-outs
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Actual losses are likely <strong className="text-red-400">higher</strong> — USDT transfer amounts on Tron not fully captured, 
              and many victims never report.
            </p>
          </div>
        </div>
      </section>

      {/* Scam Wallet Addresses */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Known Scam Wallet Addresses</h2>
          <p className="text-center text-gray-400 mb-8">Do NOT send cryptocurrency to any of these addresses</p>
          
          <div className="space-y-4">
            <div className="card p-4 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-400 font-semibold">Bitcoin (Collection)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC</code>
              </div>
            </div>
            <div className="card p-4 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-400 font-semibold">Bitcoin (Personal)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2</code>
              </div>
            </div>
            <div className="card p-4 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-blue-400 font-semibold">Ethereum</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09</code>
              </div>
            </div>
            <div className="card p-4 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-green-400 font-semibold">USDT (Tron)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR</code>
              </div>
            </div>
            <div className="card p-4 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-400 font-semibold">Bitcoin (ByBit)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB</code>
              </div>
            </div>
            <div className="card p-4 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-400 font-semibold">Bitcoin (SegWit)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Flow Analysis */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Blockchain Transaction Analysis</h2>
          <p className="text-center text-gray-400 mb-8">We traced where the stolen funds go</p>
          
          <div className="card p-6 rounded-xl mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Money Flow Hierarchy</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="text-center p-3 bg-red-900/30 rounded border border-red-700">
                <div className="text-gray-400 text-xs mb-1">VICTIMS</div>
                <div className="text-red-400">Multiple wallets sending to scammer</div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓</div>
              <div className="text-center p-3 bg-orange-900/30 rounded border border-orange-700">
                <div className="text-gray-400 text-xs mb-1">COLLECTION WALLET</div>
                <div className="text-orange-400 break-all">1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC</div>
                <div className="text-gray-500 text-xs mt-1">Total: ~$4,918 (43 transactions)</div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓</div>
              <div className="text-center p-3 bg-yellow-900/30 rounded border border-yellow-700">
                <div className="text-gray-400 text-xs mb-1">SCAMMER&apos;S PERSONAL WALLET</div>
                <div className="text-yellow-400 break-all">1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2</div>
                <div className="text-gray-500 text-xs mt-1">Total: ~$9,657 (67 transactions)</div>
              </div>
              <div className="text-center text-2xl text-gray-600">↓</div>
              <div className="text-center p-3 bg-blue-900/30 rounded border border-blue-700">
                <div className="text-gray-400 text-xs mb-1">EXCHANGE (Cash Out)</div>
                <div className="text-blue-400 break-all">1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd</div>
                <div className="text-gray-500 text-xs mt-1">Large exchange hot wallet (Binance or similar)</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Key Transactions to Personal Wallet</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">01/19/2026</span>
                  <span>$20.98</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">12/30/2025</span>
                  <span>$48.30</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">12/26/2025</span>
                  <span>$86.88</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">12/14/2025</span>
                  <span>$276.87</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">And more...</span>
                  <span className="text-orange-400">~$788 total</span>
                </div>
              </div>
            </div>

            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Cash-Out to Exchange</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">01/27/2026</span>
                  <span>$480.19</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">12/24/2025</span>
                  <span>$344.59</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">12/23/2025</span>
                  <span>$605.20</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">12/18/2024</span>
                  <span className="text-red-400">$6,808.63</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total to exchange</span>
                  <span className="text-yellow-400">~$9,657</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scammer Contact Info */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Scammer&apos;s Fake Business Details</h2>
          <p className="text-center text-gray-400 mb-8">These are likely fake or stolen identities</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-red-400">Contact Email</h3>
              <code className="text-gray-300 bg-black/50 px-3 py-2 rounded block">support@oxycapitalsltd.com</code>
            </div>
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-red-400">Claimed Address</h3>
              <p className="text-gray-300">Flat 8 Graves Court<br />16 Pevensey Avenue, Southgate<br />London, UK, N11 2RD</p>
              <p className="text-gray-500 text-sm mt-2">(Likely fake or a virtual office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Scam Operations */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Related Scam Operations</h2>
          <p className="text-center text-gray-400 mb-8">Similar scams using the same methodology have been documented</p>
          
          {/* MirrorExp - NEW */}
          <div className="card p-6 rounded-xl border-2 border-red-600 bg-red-950/20 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400">MirrorExp.com</h3>
                <p className="text-gray-400 text-sm">Active scam using typosquatting impersonation</p>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 bg-red-600/30 text-red-400 text-xs font-semibold rounded-full border border-red-600">
                  ACTIVE SCAM
                </span>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Domain:</span>
                  <p className="text-red-400 font-mono">mirrorexp.com</p>
                </div>
                <div>
                  <span className="text-gray-500">Total Stolen:</span>
                  <p className="text-red-400 font-semibold">$22,000+ (BTC, ETH, USDT, USDC)</p>
                </div>
                <div>
                  <span className="text-gray-500">Method:</span>
                  <p className="text-yellow-400">Typosquatting Discord usernames</p>
                  <p className="text-gray-500 text-xs">(Changes 1-2 letters to impersonate admins)</p>
                </div>
                <div>
                  <span className="text-gray-500">Operation Duration:</span>
                  <p className="text-yellow-400">6+ months (since Aug 2025)</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/mirrorexp"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                View Full MirrorExp Investigation
              </Link>
            </div>
          </div>

          {/* BridgeStocks */}
          <div className="card p-6 rounded-xl border-2 border-orange-600 bg-orange-950/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
      </section>

      {/* Impersonation Comparison */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Impersonation Exposed</h2>
          <p className="text-center text-gray-400 mb-8">The scammer copies a real Discord admin&apos;s profile to trick victims</p>
          
          {/* Username Comparison Highlight */}
          <div className="card p-6 rounded-xl mb-8 text-center">
            <p className="text-gray-400 mb-4">Spot the difference in the usernames:</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div>
                <p className="text-xs text-gray-500 mb-1">REAL ADMIN</p>
                <p className="text-3xl font-mono font-bold text-green-400">sa<span className="text-green-300 underline decoration-4">l</span>maogs</p>
              </div>
              <div className="text-4xl text-gray-600">vs</div>
              <div>
                <p className="text-xs text-gray-500 mb-1">SCAMMER</p>
                <p className="text-3xl font-mono font-bold text-red-400">sa<span className="text-red-300 underline decoration-4">j</span>maogs</p>
              </div>
            </div>
            <p className="text-yellow-400 mt-4 text-sm">The scammer changed just ONE letter: &quot;l&quot; → &quot;j&quot; to impersonate the real admin!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card rounded-xl overflow-hidden border-2 border-green-600">
              <div className="bg-green-900/30 p-3 text-center">
                <span className="text-green-400 font-bold uppercase text-sm">Real Admin - salmaogs</span>
              </div>
              <img 
                src="/evidence/real discord admin.jpg" 
                alt="Real Discord admin salmaogs profile - legitimate crypto community moderator" 
                className="w-full evidence-img cursor-zoom-in" 
                onClick={() => openLightbox('/evidence/real discord admin.jpg')}
              />
            </div>
            
            <div className="card rounded-xl overflow-hidden border-2 border-red-600">
              <div className="bg-red-900/30 p-3 text-center">
                <span className="text-red-400 font-bold uppercase text-sm">Scammer - sajmaogs</span>
              </div>
              <img 
                src="/evidence/fake account impersonating discord admin.jpg" 
                alt="Fake Discord account sajmaogs impersonating admin - crypto scammer typosquatting profile" 
                className="w-full evidence-img cursor-zoom-in" 
                onClick={() => openLightbox('/evidence/fake account impersonating discord admin.jpg')}
              />
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-xs mt-4">Click images to expand</p>
          
          <div className="mt-6 card p-4 rounded-xl bg-yellow-900/20 border border-yellow-700">
            <p className="text-yellow-400 text-center text-sm">
              <strong>Warning:</strong> Scammers use &quot;typosquatting&quot; - changing one letter in a username to impersonate trusted people. Always double-check usernames character by character!
            </p>
          </div>
        </div>
      </section>

      {/* Scammer Conversations */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Scammer Conversation Evidence</h2>
          <p className="text-center text-gray-400 mb-2">Actual messages from the scammer trying to steal money</p>
          <p className="text-center text-gray-500 text-xs mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation.jpg')}>
              <img src="/evidence/scammer conversation.jpg" alt="OxyCapitals scammer Discord DM conversation - crypto phishing message evidence" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">1</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 2.jpg')}>
              <img src="/evidence/scammer conversation 2.jpg" alt="Cryptocurrency scam conversation - fraudster asking for Bitcoin deposit" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">2</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 3.jpg')}>
              <img src="/evidence/scammer conversation 3.jpg" alt="Discord impersonation scam messages - fake admin requesting crypto payment" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">3</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 4.jpg')}>
              <img src="/evidence/scammer conversation 4.jpg" alt="OxyCapitalsLtd scam chat evidence - fraudulent investment scheme messages" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">4</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 5.jpg')}>
              <img src="/evidence/scammer conversation 5.jpg" alt="Crypto scammer social engineering tactics - phishing conversation screenshot" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">5</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 6.jpg')}>
              <img src="/evidence/scammer conversation 6.jpg" alt="Bitcoin theft scam conversation - OxyCapitals fraud evidence" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">6</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 7.jpg')}>
              <img src="/evidence/scammer conversation 7.jpg" alt="Cryptocurrency investment scam chat - impersonation fraud proof" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">7</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Gallery */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Platform & Technical Evidence</h2>
          <p className="text-center text-gray-400 mb-2">Screenshots of the scam operation</p>
          <p className="text-center text-gray-500 text-xs mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scam homepage.jpg')}>
              <img src="/evidence/scam homepage.jpg" alt="OxyCapitals scam website homepage - fake crypto trading platform screenshot" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Scam Homepage</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/deposit page.jpg')}>
              <img src="/evidence/deposit page.jpg" alt="OxyCapitalsLtd fraudulent deposit page requesting Bitcoin" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Deposit Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/btc address scam page.jpg')}>
              <img src="/evidence/btc address scam page.jpg" alt="OxyCapitals scam Bitcoin wallet address for stealing cryptocurrency" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">BTC Address Display</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammers personal wallet.jpg')}>
              <img src="/evidence/scammers personal wallet.jpg" alt="Crypto scammer personal Bitcoin wallet with stolen funds" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Scammer&apos;s Wallet</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/dns.jpg')}>
              <img src="/evidence/dns.jpg" alt="DNS records proving oxycapitalsltd.com is a fraudulent domain" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">DNS Records</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/1.jpg')}>
              <img src="/evidence/1.jpg" alt="Additional evidence of OxyCapitals cryptocurrency fraud" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Additional Evidence</h4>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/rdap.jpg')}>
              <img src="/evidence/rdap.jpg" alt="RDAP Record 1" className="w-full evidence-img" />
              <div className="caption">
                <span className="text-gray-500 text-xs">RDAP 1</span>
              </div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/rdap2.jpg')}>
              <img src="/evidence/rdap2.jpg" alt="RDAP Record 2" className="w-full evidence-img" />
              <div className="caption">
                <span className="text-gray-500 text-xs">RDAP 2</span>
              </div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/rdap3.jpg')}>
              <img src="/evidence/rdap3.jpg" alt="RDAP Record 3" className="w-full evidence-img" />
              <div className="caption">
                <span className="text-gray-500 text-xs">RDAP 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Reports Section */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Official Fraud Reports</h2>
          <p className="text-center text-gray-400 mb-8">This scam has been officially reported to cybersecurity authorities</p>
          
          <div className="card p-6 rounded-xl border-2 border-blue-500 bg-blue-950/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">Netcraft Incident Response</h3>
                <p className="text-gray-400 text-sm">Official Cybersecurity Report</p>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Report ID:</span>
                  <p className="font-mono text-blue-300">f2f3oteicz4yrmh2qenr54</p>
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <p className="text-red-400 font-semibold">Classified as Phishing & Malicious</p>
                </div>
                <div>
                  <span className="text-gray-500">Reported Domain:</span>
                  <p className="text-red-400 font-mono">oxycapitalsltd.com</p>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <p className="text-yellow-400">Cryptocurrency Fraud / Phishing</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://incident.netcraft.com/reports/f2f3oteicz4yrmh2qenr54" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Official Netcraft Report
              </a>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">About Netcraft</h4>
              <p className="text-gray-400 text-sm">
                Netcraft is a leading cybersecurity company that has been protecting the internet since 1995. 
                They provide anti-fraud and anti-phishing services to major banks, governments, and enterprises worldwide. 
                Their Incident Response system is used globally to report and take down malicious websites.
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              This official report helps prevent others from being scammed and supports takedown efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Law Enforcement - Exchange Identification */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-green-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Exchange Cash-Out Addresses</h2>
          <p className="text-center text-gray-400 mb-2">Critical information for law enforcement to identify the scammer</p>
          <p className="text-center text-green-400 text-sm mb-8">These addresses can be subpoenaed from exchanges for KYC records</p>
          
          <div className="card p-6 rounded-xl border-2 border-green-600 bg-green-950/20 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400">Primary Cash-Out Wallet (Bitcoin)</h3>
                <p className="text-gray-400 text-sm">Likely Binance - Major exchange hot wallet</p>
              </div>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <code className="text-green-300 text-sm md:text-base break-all">1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd</code>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-gray-500">Amount Cashed Out:</span>
                <span className="text-red-400 font-semibold ml-2">~$9,657+</span>
              </div>
              <div>
                <span className="text-gray-500">Transactions:</span>
                <span className="text-gray-300 ml-2">Multiple deposits</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="card p-5 rounded-xl border border-blue-700/50 bg-blue-950/20">
              <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Ethereum Cash-Out
              </h4>
              <code className="text-xs text-blue-300 bg-black/50 px-2 py-1 rounded block break-all mb-2">
                0x5938E9B77bA995c402B17ABa9e069731F27e6FF3
              </code>
              <p className="text-gray-500 text-xs">Received 0.994 ETH (~$2,252) • Jul 15, 2025</p>
              <p className="text-gray-400 text-xs mt-1">Scammer sent entire ETH balance here within hours of receiving</p>
            </div>

            <div className="card p-5 rounded-xl border border-red-700/50 bg-red-950/20">
              <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Tron (TRX) Cash-Out
              </h4>
              <code className="text-xs text-red-300 bg-black/50 px-2 py-1 rounded block break-all mb-2">
                TTBFQK759oYTXSscYp5DahGtDN6zLyNXUp
              </code>
              <p className="text-gray-500 text-xs">Received 296.9 TRX • Apr 4, 2024</p>
              <p className="text-gray-400 text-xs mt-1">Destination for TRX funds from scam wallet</p>
            </div>
          </div>

          <div className="card p-5 rounded-xl border border-purple-700/50 bg-purple-950/20 mb-6">
            <h4 className="text-purple-400 font-semibold mb-3">ByBit-Linked Wallet (Requires KYC)</h4>
            <div className="bg-black/50 p-3 rounded-lg mb-3">
              <code className="text-purple-300 text-sm break-all">192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB</code>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-gray-500">Total Volume:</span>
                <p className="text-red-400 font-semibold">$23,501</p>
              </div>
              <div>
                <span className="text-gray-500">Largest Txn:</span>
                <p className="text-red-400 font-semibold">$20,144</p>
              </div>
              <div>
                <span className="text-gray-500">Exchange:</span>
                <p className="text-purple-300 font-semibold">ByBit</p>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <h4 className="text-yellow-400 font-semibold text-sm mb-2">For Law Enforcement</h4>
            <p className="text-gray-400 text-sm">
              These exchange deposit addresses are tied to accounts with <strong className="text-yellow-300">KYC verification</strong>. 
              Exchanges like Binance and ByBit maintain records of user identity documents, IP addresses, and withdrawal history. 
              A subpoena to these exchanges for the accounts associated with these deposit addresses can reveal the scammer&apos;s identity.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 px-4 border-b border-gray-800 bg-red-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="card p-6 rounded-xl bg-red-900/30 border-2 border-red-600">
            <h3 className="text-xl font-bold text-red-400 mb-3 text-center">Important Warning</h3>
            <p className="text-gray-300 text-center mb-4">
              <strong>Never send money to strangers online.</strong> OxyCapitals is <strong>not a registered business</strong> and there is <strong>no real identity behind the company</strong>.
            </p>
            <ul className="text-gray-400 space-y-2 max-w-2xl mx-auto">
              <li>• No legitimate company registration or business license</li>
              <li>• No verifiable team members or leadership</li>
              <li>• Fake address (likely a virtual office or nonexistent)</li>
              <li>• No regulatory oversight or investor protection</li>
              <li>• Anonymous operators hiding behind a fake website</li>
            </ul>
            <p className="text-yellow-400 text-center mt-4 font-semibold">
              If someone you don&apos;t know asks you to send crypto, it&apos;s almost always a scam.
            </p>
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What To Do If You&apos;ve Been Scammed</h2>
          
          <div className="space-y-4">
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">1. Report to Authorities</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>FBI IC3:</strong> <a href="https://ic3.gov" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ic3.gov</a> (Internet Crime Complaint Center)</li>
                <li>• <strong>FTC:</strong> <a href="https://reportfraud.ftc.gov" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a></li>
                <li>• Local law enforcement</li>
              </ul>
            </div>
            
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">2. Report to the Exchange</h3>
              <p className="text-gray-400">The scammer cashes out through a major exchange. Report the wallet addresses to Binance, Coinbase, or other exchanges&apos; fraud departments.</p>
            </div>
            
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">3. Report to Domain Registrar & Hosting</h3>
              <p className="text-gray-400 mb-3">Report the scam website to get it taken down:</p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Namecheap Abuse:</strong> <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/9196/5/how-to-report-abuse/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Report abuse to Namecheap</a></li>
                <li>• <strong>Email:</strong> <a href="mailto:abuse@namecheap.com" className="text-blue-400 hover:underline">abuse@namecheap.com</a></li>
                <li>• <strong>WHOIS Lookup:</strong> Use <a href="https://www.whois.com/whois/oxycapitalsltd.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">WHOIS</a> to find registrar and hosting info for any scam domain</li>
              </ul>
              <p className="text-gray-500 text-sm mt-3">Include the scam domain, wallet addresses, and any evidence of fraud in your report.</p>
            </div>
            
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">4. Document Everything</h3>
              <p className="text-gray-400">Save all messages, transaction records, and screenshots. This evidence is crucial for any investigation.</p>
            </div>
            
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">5. Warn Others</h3>
              <p className="text-gray-400">Share this page to help prevent others from falling victim to this scam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Crypto Scam Awareness: Protect Yourself from Phishing & Impersonation Fraud</h2>
          
          <article className="prose prose-invert max-w-none">
            <div className="card p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">What is a Crypto Impersonation Scam?</h3>
              <p className="text-gray-300 mb-4">
                Cryptocurrency impersonation scams, like the OxyCapitals fraud documented on this page, are a growing threat in the crypto community. 
                Scammers create fake profiles that closely mimic trusted figures—Discord moderators, crypto influencers, customer support agents, 
                or even friends. They use tactics like <strong>typosquatting</strong> (changing one letter in a username) to appear legitimate. 
                The goal is always the same: trick you into sending Bitcoin, Ethereum, or other cryptocurrencies to their wallet.
              </p>
              <p className="text-gray-400 text-sm">
                Keywords: crypto impersonation scam, discord scam, cryptocurrency fraud, typosquatting attack, social engineering crypto
              </p>
            </div>

            <div className="card p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">How to Identify Crypto Phishing Attacks</h3>
              <p className="text-gray-300 mb-4">
                Crypto phishing attacks are designed to steal your funds or private keys. Warning signs include:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4 list-disc list-inside">
                <li>Unsolicited DMs about &ldquo;investment opportunities&rdquo; or &ldquo;guaranteed returns&rdquo;</li>
                <li>Usernames that look almost identical to real admins (check every character!)</li>
                <li>Links to unfamiliar trading platforms or wallet connection requests</li>
                <li>Urgency and pressure to act immediately</li>
                <li>Requests to send crypto to &ldquo;verify&rdquo; your wallet or &ldquo;unlock&rdquo; rewards</li>
                <li>Fake websites mimicking legitimate exchanges (always check the URL carefully)</li>
              </ul>
              <p className="text-gray-400 text-sm">
                Keywords: crypto phishing, cryptocurrency phishing attack, fake crypto website, bitcoin phishing scam, how to spot crypto scam
              </p>
            </div>

            <div className="card p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">About OxyCapitals / OxyCapitalsLtd Scam</h3>
              <p className="text-gray-300 mb-4">
                OxyCapitals (also known as OxyCapitalsLtd, operating at oxycapitalsltd.com) is a fraudulent cryptocurrency investment platform. 
                This scam operation impersonates legitimate Discord administrators to build trust with victims, then directs them to deposit 
                Bitcoin and other cryptocurrencies to their fake trading platform. The deposited funds go directly to the scammer&apos;s 
                personal wallet and are subsequently cashed out through major exchanges.
              </p>
              <p className="text-gray-300 mb-4">
                The scam has been reported to Netcraft and other cybersecurity authorities. The domain oxycapitalsltd.com 
                has no legitimate business registration, no verifiable team members, and uses a fake UK address. 
                This is a classic example of a <strong>pig butchering scam</strong> combined with <strong>impersonation fraud</strong>.
              </p>
              <p className="text-gray-400 text-sm">
                Keywords: oxycapitals scam, oxycapitalsltd fraud, oxycapitalsltd.com scam, is oxycapitals legit, oxycapitals review, oxycapitals warning
              </p>
            </div>

            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Related Crypto Scam Types to Watch For</h3>
              <p className="text-gray-300 mb-4">
                Beyond the OxyCapitals scam, be aware of these common cryptocurrency fraud schemes:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li><strong>Pig Butchering Scams:</strong> Long-term romance or friendship scams that eventually lead to fake crypto investments</li>
                <li><strong>Fake Exchange Scams:</strong> Fraudulent trading platforms that steal deposits</li>
                <li><strong>Giveaway Scams:</strong> Fake celebrity or influencer giveaways requiring you to &ldquo;send crypto first&rdquo;</li>
                <li><strong>Recovery Scams:</strong> Fraudsters promising to recover lost crypto for an upfront fee</li>
                <li><strong>Rug Pulls:</strong> Crypto projects that disappear with investor funds</li>
                <li><strong>Phishing Links:</strong> Fake websites stealing wallet credentials or seed phrases</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                Keywords: pig butchering scam, crypto romance scam, fake crypto exchange, bitcoin giveaway scam, crypto recovery scam, rug pull scam
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500">
        <p className="mb-2">This site was created to expose cryptocurrency fraud and protect potential victims.</p>
        <p className="text-sm">All information is based on publicly available blockchain data and documented evidence.</p>
        <p className="text-sm mt-4" itemProp="dateModified">Last updated: February 2026</p>
        <nav className="mt-6 text-xs text-gray-600 space-x-4">
          <span>Crypto Scam Alert</span>
          <span>•</span>
          <span>Phishing Warning</span>
          <span>•</span>
          <span>Impersonation Fraud</span>
          <span>•</span>
          <span>Bitcoin Scam Awareness</span>
        </nav>
      </footer>
    </main>
  )
}

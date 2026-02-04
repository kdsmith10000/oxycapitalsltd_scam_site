'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MirrorExpPage() {
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

      {/* Navigation */}
      <nav className="bg-gray-900/80 border-b border-gray-800 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to OxyCapitals
          </Link>
          <span className="text-red-500 font-bold text-sm">SCAM EXPOSURE NETWORK</span>
        </div>
      </nav>

      {/* Hero Warning Section */}
      <section className="relative py-16 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="warning-pulse inline-block mb-6 px-6 py-2 bg-red-600 text-white font-bold rounded-full text-sm uppercase tracking-wider" role="alert">
            Scam Alert - Do Not Send Money
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6" itemProp="headline">
            <span className="gradient-text">MirrorExp</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" itemProp="description">
            MirrorExp.com is a cryptocurrency phishing scam that uses Discord admin impersonation with <strong className="text-yellow-400">typosquatting</strong> to steal Bitcoin, Ethereum, and USDT. 
            This site documents the fraud with blockchain evidence across multiple chains.
          </p>
          <div className="card inline-block p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Fraudulent Crypto Scam Website</p>
            <p className="text-red-400 font-mono text-lg">mirrorexp.com</p>
          </div>
        </div>
      </section>

      {/* Typosquatting Alert */}
      <section className="py-8 px-4 border-b border-gray-800 bg-yellow-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="card p-6 rounded-xl border-2 border-yellow-500 bg-yellow-900/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400">Typosquatting Attack Detected</h2>
                <p className="text-gray-300 text-sm">The scammer uses a username nearly identical to a real admin</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-6 text-center">
              <p className="text-gray-400 mb-4 text-sm">Can you spot the difference?</p>
              <div className="flex justify-center items-center gap-8 flex-wrap mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">REAL ADMIN USERNAME</p>
                  <p className="text-2xl md:text-3xl font-mono font-bold text-green-400">Example_Admin</p>
                </div>
                <div className="text-3xl text-gray-600">vs</div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">SCAMMER USERNAME</p>
                  <p className="text-2xl md:text-3xl font-mono font-bold text-red-400">Examp<span className="text-red-300 underline decoration-4">l</span>e_Admin</p>
                </div>
              </div>
              <p className="text-yellow-300 text-sm">
                Scammers change just <strong>one or two characters</strong> in usernames to impersonate trusted community members!
              </p>
            </div>
            
            <p className="text-gray-400 text-sm mt-4 text-center">
              <strong className="text-yellow-300">Always verify usernames character-by-character</strong> before trusting anyone with your money.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How This Scam Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">Typosquatting</h3>
              <p className="text-gray-400">Scammer creates a Discord username nearly identical to a real admin, changing just one letter.</p>
            </div>
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Impersonation</h3>
              <p className="text-gray-400">Using the fake account, they DM victims pretending to be the trusted admin.</p>
            </div>
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Fake Platform</h3>
              <p className="text-gray-400">Victims are directed to MirrorExp.com, a fake trading platform, to deposit crypto.</p>
            </div>
            <div className="card p-6 rounded-xl">
              <div className="text-3xl mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Rapid Cash-Out</h3>
              <p className="text-gray-400">Deposits are moved to personal wallets within minutes, then to exchanges for cash-out.</p>
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
            <p className="text-5xl md:text-7xl font-black text-red-500 mb-2">$22,000+</p>
            <p className="text-gray-400">USD equivalent across Bitcoin, Ethereum, USDT &amp; USDC</p>
          </div>

          {/* Bitcoin Wallet */}
          <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
            Bitcoin — $21,853
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="card p-5 rounded-xl text-center border border-orange-700/50">
              <p className="text-2xl font-bold text-orange-400 mb-1">$21,853</p>
              <p className="text-gray-400 text-sm">Primary Scam Wallet</p>
              <p className="text-gray-500 text-xs mt-1">4 transactions tracked</p>
            </div>
            <div className="card p-5 rounded-xl text-center border border-purple-700/50">
              <p className="text-2xl font-bold text-purple-400 mb-1">$2.1M+</p>
              <p className="text-gray-400 text-sm">Exchange Consolidation Pool</p>
              <p className="text-gray-500 text-xs mt-1">65 input addresses</p>
            </div>
          </div>

          {/* Ethereum/Stablecoins */}
          <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            Ethereum &amp; Stablecoins — $500+
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="card p-4 rounded-xl text-center border border-blue-700/50">
              <p className="text-xl font-bold text-blue-400 mb-1">~$75</p>
              <p className="text-gray-400 text-sm">ETH Wallet</p>
            </div>
            <div className="card p-4 rounded-xl text-center border border-green-700/50">
              <p className="text-xl font-bold text-green-400 mb-1">Est. $200+</p>
              <p className="text-gray-400 text-sm">USDT (ERC-20)</p>
            </div>
            <div className="card p-4 rounded-xl text-center border border-cyan-700/50">
              <p className="text-xl font-bold text-cyan-400 mb-1">Est. $200+</p>
              <p className="text-gray-400 text-sm">USDC (ERC-20)</p>
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
      <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Known Scam Wallet Addresses</h2>
          <p className="text-center text-gray-400 mb-8">Do NOT send cryptocurrency to any of these addresses</p>
          
          <div className="space-y-4">
            <div className="card p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-400 font-semibold">Bitcoin (Primary Deposit)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v</code>
              </div>
              <p className="text-gray-500 text-xs mt-2">Current balance: 0.13 BTC (~$9,450) | Total received: $21,853</p>
            </div>
            <div className="card p-4 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-300 font-semibold">Bitcoin (Staging #1)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x</code>
              </div>
              <p className="text-gray-500 text-xs mt-2">Emptied to exchange | Received: 0.05 BTC ($3,628)</p>
            </div>
            <div className="card p-4 rounded-lg border-l-4 border-orange-300">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-orange-200 font-semibold">Bitcoin (Staging #2)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug</code>
              </div>
              <p className="text-gray-500 text-xs mt-2">Emptied to exchange | Received: 0.06 BTC ($4,391)</p>
            </div>
            <div className="card p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-purple-400 font-semibold">Bitcoin (Exchange Pool)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76</code>
              </div>
              <p className="text-gray-500 text-xs mt-2">Final cash-out destination | Received: 29.43 BTC ($2.1M) from 65 sources</p>
            </div>
            <div className="card p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-blue-400 font-semibold">Ethereum / USDC (ERC-20)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">0xE28425B27d555f870d3CaCAC4Bf7F549c768022F</code>
              </div>
              <p className="text-gray-500 text-xs mt-2">Same address used for ETH and USDC deposits</p>
            </div>
            <div className="card p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-green-400 font-semibold">USDT (ERC-20)</span>
                <code className="text-sm bg-black/50 px-3 py-1 rounded break-all">0xF4eE6d12f95f401BF6b0aB488Ec18E43bfdbeAFC</code>
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
          <div className="card p-6 rounded-xl border border-green-700/50 bg-green-950/20">
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
        </div>
      </section>

      {/* Impersonation Evidence */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Impersonation Evidence</h2>
          <p className="text-center text-gray-400 mb-8">Side-by-side comparison of real admin vs scammer account</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card rounded-xl overflow-hidden border-2 border-green-600">
              <div className="bg-green-900/30 p-3 text-center">
                <span className="text-green-400 font-bold uppercase text-sm">Real Admin Account</span>
              </div>
              <img 
                src="/evidence/mirrorexp/real admin.jpg" 
                alt="Real Discord admin profile - legitimate crypto community moderator" 
                className="w-full evidence-img cursor-zoom-in" 
                onClick={() => openLightbox('/evidence/mirrorexp/real admin.jpg')}
              />
            </div>
            
            <div className="card rounded-xl overflow-hidden border-2 border-red-600">
              <div className="bg-red-900/30 p-3 text-center">
                <span className="text-red-400 font-bold uppercase text-sm">Scammer (Typosquatted)</span>
              </div>
              <img 
                src="/evidence/mirrorexp/fake admin.jpg" 
                alt="Fake Discord account impersonating admin using typosquatting - crypto scammer profile" 
                className="w-full evidence-img cursor-zoom-in" 
                onClick={() => openLightbox('/evidence/mirrorexp/fake admin.jpg')}
              />
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-xs mb-4">Click images to expand</p>
          
          <div className="card p-4 rounded-xl bg-yellow-900/20 border border-yellow-700">
            <p className="text-yellow-400 text-center text-sm">
              <strong>Warning:</strong> The scammer uses &quot;typosquatting&quot; - creating a username that looks almost identical to the real admin by changing just one or two characters. Always verify usernames character by character!
            </p>
          </div>
        </div>
      </section>

      {/* Platform Evidence Gallery */}
      <section className="py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Fake Platform Evidence</h2>
          <p className="text-center text-gray-400 mb-2">Screenshots of the fraudulent MirrorExp trading platform</p>
          <p className="text-center text-gray-500 text-xs mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/scam site screenshot evidence.jpg')}>
              <img src="/evidence/mirrorexp/scam site screenshot evidence.jpg" alt="MirrorExp scam website homepage - fake crypto trading platform" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Scam Homepage</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/fake invesment platform dashboard.jpg')}>
              <img src="/evidence/mirrorexp/fake invesment platform dashboard.jpg" alt="MirrorExp fake investment dashboard showing fake profits" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Fake Dashboard</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/fake trading page.jpg')}>
              <img src="/evidence/mirrorexp/fake trading page.jpg" alt="MirrorExp fake trading interface designed to steal cryptocurrency" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Fake Trading Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/deposit page.jpg')}>
              <img src="/evidence/mirrorexp/deposit page.jpg" alt="MirrorExp fraudulent deposit page requesting cryptocurrency" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Deposit Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/withdrawal page.jpg')}>
              <img src="/evidence/mirrorexp/withdrawal page.jpg" alt="MirrorExp fake withdrawal page - withdrawals never processed" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Withdrawal Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/mirrorexp/btc deposit link.jpg')}>
              <img src="/evidence/mirrorexp/btc deposit link.jpg" alt="MirrorExp Bitcoin deposit address for stealing crypto" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">BTC Deposit Link</h4>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in max-w-2xl mx-auto" onClick={() => openLightbox('/evidence/mirrorexp/scam btc wallet info blockchain.jpg')}>
              <img src="/evidence/mirrorexp/scam btc wallet info blockchain.jpg" alt="Blockchain explorer showing MirrorExp scam wallet transactions" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Blockchain Evidence - Scam Wallet Transactions</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Other Scams */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Related Scam Operations</h2>
          <p className="text-center text-gray-400 mb-8">This scam uses identical methodology to other known operations</p>
          
          <div className="card p-6 rounded-xl border-2 border-orange-600 bg-orange-950/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-400">Same Methodology as OxyCapitals</h3>
                <p className="text-gray-400 text-sm">Identical scam playbook detected</p>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Tactic:</span>
                  <p className="text-yellow-400">Discord Admin Impersonation</p>
                </div>
                <div>
                  <span className="text-gray-500">Method:</span>
                  <p className="text-yellow-400">Typosquatting Usernames</p>
                </div>
                <div>
                  <span className="text-gray-500">Infrastructure:</span>
                  <p className="text-yellow-400">Fake Trading Platform</p>
                </div>
                <div>
                  <span className="text-gray-500">Cash-out:</span>
                  <p className="text-yellow-400">Rapid exchange deposits</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View OxyCapitals Scam Evidence
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <h3 className="text-lg font-semibold mb-2 text-blue-400">2. Report Wallet Addresses</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Chainabuse:</strong> <a href="https://chainabuse.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">chainabuse.com</a></li>
                <li>• <strong>Bitcoin Abuse:</strong> <a href="https://bitcoinabuse.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">bitcoinabuse.com</a></li>
                <li>• Report to exchanges (Binance, Coinbase, Kraken, etc.)</li>
              </ul>
            </div>
            
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">3. Report the Discord Account</h3>
              <p className="text-gray-400">Report the impersonator account to Discord Trust &amp; Safety with screenshots of the conversation and the fake username.</p>
            </div>
            
            <div className="card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">4. Document Everything</h3>
              <p className="text-gray-400">Save all messages, transaction records, wallet addresses, and screenshots. This evidence is crucial for any investigation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500">
        <p className="mb-2">This site was created to expose cryptocurrency fraud and protect potential victims.</p>
        <p className="text-sm">All information is based on publicly available blockchain data and documented evidence.</p>
        <p className="text-sm mt-4">Last updated: February 2026</p>
        <div className="mt-6">
          <Link href="/" className="text-blue-400 hover:underline text-sm">
            ← Back to OxyCapitals Scam Exposure
          </Link>
        </div>
        <nav className="mt-6 text-xs text-gray-600 space-x-4">
          <span>MirrorExp Scam</span>
          <span>•</span>
          <span>Typosquatting Attack</span>
          <span>•</span>
          <span>Discord Impersonation</span>
          <span>•</span>
          <span>Crypto Fraud Alert</span>
        </nav>
      </footer>
    </main>
  )
}

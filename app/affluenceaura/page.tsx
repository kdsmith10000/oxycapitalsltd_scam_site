'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lightbox from '../components/Lightbox'
import InvestigationNav from '../components/InvestigationNav'
import WhatToDo from '../components/WhatToDo'
import RelatedScams from '../components/RelatedScams'
import InvestigationFooter from '../components/InvestigationFooter'

export default function AffluenceAuraPage() {
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
      <InvestigationNav totalLoss="$114,800+" totalLossShort="$114.8K+" />

      {/* Hero Warning Section */}
      <section className="relative py-10 sm:py-16 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex gap-2 mb-4 sm:mb-6">
            <span className="warning-pulse px-4 sm:px-6 py-2 bg-red-600 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider" role="alert">
              Scam Alert
            </span>
            <span className="px-4 sm:px-6 py-2 bg-gray-700 text-gray-300 font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider">
              Abandoned
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6" itemProp="headline">
            <span className="gradient-text">AffluenceAura</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2" itemProp="description">
            AffluenceAura.com is a fake cryptocurrency investment platform with scam wallet addresses on Bitcoin, Ethereum, and BNB. 
            The site shares the <strong className="text-yellow-400">same V12Hosting infrastructure</strong> as the{' '}
            <Link href="/everrextrade" className="text-yellow-400 hover:underline">EverrexTrade scam</Link>. 
            No deposits were received — this scam appears to have been <strong className="text-yellow-400">abandoned before gaining victims</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="card inline-block p-3 sm:p-4 rounded-lg">
              <p className="text-gray-400 text-xs sm:text-sm">Fraudulent Investment Platform</p>
              <p className="text-red-400 font-mono text-base sm:text-lg break-all">affluenceaura.com</p>
            </div>
            <div className="card inline-block p-3 sm:p-4 rounded-lg">
              <p className="text-gray-400 text-xs sm:text-sm">Total Money Stolen</p>
              <p className="text-green-400 font-mono text-base sm:text-lg">$0.00 (abandoned)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="py-6 sm:py-8 px-4 border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-6 rounded-xl border-2 border-gray-500 bg-gray-800/30">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-300">Abandoned Scam — Zero Victims</h2>
                <p className="text-gray-400 text-xs sm:text-sm">All wallet addresses have zero transactions and zero balance</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-xs">BTC Wallet</p>
                  <p className="text-green-400 font-bold">$0 / 0 txns</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">ETH Wallet</p>
                  <p className="text-green-400 font-bold">$0 / 0 txns</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">BNB Wallet</p>
                  <p className="text-green-400 font-bold">$0 / 0 txns</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Tezos Wallet</p>
                  <p className="text-green-400 font-bold">$0 / 0 txns</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center">
              This scam was discovered through URL pattern analysis before it could attract victims. 
              We document it to <strong className="text-gray-200">blacklist the wallet addresses</strong> and connect it to the broader scam network.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Connection */}
      <section className="py-6 sm:py-8 px-4 border-b border-gray-800 bg-purple-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-6 rounded-xl border-2 border-purple-500 bg-purple-900/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-purple-400">Shared Infrastructure Detected</h2>
                <p className="text-gray-300 text-xs sm:text-sm">Same hosting provider as the EverrexTrade scam</p>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-yellow-900/20 rounded border border-yellow-700/50">
                  <p className="text-gray-500 text-xs mb-1">EverrexTrade Nameservers</p>
                  <p className="text-yellow-400 font-mono text-sm">ns1.v12hosting.com</p>
                  <p className="text-yellow-400 font-mono text-sm">ns2.v12hosting.com</p>
                </div>
                <div className="p-3 bg-teal-900/20 rounded border border-teal-700/50">
                  <p className="text-gray-500 text-xs mb-1">AffluenceAura Nameservers</p>
                  <p className="text-teal-400 font-mono text-sm">ns1.v12hosting.com</p>
                  <p className="text-teal-400 font-mono text-sm">ns2.v12hosting.com</p>
                </div>
              </div>
              <p className="text-center text-purple-300 text-sm mt-4 font-semibold">
                Identical V12Hosting infrastructure — likely same operator or scam kit
              </p>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm mt-4 text-center">
              Both scam sites use the exact same nameservers, suggesting they were created by the same operator or sourced from the same scam-as-a-service kit. 
              See the <Link href="/everrextrade" className="text-yellow-400 hover:underline">EverrexTrade investigation</Link> for the connected scam.
            </p>
          </div>
        </div>
      </section>

      {/* Fake Platform Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Fake Platform Evidence</h2>
          <p className="text-center text-gray-400 mb-2 text-sm sm:text-base">Screenshots of the fraudulent AffluenceAura website</p>
          <p className="text-center text-gray-500 text-xs mb-6 sm:mb-8">Click any image to expand</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/affluenceaura/affluenceapp homepage.jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/affluenceaura/affluenceapp homepage.jpg')}>
              <img src="/evidence/affluenceaura/affluenceapp homepage.jpg" alt="AffluenceAura fake investment platform homepage showing crypto tickers and investment pitch" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-red-400 text-sm">Fake Investment Homepage</h4>
                <p className="text-gray-500 text-xs">&quot;INVEST WITH CONFIDENCE. SECURE WITH INTELLIGENCE.&quot; — generic scam pitch with crypto ticker</p>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/affluenceaura/whatsapp affluence number .jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/affluenceaura/whatsapp affluence number .jpg')}>
              <img src="/evidence/affluenceaura/whatsapp affluence number .jpg" alt="AffluenceAura WhatsApp contact number +1 406-330-0697" className="w-full evidence-img" loading="lazy" />
              <div className="caption p-3">
                <h4 className="font-semibold text-red-400 text-sm">WhatsApp Contact Number</h4>
                <p className="text-gray-500 text-xs">+1 406-330-0697 (Montana area code) — embedded in the scam site</p>
              </div>
            </div>
          </div>

          {/* Platform Red Flags */}
          <div className="mt-6 card p-5 rounded-xl bg-yellow-950/20 border border-yellow-700/50">
            <h4 className="text-yellow-400 font-semibold text-sm mb-3">Platform Red Flags</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Not a registered business — no company information anywhere</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">WHOIS fully redacted — registrant identity hidden</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Same V12Hosting as confirmed EverrexTrade scam</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Uses WhatsApp for &quot;support&quot; — no legitimate broker does this</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">No regulatory registration or compliance information</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Generic template site with stock photos and buzzwords</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">Claims to be &quot;POWERING THE ELITE ECONOMY&quot; — meaningless slogan</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300">All deposit wallets have zero activity — abandoned operation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Wallet Addresses */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Known Scam Wallet Addresses</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">All wallets verified as zero balance, zero transactions — blacklisted for future monitoring</p>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-orange-400 font-semibold text-sm sm:text-base">Bitcoin (BTC)</span>
                <div>
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">bc1ql6w87cknrxf7qn5x5rhejw8tufche4rykgqmfx</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Balance: <span className="text-green-400 font-semibold">0 BTC ($0.00)</span> | 0 transactions | Bech32 (P2WPKH)</p>
            </div>

            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-blue-400 font-semibold text-sm sm:text-base">Ethereum / BNB (shared address)</span>
                <div>
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">0xB6C8EE0e6814d7016cF8afeA89942CDE382AC87a</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Balance: <span className="text-green-400 font-semibold">0 ETH / 0 BNB ($0.00)</span> | 0 transactions on both chains</p>
            </div>

            <div className="card p-3 sm:p-4 rounded-lg border-l-4 border-teal-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-teal-400 font-semibold text-sm sm:text-base">Tezos (XTZ)</span>
                <div>
                  <code className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded break-all">TZB2iyLWCyiQXa7K8GAMs12XGR12FkqRzL</code>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">Balance: <span className="text-green-400 font-semibold">Not found on Tezos explorer</span> | Address format unverified</p>
            </div>
          </div>

          <div className="mt-6 card p-4 rounded-xl bg-green-950/20 border border-green-700/50 text-center">
            <p className="text-green-400 text-sm">
              <strong>Good news:</strong> No victims lost money to this scam. All wallets have zero activity. 
              These addresses are now documented to prevent future theft if the scam is revived.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Evidence */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-red-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">WhatsApp Contact Evidence</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">The scam site embeds a WhatsApp contact button for &quot;support&quot;</p>
          
          <div className="card p-5 sm:p-6 rounded-xl border-2 border-red-500 bg-red-950/20">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-4">Scam WhatsApp Number</h3>
                <div className="bg-black/40 rounded-lg p-4 mb-4">
                  <p className="text-gray-500 text-xs mb-1">Phone Number:</p>
                  <p className="text-red-400 font-mono text-xl font-bold">+1 406-330-0697</p>
                  <p className="text-gray-500 text-xs mt-2">Area code 406 = Montana, United States</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">!</span>
                    <span className="text-gray-300"><strong className="text-red-300">No legitimate broker</strong> uses WhatsApp as their primary contact</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">!</span>
                    <span className="text-gray-300">Likely a <strong className="text-red-300">VoIP or burner number</strong> — easily disposable</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">!</span>
                    <span className="text-gray-300">Can be reported to WhatsApp as fraudulent</span>
                  </div>
                </div>
              </div>
              <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/affluenceaura/whatsapp affluence number .jpg')} role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/evidence/affluenceaura/whatsapp affluence number .jpg')}>
                <img src="/evidence/affluenceaura/whatsapp affluence number .jpg" alt="WhatsApp link to AffluenceAura scam number +1 406-330-0697" className="w-full evidence-img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain / WHOIS Analysis */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-gradient-to-b from-blue-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Domain &amp; WHOIS Analysis</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Technical analysis of the affluenceaura.com domain</p>
          
          <div className="card p-5 rounded-xl border border-blue-700/50">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Domain Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Domain:</span>
                  <span className="text-red-400 font-mono">affluenceaura.com</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Registered:</span>
                  <span className="text-gray-300">April 5, 2025</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Expires:</span>
                  <span className="text-yellow-400">April 5, 2026</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Last Updated:</span>
                  <span className="text-gray-300">Jan 26, 2026</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Registrar:</span>
                  <span className="text-gray-300">Cosmotown, Inc.</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Registrant:</span>
                  <span className="text-red-400">Fully Redacted</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">Nameservers:</span>
                  <span className="text-purple-400 font-mono text-xs">ns1.v12hosting.com<br />ns2.v12hosting.com</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-500">DNSSEC:</span>
                  <span className="text-red-400">Unsigned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Domain Red Flags */}
          <div className="mt-6 card p-5 rounded-xl bg-red-950/20 border border-red-700/50">
            <h4 className="text-red-400 font-semibold text-sm mb-3">Domain Red Flags</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">WHOIS fully redacted</strong> — owner identity completely hidden</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">V12Hosting</strong> — same provider as EverrexTrade scam</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">Less than 1 year old</strong> — registered April 2025</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-red-300">Cosmotown registrar</strong> — less common registrar, harder to trace</span>
              </div>
            </div>
          </div>

          {/* Reporting Info */}
          <div className="mt-6 card p-4 rounded-xl bg-green-950/20 border border-green-700/50">
            <h4 className="text-green-400 font-semibold text-sm mb-2">Report This Domain</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Registrar Abuse Contact:</p>
                <p className="text-green-300">abuse@cosmotown.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Registrar Abuse Phone:</p>
                <p className="text-green-300">+1 650-319-8930</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Netcraft Report */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Official Fraud Report</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">This scam has been reported to Netcraft for takedown</p>
          
          <div className="card p-6 rounded-xl border-2 border-blue-500 bg-blue-950/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">Netcraft Report Submitted</h3>
                <p className="text-gray-400 text-sm">Flagged for phishing &amp; investment fraud</p>
              </div>
            </div>
            
            <a 
              href="https://report.netcraft.com/submission/LHdmFYiYzCLauVpEUX4Lh2EvpsrhG0kG?tab=urls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Netcraft Report
            </a>
          </div>
        </div>
      </section>

      <RelatedScams exclude="affluenceaura" />

      <WhatToDo extraSteps={
        <div className="card p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">3. Report the WhatsApp Number</h3>
          <p className="text-gray-400 text-sm">
            Report the scam WhatsApp number <strong className="text-blue-300">+1 406-330-0697</strong> directly in the WhatsApp app 
            (open chat → tap contact info → Report). Also report to the registrar at <strong className="text-blue-300">abuse@cosmotown.com</strong>.
          </p>
        </div>
      } />

      <InvestigationFooter
        currentPage="affluenceaura"
        tags={['AffluenceAura Scam', 'Abandoned Scam', 'Fake Investment Platform', 'V12Hosting Scam Network', 'WhatsApp Fraud']}
      />
    </main>
  )
}

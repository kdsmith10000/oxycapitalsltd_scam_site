'use client'

import { useState } from 'react'

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (src: string) => setLightboxImage(src)
  const closeLightbox = () => setLightboxImage(null)

  return (
    <main className="min-h-screen">
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
          <div className="warning-pulse inline-block mb-6 px-6 py-2 bg-red-600 text-white font-bold rounded-full text-sm uppercase tracking-wider">
            Scam Alert - Do Not Send Money
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">OxyCapitals</span> is a{' '}
            <span className="text-red-500">SCAM</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            This site impersonates legitimate cryptocurrency traders to steal your money. 
            We have traced their Bitcoin transactions and exposed the fraud.
          </p>
          <div className="card inline-block p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Scam Website</p>
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
                alt="Real Discord Admin - salmaogs" 
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
                alt="Fake Discord Account - sajmaogs" 
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
              <img src="/evidence/scammer conversation.jpg" alt="Scammer Conversation 1" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">1</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 2.jpg')}>
              <img src="/evidence/scammer conversation 2.jpg" alt="Scammer Conversation 2" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">2</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 3.jpg')}>
              <img src="/evidence/scammer conversation 3.jpg" alt="Scammer Conversation 3" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">3</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 4.jpg')}>
              <img src="/evidence/scammer conversation 4.jpg" alt="Scammer Conversation 4" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">4</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 5.jpg')}>
              <img src="/evidence/scammer conversation 5.jpg" alt="Scammer Conversation 5" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">5</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 6.jpg')}>
              <img src="/evidence/scammer conversation 6.jpg" alt="Scammer Conversation 6" className="w-full evidence-img" />
              <div className="caption"><span className="text-gray-500 text-xs">6</span></div>
            </div>
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammer conversation 7.jpg')}>
              <img src="/evidence/scammer conversation 7.jpg" alt="Scammer Conversation 7" className="w-full evidence-img" />
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
              <img src="/evidence/scam homepage.jpg" alt="Scam Homepage" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Scam Homepage</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/deposit page.jpg')}>
              <img src="/evidence/deposit page.jpg" alt="Deposit Page" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Deposit Page</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/btc address scam page.jpg')}>
              <img src="/evidence/btc address scam page.jpg" alt="BTC Address Page" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">BTC Address Display</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/scammers personal wallet.jpg')}>
              <img src="/evidence/scammers personal wallet.jpg" alt="Scammer's Wallet" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">Scammer&apos;s Wallet</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/dns.jpg')}>
              <img src="/evidence/dns.jpg" alt="DNS Records" className="w-full evidence-img" />
              <div className="caption">
                <h4 className="font-semibold text-red-400 text-sm">DNS Records</h4>
              </div>
            </div>
            
            <div className="card evidence-card rounded-lg overflow-hidden cursor-zoom-in" onClick={() => openLightbox('/evidence/1.jpg')}>
              <img src="/evidence/1.jpg" alt="Additional Evidence" className="w-full evidence-img" />
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

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500">
        <p className="mb-2">This site was created to expose cryptocurrency fraud and protect potential victims.</p>
        <p className="text-sm">All information is based on publicly available blockchain data and documented evidence.</p>
        <p className="text-sm mt-4">Last updated: February 2026</p>
      </footer>
    </main>
  )
}

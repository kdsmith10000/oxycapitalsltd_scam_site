import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/Organization" role="main">
      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-r from-red-950 to-purple-950 border-b border-red-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 grid grid-cols-3 items-center gap-2">
          {/* Left - Site Name */}
          <span className="text-red-400 font-bold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap">Dirty Crypto</span>
          
          {/* Center - Stats Counter (Hidden on mobile, shown on tablet+) */}
          <div className="hidden md:flex items-center justify-center gap-4 mx-auto">
            {/* Loss Counter */}
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-red-700/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wider leading-none">Total Losses</p>
                <p className="text-red-500 font-black text-lg leading-tight">$150,200+</p>
              </div>
            </div>
            {/* Victim Counter */}
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-yellow-700/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wider leading-none">Est. Victims</p>
                <p className="text-yellow-500 font-black text-lg leading-tight">50+</p>
              </div>
            </div>
          </div>

          {/* Right - Tagline */}
          <div className="text-right">
            <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap hidden sm:inline">Scam Exposure Network</span>
            <span className="text-red-500 font-bold text-xs uppercase tracking-wider sm:hidden">Scam Alert</span>
          </div>
        </div>
      </nav>

      {/* Mobile Stats Banner - Shown only on mobile */}
      <div className="md:hidden bg-gradient-to-r from-red-950/80 to-purple-950/80 border-b border-red-700/50 py-3 px-4">
        <div className="flex items-center justify-center gap-6">
          {/* Loss Counter */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-center">
              <p className="text-gray-400 text-xs uppercase tracking-wider leading-none">Losses</p>
              <p className="text-red-500 font-black text-lg leading-tight">$150.2K+</p>
            </div>
          </div>
          {/* Victim Counter */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className="text-center">
              <p className="text-gray-400 text-xs uppercase tracking-wider leading-none">Victims</p>
              <p className="text-yellow-500 font-black text-lg leading-tight">50+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - About Dirty Crypto */}
      <section className="relative py-12 sm:py-20 px-4 text-center border-b border-red-900/50 bg-gradient-to-b from-red-950/30 to-transparent" aria-label="About Dirty Crypto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6" itemProp="name">
            <span className="gradient-text">Dirty Crypto</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-4 sm:mb-6 font-semibold" itemProp="description">
            Exposing Crypto Scams Through Blockchain Analysis
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            We investigate cryptocurrency fraud by tracing stolen funds across blockchains, documenting scam operations, 
            and providing evidence that helps victims and law enforcement pursue justice. Our mission is to expose scammers, 
            protect the crypto community, and ensure criminals are held accountable.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <div className="card px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-blue-700/50 bg-blue-950/20">
              <div className="flex items-center gap-3 sm:flex-col sm:text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <div className="text-left sm:text-center">
                  <p className="text-blue-400 font-semibold text-sm sm:text-base">Blockchain Analysis</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Tracing stolen funds</p>
                </div>
              </div>
            </div>
            <div className="card px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-green-700/50 bg-green-950/20">
              <div className="flex items-center gap-3 sm:flex-col sm:text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-left sm:text-center">
                  <p className="text-green-400 font-semibold text-sm sm:text-base">Evidence Documentation</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Building cases for justice</p>
                </div>
              </div>
            </div>
            <div className="card px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-yellow-700/50 bg-yellow-950/20">
              <div className="flex items-center gap-3 sm:flex-col sm:text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div className="text-left sm:text-center">
                  <p className="text-yellow-400 font-semibold text-sm sm:text-base">Public Awareness</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Warning potential victims</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-10 sm:py-16 px-4 border-b border-gray-800" aria-label="Our Mission">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Our Mission</h2>
          
          <div className="card p-5 sm:p-8 rounded-2xl border border-purple-700/50 bg-purple-950/10 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-2 sm:mb-3">Justice Through Transparency</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Cryptocurrency scammers rely on anonymity and the complexity of blockchain technology to evade accountability. 
                  At Dirty Crypto, we turn their tools against them. By analyzing transaction patterns, tracing fund flows across 
                  multiple chains, and documenting evidence publicly, we create a permanent record that supports victims seeking 
                  justice and helps law enforcement identify criminals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="card p-4 sm:p-6 rounded-xl text-center">
              <div className="text-2xl sm:text-4xl font-black text-red-500 mb-1 sm:mb-2">$150.2K+</div>
              <p className="text-gray-400 text-xs sm:text-base">Documented stolen funds</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl text-center">
              <div className="text-2xl sm:text-4xl font-black text-orange-500 mb-1 sm:mb-2">6</div>
              <p className="text-gray-400 text-xs sm:text-base">Scam operations exposed</p>
            </div>
            <div className="card p-4 sm:p-6 rounded-xl text-center">
              <div className="text-2xl sm:text-4xl font-black text-yellow-500 mb-1 sm:mb-2">150+</div>
              <p className="text-gray-400 text-xs sm:text-base">Transactions traced</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-10 sm:py-16 px-4 border-b border-gray-800 bg-gray-900/30" aria-label="What We Do">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">What We Do</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            We use blockchain forensics and open-source intelligence to investigate crypto scams and document evidence
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="card p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 sm:mb-3">Blockchain Transaction Tracing</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                We follow the money. By analyzing on-chain transactions across Bitcoin, Ethereum, Tron, and other networks, 
                we trace stolen funds from victim wallets through staging addresses to exchange cash-out points.
              </p>
            </div>
            
            <div className="card p-4 sm:p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 sm:mb-3">Exchange Cash-Out Identification</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Scammers must eventually convert crypto to fiat. We identify exchange deposit addresses that can be 
                subpoenaed for KYC records, providing law enforcement with actionable leads to identify perpetrators.
              </p>
            </div>
            
            <div className="card p-4 sm:p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 sm:mb-3">Scam Pattern Documentation</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                We document the tactics, techniques, and procedures used by scammers—from Discord impersonation and 
                typosquatting to fake trading platforms—so potential victims can recognize and avoid these schemes.
              </p>
            </div>
            
            <div className="card p-4 sm:p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-2 sm:mb-3">Public Evidence Archives</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                All our investigations are published publicly with full documentation—wallet addresses, transaction hashes, 
                screenshots, and analysis. This creates a permanent record that helps victims and supports legal action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exposed Scams */}
      <section className="py-10 sm:py-16 px-4 border-b border-gray-800" aria-label="Exposed Scam Operations">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">Exposed Scam Operations</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Click on any investigation to view full blockchain analysis, evidence, and documentation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* OxyCapitals Card */}
            <Link href="/oxycapitals" className="block">
              <div className="card p-4 sm:p-6 rounded-xl border-2 border-red-600 bg-red-950/20 hover:bg-red-950/30 transition-colors h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-400">OxyCapitals</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">oxycapitalsltd.com</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-green-600/30 text-green-400 text-xs font-semibold rounded-full border border-green-600">
                      TAKEN DOWN
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500">Total Stolen:</span>
                      <p className="text-red-400 font-bold text-base sm:text-lg">$40,400+</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Chains:</span>
                      <p className="text-gray-300">BTC, ETH, TRX</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Method:</span>
                      <p className="text-yellow-400">Discord Impersonation</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Wallets Traced:</span>
                      <p className="text-gray-300">6 addresses</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Site removed — linked to MirrorExp (same operator)</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* MirrorExp Card */}
            <Link href="/mirrorexp" className="block">
              <div className="card p-4 sm:p-6 rounded-xl border-2 border-orange-600 bg-orange-950/20 hover:bg-orange-950/30 transition-colors h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-400">MirrorExp</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">mirrorexp.com</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-green-600/30 text-green-400 text-xs font-semibold rounded-full border border-green-600">
                      TAKEN DOWN
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500">Total Stolen:</span>
                      <p className="text-red-400 font-bold text-base sm:text-lg">$22,000+</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Chains:</span>
                      <p className="text-gray-300">BTC, ETH, USDT, USDC</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Method:</span>
                      <p className="text-yellow-400">Typosquatting</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Cash-out Pool:</span>
                      <p className="text-gray-300">$2.1M traced</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Site removed — linked to OxyCapitals (same operator)</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* TruCopy Card */}
            <Link href="/trucopy" className="block">
              <div className="card p-4 sm:p-6 rounded-xl border-2 border-purple-600 bg-purple-950/20 hover:bg-purple-950/30 transition-colors h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-400">TruCopy</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">trucopy.org</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-red-600/30 text-red-400 text-xs font-semibold rounded-full border border-red-600">
                      ACTIVE
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500">Total Stolen:</span>
                      <p className="text-red-400 font-bold text-base sm:text-lg">$30,869+</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Chains:</span>
                      <p className="text-gray-300">BTC, SOL, ETH + 5 more</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Method:</span>
                      <p className="text-yellow-400">Discord Impersonation</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Transactions:</span>
                      <p className="text-gray-300">12 traced</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Multi-chain fraud across BTC, ETH, SOL + more</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* BridgeStocks Card */}
            <Link href="/bridgestocks" className="block">
              <div className="card p-4 sm:p-6 rounded-xl border-2 border-cyan-600 bg-cyan-950/20 hover:bg-cyan-950/30 transition-colors h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">BridgeStocks</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">bridgestocks.com</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-green-600/30 text-green-400 text-xs font-semibold rounded-full border border-green-600">
                      TAKEN DOWN
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500">Total Stolen:</span>
                      <p className="text-red-400 font-bold text-base sm:text-lg">$35,389</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Chains:</span>
                      <p className="text-gray-300">BTC only</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Method:</span>
                      <p className="text-yellow-400">Discord Impersonation</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Transactions:</span>
                      <p className="text-gray-300">79 traced</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Site taken down after Chainabuse report</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* EverrexTrade Card */}
            <Link href="/everrextrade" className="block">
              <div className="card p-4 sm:p-6 rounded-xl border-2 border-yellow-600 bg-yellow-950/20 hover:bg-yellow-950/30 transition-colors h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">EverrexTrade</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">everrextrade.com</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-yellow-600/30 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-600">
                      INVESTIGATING
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500">Total Stolen:</span>
                      <p className="text-yellow-400 font-bold text-base sm:text-lg">Pending</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Platform:</span>
                      <p className="text-gray-300">Fake Forex/Stocks</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Method:</span>
                      <p className="text-yellow-400">Discord Impersonation</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <p className="text-yellow-300">Active Investigation</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Fake forex platform with Latin lorem ipsum text</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* AffluenceAura Card */}
            <Link href="/affluenceaura" className="block">
              <div className="card p-4 sm:p-6 rounded-xl border-2 border-teal-600 bg-teal-950/20 hover:bg-teal-950/30 transition-colors h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-teal-400">AffluenceAura</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">affluenceaura.com</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-gray-600/30 text-gray-400 text-xs font-semibold rounded-full border border-gray-600">
                      ABANDONED
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-500">Total Stolen:</span>
                      <p className="text-green-400 font-bold text-base sm:text-lg">$0</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Chains:</span>
                      <p className="text-gray-300">BTC, ETH, BNB</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Method:</span>
                      <p className="text-teal-400">WhatsApp + Fake Platform</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <p className="text-gray-400">Abandoned (0 victims)</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Abandoned scam — same V12Hosting as EverrexTrade</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How Blockchain Analysis Helps */}
      <section className="py-10 sm:py-16 px-4 border-b border-gray-800 bg-gradient-to-b from-blue-950/20 to-transparent" aria-label="How Blockchain Analysis Delivers Justice">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">How Blockchain Analysis Delivers Justice</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            The blockchain never forgets. Every transaction creates a permanent trail that leads to the scammer.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">1</div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-400 mb-1 sm:mb-2">Transaction Tracing</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Every cryptocurrency transaction is recorded permanently on the blockchain. We analyze these records to 
                    follow stolen funds from victim deposits through multiple intermediate wallets to final destinations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">2</div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-green-400 mb-1 sm:mb-2">Pattern Recognition</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Scammers leave behavioral fingerprints—round number withdrawals, rapid cash-outs, disposable staging wallets. 
                    These patterns prove intentional fraud and connect multiple scam operations to the same operators.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">3</div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-1 sm:mb-2">Exchange Identification</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Scammers must convert crypto to cash through regulated exchanges that require identity verification. 
                    When we identify these cash-out addresses, law enforcement can subpoena exchanges for KYC records.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-4 sm:p-6 rounded-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">4</div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-red-400 mb-1 sm:mb-2">Evidence for Prosecution</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Our documented investigations provide the evidence victims need to file police reports and civil lawsuits. 
                    Blockchain evidence is increasingly accepted in courts worldwide as proof of financial crimes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 sm:py-12 px-4 border-b border-gray-800 bg-red-950/30" aria-label="Protect Yourself From Crypto Scams">
        <div className="max-w-4xl mx-auto">
          <div className="card p-4 sm:p-8 rounded-2xl bg-red-900/30 border-2 border-red-600">
            <h2 className="text-xl sm:text-2xl font-bold text-red-400 mb-4 text-center">Protect Yourself From Crypto Scams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <ul className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span><strong>Never send crypto to strangers</strong> — no matter how convincing they seem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span><strong>Verify usernames character-by-character</strong> — typosquatting is extremely common</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span><strong>Be skeptical of &quot;guaranteed returns&quot;</strong> — legitimate investments carry risk</span>
                </li>
              </ul>
              <ul className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span><strong>Research any platform</strong> — check reviews, registration, and regulatory status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span><strong>Don&apos;t click unsolicited links</strong> — especially wallet connection requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span><strong>If it sounds too good to be true</strong> — it&apos;s definitely a scam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 text-center text-gray-500">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-3 sm:mb-4">Dirty Crypto</h3>
          <p className="mb-3 sm:mb-4 text-gray-400 text-sm sm:text-base">
            Exposing cryptocurrency fraud through blockchain analysis. 
            Fighting for justice for scam victims.
          </p>
          <p className="text-xs sm:text-sm mb-4 sm:mb-6">
            All investigations are based on publicly available blockchain data and documented evidence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <Link href="/oxycapitals" className="text-red-400 hover:text-red-300 text-sm">
              OxyCapitals Investigation
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/mirrorexp" className="text-orange-400 hover:text-orange-300 text-sm">
              MirrorExp Investigation
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/trucopy" className="text-purple-400 hover:text-purple-300 text-sm">
              TruCopy Investigation
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/bridgestocks" className="text-cyan-400 hover:text-cyan-300 text-sm">
              BridgeStocks Investigation
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/everrextrade" className="text-yellow-400 hover:text-yellow-300 text-sm">
              EverrexTrade Investigation
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/affluenceaura" className="text-teal-400 hover:text-teal-300 text-sm">
              AffluenceAura Investigation
            </Link>
          </div>
          
          <p className="text-xs text-gray-600">Last updated: <time dateTime="2026-02-05">February 5, 2026</time></p>
        </div>
      </footer>
    </main>
  )
}

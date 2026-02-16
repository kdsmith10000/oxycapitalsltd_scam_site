'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TipsPage() {
  const [formData, setFormData] = useState({
    tipType: '',
    suspectWebsite: '',
    suspectDiscord: '',
    suspectEmail: '',
    suspectWallet: '',
    description: '',
    amountLost: '',
    contactEmail: '',
    additionalInfo: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`Crypto Scam Tip: ${formData.tipType || 'General'}`)
    const body = encodeURIComponent(
      `=== Crypto Scam Tip Submission ===\n\n` +
      `TIP TYPE:\n${formData.tipType}\n\n` +
      `SUSPECTED WEBSITE:\n${formData.suspectWebsite}\n\n` +
      `SUSPECTED DISCORD USERNAME:\n${formData.suspectDiscord}\n\n` +
      `SUSPECTED EMAIL:\n${formData.suspectEmail}\n\n` +
      `SUSPECTED WALLET ADDRESS(ES):\n${formData.suspectWallet}\n\n` +
      `APPROXIMATE AMOUNT LOST (if known):\n${formData.amountLost}\n\n` +
      `DETAILED DESCRIPTION:\n${formData.description}\n\n` +
      `YOUR CONTACT EMAIL (optional):\n${formData.contactEmail}\n\n` +
      `ADDITIONAL INFORMATION:\n${formData.additionalInfo}\n\n` +
      `--- Submitted via Dirty Crypto Tips Form ---`
    )
    
    window.location.href = `mailto:tips@dirtycrypto.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      {/* Header */}
      <nav className="bg-gradient-to-r from-red-950 to-purple-950 border-b border-red-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <Link href="/" className="text-red-400 font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-red-300 transition-colors">
            &larr; Back to Dirty Crypto
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 px-4 text-center border-b border-yellow-900/50 bg-gradient-to-b from-yellow-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="warning-pulse inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-yellow-600 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider">
            Submit a Tip
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">
            Help Us Expose <span className="gradient-text">Crypto Scams</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Have information about a cryptocurrency scam? Suspect fraudulent activity? Submit a tip to help us investigate and protect others from becoming victims.
          </p>
          <div className="card inline-block p-3 sm:p-4 rounded-lg">
            <p className="text-gray-400 text-xs sm:text-sm">Tips are confidential</p>
            <p className="text-yellow-400 font-mono text-sm">tips@dirtycrypto.org</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="card p-8 rounded-2xl border-2 border-green-600 bg-green-950/20 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">Thank You for Your Tip!</h2>
              <p className="text-gray-300 mb-4">
                Your email client should have opened with the tip information pre-filled. Please send the email to complete your submission.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                If your email client didn't open, please manually send your tip to{' '}
                <a href="mailto:tips@dirtycrypto.org" className="text-yellow-400 hover:underline">tips@dirtycrypto.org</a>
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 rounded-2xl border border-gray-700 bg-gray-900/30">
              <div className="space-y-6">
                {/* Tip Type */}
                <div>
                  <label htmlFor="tipType" className="block text-sm font-semibold text-gray-300 mb-2">
                    What type of tip are you submitting? <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="tipType"
                    name="tipType"
                    required
                    value={formData.tipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  >
                    <option value="">Select a tip type...</option>
                    <option value="Suspected Scam Website">Suspected Scam Website</option>
                    <option value="Suspected Scammer Discord">Suspected Scammer Discord Username</option>
                    <option value="Suspected Scam Operation">Suspected Ongoing Scam Operation</option>
                    <option value="Scam Victim Report">I'm a Victim / Know a Victim</option>
                    <option value="Information About Known Scam">Information About a Known Scam</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Suspected Website */}
                <div>
                  <label htmlFor="suspectWebsite" className="block text-sm font-semibold text-gray-300 mb-2">
                    Suspected Scam Website URL
                  </label>
                  <input
                    type="url"
                    id="suspectWebsite"
                    name="suspectWebsite"
                    value={formData.suspectWebsite}
                    onChange={handleChange}
                    placeholder="e.g., example-scam.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Suspected Discord */}
                <div>
                  <label htmlFor="suspectDiscord" className="block text-sm font-semibold text-gray-300 mb-2">
                    Suspected Scammer's Discord Username
                  </label>
                  <input
                    type="text"
                    id="suspectDiscord"
                    name="suspectDiscord"
                    value={formData.suspectDiscord}
                    onChange={handleChange}
                    placeholder="e.g., sajmaogs or .atraveller (with the period)"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Suspected Email */}
                <div>
                  <label htmlFor="suspectEmail" className="block text-sm font-semibold text-gray-300 mb-2">
                    Suspected Scammer's Email Address
                  </label>
                  <input
                    type="email"
                    id="suspectEmail"
                    name="suspectEmail"
                    value={formData.suspectEmail}
                    onChange={handleChange}
                    placeholder="e.g., support@scam-website.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Suspected Wallet */}
                <div>
                  <label htmlFor="suspectWallet" className="block text-sm font-semibold text-gray-300 mb-2">
                    Suspected Scam Wallet Address(es)
                  </label>
                  <textarea
                    id="suspectWallet"
                    name="suspectWallet"
                    value={formData.suspectWallet}
                    onChange={handleChange}
                    placeholder="Bitcoin, Ethereum, or other cryptocurrency wallet addresses (one per line)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors font-mono text-sm"
                  />
                </div>

                {/* Amount Lost */}
                <div>
                  <label htmlFor="amountLost" className="block text-sm font-semibold text-gray-300 mb-2">
                    Approximate Amount Lost (if known)
                  </label>
                  <input
                    type="text"
                    id="amountLost"
                    name="amountLost"
                    value={formData.amountLost}
                    onChange={handleChange}
                    placeholder="e.g., $5,000 in Bitcoin"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">
                    Detailed Description of the Incident <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe how the scam works, how you were contacted, what happened, and any other relevant details..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Contact Email (optional)
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="In case we need to follow up with you"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Additional Info */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-300 mb-2">
                    Any Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Screenshots, transaction IDs, or any other evidence you can provide..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Submit Tip via Email
                  </button>
                  <p className="text-gray-500 text-xs text-center mt-3">
                    Clicking submit will open your email client with the tip pre-filled. Your information is kept confidential.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-8 px-4 border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card p-6 rounded-xl bg-blue-950/20 border border-blue-700/50">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-blue-400 font-semibold">Your Privacy is Protected</h3>
            </div>
            <p className="text-gray-400 text-sm">
              All submissions are treated as confidential. We never publish tipster information without explicit permission. 
              You can submit tips anonymously by leaving the contact email blank.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm">
            Dirty Crypto - Exposing cryptocurrency fraud through blockchain analysis
          </p>
        </div>
      </footer>
    </main>
  )
}

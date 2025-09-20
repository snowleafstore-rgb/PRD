'use client'

import { useState } from 'react'
import { useWaitlist } from '@/hooks/useWaitlist'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const { submitToWaitlist, isLoading, message, isSuccess, isError, reset } = useWaitlist()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    const success = await submitToWaitlist({ email, name })
    
    if (success) {
      setEmail('')
      setName('')
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
          required
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      
      {message && (
        <div className={`text-center p-4 rounded-lg ${
          isSuccess 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : isError 
            ? 'bg-red-100 text-red-800 border border-red-200'
            : 'bg-gray-100 text-gray-800 border border-gray-200'
        }`}>
          {message}
        </div>
      )}
      
      <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          No spam, ever
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Unsubscribe anytime
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Early access pricing
        </div>
      </div>
    </div>
  )
}

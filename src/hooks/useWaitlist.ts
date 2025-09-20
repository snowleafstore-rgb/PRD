import { useState } from 'react'

interface WaitlistFormData {
  email: string
  name?: string
}

interface WaitlistResponse {
  message: string
  user?: Record<string, unknown>
  error?: string
}

export const useWaitlist = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const submitToWaitlist = async (formData: WaitlistFormData): Promise<boolean> => {
    setIsLoading(true)
    setIsError(false)
    setIsSuccess(false)
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data: WaitlistResponse = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage(data.message || 'Successfully joined waitlist!')
        return true
      } else {
        setIsError(true)
        setMessage(data.error || 'Failed to join waitlist')
        return false
      }
    } catch (error) {
      console.error('Waitlist submission error:', error)
      setIsError(true)
      setMessage('Network error. Please try again.')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setMessage('')
    setIsSuccess(false)
    setIsError(false)
  }

  return {
    submitToWaitlist,
    isLoading,
    message,
    isSuccess,
    isError,
    reset
  }
}

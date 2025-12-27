import { useMutation } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { resendOtp } from '../api/auth'

const RESEND_DELAY = 59

export function useResendOtp() {
  const [secondsLeft, setSecondsLeft] = useState(RESEND_DELAY)

  const mutation = useMutation({
    mutationFn: (email: string) => resendOtp({ email }),
    onSuccess: () => {
      setSecondsLeft(RESEND_DELAY)
    }
  })

  useEffect(() => {
    if (secondsLeft === 0) return
    const timer = setInterval(() => {
      setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [secondsLeft])

  return {
    resendOtp: mutation.mutate,
    canResend: secondsLeft === 0,
    secondsLeft
  }
}

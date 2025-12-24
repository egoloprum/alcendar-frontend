import { useMutation } from '@tanstack/react-query'
import { verifyOtp } from '../api/verify-otp'

export function useVerifyOtp() {
  return useMutation({
    mutationFn: verifyOtp
  })
}

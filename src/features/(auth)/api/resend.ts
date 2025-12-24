import { API_AUTH_RESEND_OTP } from '@/src/shared/utils'

type ResendOtpPayload = {
  email: string
}

export async function resendOtp(payload: ResendOtpPayload) {
  const res = await fetch(API_AUTH_RESEND_OTP, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  console.log('API resendOTP is fired!')

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Invalid OTP')
  }

  return res.json()
}

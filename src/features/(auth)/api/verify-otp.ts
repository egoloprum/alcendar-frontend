import { API_AUTH_VERIFY_OTP } from '@/src/shared/utils'

type VerifyOtpPayload = {
  email: string
  token: string
}

export async function verifyOtp(payload: VerifyOtpPayload) {
  const res = await fetch(API_AUTH_VERIFY_OTP, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  console.log('API verifyOTP is fired!')

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Invalid OTP')
  }

  return res.json()
}

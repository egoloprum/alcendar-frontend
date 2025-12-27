import { api } from '@/src/shared/utils'

export async function signinUser(payload: { email: string; password: string }) {
  return await api.post('/auth/signin', payload)
}

export async function signupUser(payload: { email: string; password: string }) {
  return api.post('/auth/signup', payload)
}

export async function signoutUser() {
  return api.get('/auth/logout')
}

export async function refreshToken() {
  return api.post('/auth/refresh')
}

export async function verifyOtp(payload: { email: string; token: string }) {
  return await api.post('/auth/otp/verify', payload)
}

export async function resendOtp(payload: { email: string }) {
  return api.post('/auth/otp/resend', payload)
}

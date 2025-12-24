import { API_AUTH_SIGNUP, hashPassword } from '@/src/shared/utils'
import { SignupFormValues } from '../schemas/signup.schema'

export async function signupUser(data: SignupFormValues) {
  const res = await fetch(API_AUTH_SIGNUP, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: data.email,
      password: hashPassword(data.password)
    })
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Signup failed')
  }

  return res.json()
}

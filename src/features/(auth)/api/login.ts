import { API_AUTH_LOGIN, hashPassword } from '@/src/shared/utils'

type LoginPayload = {
  email: string
  password: string
}

type LoginResponse = {
  token: string
  user: {
    id: string
    email: string
  }
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const res = await fetch(API_AUTH_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      password: hashPassword(payload.password),
    }),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Login failed')
  }

  return res.json()
}

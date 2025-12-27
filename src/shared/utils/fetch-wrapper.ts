import { ApiResponse } from '../types'
import { saveAuthTokens } from './auth'

async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const baseURL = process.env.EXPO_PUBLIC_BASE_URL || 'http://localhost:3000/api'

  const response = await fetch(`${baseURL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  })

  const newAccessToken = response.headers.get('X-Access-Token')
  const newRefreshToken = response.headers.get('X-Refresh-Token')

  if (newAccessToken && newRefreshToken) {
    await saveAuthTokens(newAccessToken, newRefreshToken)
  }

  const data: ApiResponse<T> = await response.json()

  if (!response.ok || !data.success) {
    throw new Error(data?.error?.message || 'Request failed')
  }

  return data.data as T
}

export const api = {
  get: <T = unknown>(endpoint: string, options?: RequestInit) =>
    apiFetch<T>(endpoint, { ...options, method: 'GET' }),

  post: <T = unknown>(endpoint: string, body?: any, options?: RequestInit) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body)
    }),

  put: <T = unknown>(endpoint: string, body?: any, options?: RequestInit) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body)
    }),

  patch: <T = unknown>(endpoint: string, body?: any, options?: RequestInit) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body)
    }),

  delete: <T = unknown>(endpoint: string, options?: RequestInit) =>
    apiFetch<T>(endpoint, { ...options, method: 'DELETE' })
}

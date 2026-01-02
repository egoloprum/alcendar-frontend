import { ApiResponse } from '../types'
import { getAuthTokens, saveAuthTokens } from './auth'

type ApiRequestOptions = RequestInit & {
  auth?: boolean
}

async function apiFetch<T>(endpoint: string, options: ApiRequestOptions): Promise<T> {
  const baseURL = process.env.EXPO_PUBLIC_BASE_URL || 'http://localhost:3000/api'

  const { auth, headers, ...fetchOptions } = options

  const finalHeaders = new Headers(headers)

  if (auth) {
    const { accessToken, refreshToken } = await getAuthTokens()

    if (accessToken) {
      finalHeaders.set('Authorization', `Bearer ${accessToken}`)
    }

    if (refreshToken) {
      finalHeaders.set('X-Refresh-Token', refreshToken)
    }
  }

  const response = await fetch(`${baseURL}${endpoint}`, {
    ...fetchOptions,
    headers: finalHeaders
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
  get: <T>(endpoint: string, options?: ApiRequestOptions) =>
    apiFetch<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, body?: any, options?: ApiRequestOptions) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body)
    }),

  put: <T>(endpoint: string, body?: any, options?: ApiRequestOptions) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body)
    }),

  patch: <T>(endpoint: string, body?: any, options?: ApiRequestOptions) =>
    apiFetch<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body)
    }),

  delete: <T>(endpoint: string, options?: ApiRequestOptions) =>
    apiFetch<T>(endpoint, { ...options, method: 'DELETE' })
}

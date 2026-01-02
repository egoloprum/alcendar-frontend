import { useQuery } from '@tanstack/react-query'

import { getAuthTokens } from '../auth'
import { api } from '../fetch-wrapper'

interface User {
  id: string
  email: string
}

export function useAuth() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async (): Promise<User | null> => {
      const { accessToken, refreshToken } = await getAuthTokens()
      if (!accessToken && !refreshToken) return null

      // console.log({ accessToken, refreshToken })

      const response = await api.get<{ user: User }>('/auth/me', {
        auth: true
      })

      console.log('hello from useAuth')

      console.log({ response })

      return response.user
    },
    retry: true,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  })

  return {
    user: data ?? null,
    isLoading,
    isAuthenticated: !!data,
    isError
  }
}

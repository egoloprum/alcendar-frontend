import { createContext, PropsWithChildren, useContext } from 'react'
import { useAuth } from '../hooks'

type AuthContextValue = {
  user: {
    id: string
    email: string
  } | null
  isAuthenticated: boolean
  isLoading: boolean
  isError: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const auth = useAuth()

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
        isError: auth.isError
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return context
}

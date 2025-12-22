import { useEffect, useState } from 'react'
import { getSession } from '../utils/auth'
import { useRouter } from 'expo-router'

type ReplaceTarget = Parameters<ReturnType<typeof useRouter>['replace']>[0]

export function useAuth(redirectTo: ReplaceTarget = '/auth/login') {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSession()
      if (!session) {
        router.replace(redirectTo)
      } else {
        setUser(session.user)
      }
      setLoading(false)
    }
    checkAuth()
  }, [])

  return { user, loading }
}

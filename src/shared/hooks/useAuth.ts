import { useEffect, useState } from 'react'
import { getSession } from '../utils/auth'
import { useRouter } from 'expo-router'

type ReplaceTarget = Parameters<ReturnType<typeof useRouter>['replace']>[0]

export function useAuth(redirectTo: ReplaceTarget = '/auth/login') {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSession()
      if (!session) {
        router.replace(redirectTo)
      }
      setLoading(false)
    }
    checkAuth()
  }, [])

  return { loading }
}

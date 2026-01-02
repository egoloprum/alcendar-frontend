import { Redirect } from 'expo-router'

import { UserSearchForm } from '@/src/features/(user)'
import { Container } from '@/src/shared/components'
import { useAuthContext } from '@/src/shared/utils/contexts'
import { UserSearchProvider } from '@/src/shared/utils/contexts/userSearchContext'
import { UserSearchList } from '@/src/widgets/user'

export default function Tab() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (!isAuthenticated) {
    return <Redirect href="/" />
  }

  return (
    <UserSearchProvider>
      <Container>
        <UserSearchForm />

        <UserSearchList />
      </Container>
    </UserSearchProvider>
  )
}

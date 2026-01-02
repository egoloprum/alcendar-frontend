import { Redirect } from 'expo-router'
import { Text } from 'react-native'

import { Container } from '@/src/shared/components'
import { useAuthContext } from '@/src/shared/utils/contexts'

export default function Tab() {
  const { isAuthenticated, isLoading, user } = useAuthContext()

  if (isLoading) return null

  if (!isAuthenticated) {
    return <Redirect href="/" />
  }

  return (
    <Container>
      <Text>Tab Home</Text>
    </Container>
  )
}

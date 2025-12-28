import { useAuth } from '@/src/shared/hooks'
import { Redirect, Stack } from 'expo-router'
import { Text } from 'react-native'

export default function AuthLayout() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (user) {
    return <Redirect href="/(tabs)" />
  }

  return (
    <Stack>
      <Stack.Screen
        name="signin"
        options={{
          headerShown: true,
          title: ''
          // headerRight: () => <Text>qwe</Text>
        }}
      />
      <Stack.Screen name="signup" options={{ headerShown: true, title: '' }} />
      <Stack.Screen name="require-confirmation" options={{ headerShown: true, title: '' }} />
      <Stack.Screen name="verify-confirmation" options={{ headerShown: true, title: '' }} />
    </Stack>
  )
}

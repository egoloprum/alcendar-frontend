import { useAuthContext } from '@/src/shared/utils'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (isAuthenticated) {
    return <Redirect href="/(protected)/(tabs)" />
  }

  return (
    <Stack>
      <Stack.Screen name="/" options={{ headerShown: true, title: 'qweqw' }} />
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

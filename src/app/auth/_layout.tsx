import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="require-confirmation" options={{ headerShown: false }} />
      <Stack.Screen name="verify-confirmation" options={{ headerShown: false }} />
      <Stack.Screen name="age-confirmation" options={{ headerShown: false }} />
    </Stack>
  )
}

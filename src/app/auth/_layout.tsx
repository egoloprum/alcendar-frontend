import { Stack } from 'expo-router'

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="require-confirmation" options={{ headerShown: false }} />
      <Stack.Screen name="verify-confirmation" options={{ headerShown: false }} />
      <Stack.Screen name="create-birthday" options={{ headerShown: false }} />
    </Stack>
  )
}

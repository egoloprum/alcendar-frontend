import { SignupProvider } from '@/src/features/(auth)'
import { Stack } from 'expo-router'

export default function LoginLayout() {
  return (
    <SignupProvider>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)/create-username" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)/create-password" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)/create-email" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)/require-confirmation" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)/verify-confirmation" options={{ headerShown: false }} />
        <Stack.Screen name="(signup)/create-birthday" options={{ headerShown: false }} />
        <Stack.Screen name="confirm" options={{ headerShown: false }} />
      </Stack>
    </SignupProvider>
  )
}

import { Stack } from 'expo-router'

import { HeaderBar } from '@/src/shared/components'

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="signin"
        options={{
          header: () => <HeaderBar title="Sign in" showBack={true} />
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          header: () => <HeaderBar title="Sign up" showBack={true} />
        }}
      />
      <Stack.Screen
        name="require-confirmation"
        options={{
          header: () => <HeaderBar title="" showBack={true} />
        }}
      />
      <Stack.Screen
        name="verify-confirmation"
        options={{
          header: () => <HeaderBar title="" showBack={true} />
        }}
      />
    </Stack>
  )
}

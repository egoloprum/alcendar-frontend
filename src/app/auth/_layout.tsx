import { Stack } from 'expo-router'
import { Text } from 'react-native'

export default function AuthLayout() {
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
      <Stack.Screen name="age-confirmation" options={{ headerShown: true, title: '' }} />
    </Stack>
  )
}

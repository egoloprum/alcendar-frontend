import { Stack } from 'expo-router'
import React from 'react'

export default function ProtectedLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="settings"
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="notifications"
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="users"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}

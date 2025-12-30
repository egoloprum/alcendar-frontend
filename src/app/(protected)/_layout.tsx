import { Stack } from 'expo-router'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ProtectedLayout() {
  return (
    <Stack>
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

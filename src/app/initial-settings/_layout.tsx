import { Stack } from 'expo-router'
import React from 'react'

export default function InitialSettingslayout() {
  return (
    <Stack>
      <Stack.Screen name="age-confirmation" options={{ headerShown: true, title: '' }} />
    </Stack>
  )
}

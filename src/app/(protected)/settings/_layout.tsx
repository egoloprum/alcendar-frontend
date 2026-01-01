import { Stack } from 'expo-router'
import React from 'react'

import { HeaderBar } from '@/src/shared/components'

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <HeaderBar title="Settings" showBack={true} />
        }}
      />
    </Stack>
  )
}

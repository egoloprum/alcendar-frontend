import { Stack } from 'expo-router'
import React from 'react'

import { HeaderBar } from '@/src/shared/components'

export default function NotificationsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <HeaderBar title="Notifications" showBack={true} />
        }}
      />
    </Stack>
  )
}

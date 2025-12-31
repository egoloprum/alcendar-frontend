import { Stack } from 'expo-router'
import { EllipsisVertical } from 'lucide-react-native'
import React from 'react'

export default function UsersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[user_id]"
        options={{
          title: 'user',
          headerRight: () => <EllipsisVertical className="mr-4" />
        }}
      />
    </Stack>
  )
}

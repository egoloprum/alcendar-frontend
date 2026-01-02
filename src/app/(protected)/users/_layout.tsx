import { Stack } from 'expo-router'
import { EllipsisVertical } from 'lucide-react-native'
import React from 'react'

import { HeaderBar } from '@/src/shared/components'

export default function UsersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[user_id]"
        options={{
          headerTransparent: true,
          header: () => (
            <HeaderBar
              title="User"
              right={
                // <Link href="/notifications">
                <EllipsisVertical size={20} />
                // </Link>
              }
              showBack={true}
            />
          )
        }}
      />
    </Stack>
  )
}

import { Redirect } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

import { useAuthContext } from '@/src/shared/utils/contexts'

export const RequireConfirmation = ({}) => {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (isAuthenticated) {
    return <Redirect href="/feed" />
  }

  return (
    <View>
      <Text>RequireConfirmation</Text>
    </View>
  )
}
export default RequireConfirmation

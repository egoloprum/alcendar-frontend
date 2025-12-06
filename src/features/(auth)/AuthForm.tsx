import { Button, Input } from '@/src/shared/components'
import React from 'react'
import { View } from 'react-native'

export const AuthForm = ({}) => {
  return (
    <View className="flex flex-col gap-4 w-full">
      <Input label="Email" placeholder="email" keyboardType="email-address" />
      <Button>Continue</Button>
    </View>
  )
}

import { Button } from '@/src/shared/components'
import React from 'react'
import { Linking } from 'react-native'

export const AuthGoogleBtn = ({}) => {
  const handleClick = () => {
    const base = process.env.EXPO_PUBLIC_BASE_URL ?? ''
    const url = `${base}/auth/google`
    if (!base) {
      Linking.openURL('/auth/google').catch(() => {})
      return
    }
    Linking.openURL(url).catch(() => {})
  }

  return (
    <Button variant="ghost" onPress={handleClick}>
      Continue with Google
    </Button>
  )
}

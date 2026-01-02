import { Redirect, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

import { AuthOTPConfirmForm } from '@/src/features/(auth)'
import { Container } from '@/src/shared/components'
import { useAuthContext } from '@/src/shared/utils/contexts'

const VerifyConfirmation = ({}) => {
  const { email } = useLocalSearchParams<{
    email: string
  }>()

  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (isAuthenticated) {
    return <Redirect href="/feed" />
  }

  return (
    <Container>
      <Text
        className="my-4 text-3xl uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Bold' }}>
        6-digit code
      </Text>
      <AuthOTPConfirmForm email={email} />
    </Container>
  )
}

export default VerifyConfirmation

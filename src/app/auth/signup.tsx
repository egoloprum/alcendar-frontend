import { Redirect } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

import { AuthSignupForm } from '@/src/features/(auth)'
import { Container } from '@/src/shared/components'
import { useAuthContext } from '@/src/shared/utils/contexts'
import { TermsAndConditions } from '@/src/widgets/auth'

const Signup = ({}) => {
  const { isAuthenticated, isLoading } = useAuthContext()

  if (isLoading) return null

  if (isAuthenticated) {
    return <Redirect href="/feed" />
  }

  return (
    <Container>
      <Text
        className="my-4 text-3xl uppercase tracking-widest"
        style={{ fontFamily: 'Gliker-Regular' }}>
        Sign up to Alcendar
      </Text>
      <AuthSignupForm />
      <TermsAndConditions />
    </Container>
  )
}

export default Signup

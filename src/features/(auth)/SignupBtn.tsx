import { Button } from '@/src/shared/components'
import { Link } from 'expo-router'
import React from 'react'

export const SignupBtn = ({}) => {
  return (
    <Link href="/auth/signup" asChild>
      <Button title="Get started" variant="primary" />
    </Link>
  )
}

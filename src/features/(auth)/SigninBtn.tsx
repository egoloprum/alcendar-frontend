import { Button } from '@/src/shared/components'
import { Link } from 'expo-router'
import React from 'react'

export const SigninBtn = ({}) => {
  return (
    <Link href="/auth/signin" asChild>
      <Button title="Already have an account" variant="secondary" />
    </Link>
  )
}

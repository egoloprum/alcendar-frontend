import { Button } from '@/src/shared/components'
import { Link } from 'expo-router'
import React from 'react'

export const LoginBtn = ({}) => {
  return (
    <Link href="/login" asChild>
      <Button title="Login" variant="secondary" />
    </Link>
  )
}

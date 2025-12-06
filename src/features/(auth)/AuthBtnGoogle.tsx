import { Button } from '@/src/shared/components'
import React from 'react'

export const AuthBtnGoogle = ({}) => {
  const handleClick = () => {
    // Implement Google OAuth flow here
  }

  return (
    <Button variant="ghost" onPress={() => handleClick}>
      Continue with Google
    </Button>
  )
}

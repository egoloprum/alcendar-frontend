import { Button } from '@/src/shared/components'
import { Link } from 'expo-router'
import React from 'react'

export const GoToWhereWasLeftOnBtn = ({}) => {
  return (
    <Link href="/" asChild>
      <Button title="Go to where was left on" variant="primary" />
    </Link>
  )
}

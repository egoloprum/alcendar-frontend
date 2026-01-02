import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import React from 'react'

import { Button } from '@/src/shared/components'
import { removeAuthTokens } from '@/src/shared/utils'

import { signoutUser } from './api/auth'

export const AuthSignoutBtn = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: signoutUser,
    onSuccess: () => {
      removeAuthTokens()
      router.replace('/')
    },
    onSettled: () => {
      queryClient.invalidateQueries()
    },
    onError: error => {
      console.error('Sign out failed:', error)
    }
  })

  const handlePress = () => {
    console.log('sign out pressed')
    mutation.mutate()
  }

  return (
    <Button onPress={handlePress} loading={mutation.isPending} disabled={mutation.isPending}>
      Sign out
    </Button>
  )
}

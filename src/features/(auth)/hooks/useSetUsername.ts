import { useMutation } from '@tanstack/react-query'
import { setUsername } from '../api/set-username'

export function useSetUsername() {
  return useMutation({
    mutationFn: setUsername,
  })
}

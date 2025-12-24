import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../api/login'
import { LoginFormValues } from '../schemas/login.schema'

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginFormValues) => loginUser(data)
  })
}

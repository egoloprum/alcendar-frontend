import { useMutation } from '@tanstack/react-query'
import { signupUser } from '../api/signup'
import { SignupFormValues } from '../schemas/signup.schema'

export function useSignup() {
  return useMutation({
    mutationFn: (data: SignupFormValues) => signupUser(data),
  })
}

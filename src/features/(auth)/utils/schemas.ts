import { z } from 'zod'

const emailSchema = z.string().email()
const passwordSchema = z.string().min(8)
const tokenSchema = z.string().length(6)

export const SignupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })

export const SigninSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})

export const OtpSchema = z.object({
  email: emailSchema,
  token: tokenSchema
})

export type SignupFormValues = z.infer<typeof SignupSchema>
export type SigninFormValues = z.infer<typeof SigninSchema>
export type OtpFormValues = z.infer<typeof OtpSchema>

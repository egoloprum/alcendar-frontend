import { z } from 'zod'

export const otpSchema = z.object({
  token: z.string().length(6, 'Enter 6-digit code'),
})

export type OtpFormValues = z.infer<typeof otpSchema>

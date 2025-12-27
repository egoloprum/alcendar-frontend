export type ApiResponse<T = unknown> = {
  success: boolean
  message: string
  data?: T
  error?: {
    code: string
    message: string
    details?: string
  }
}

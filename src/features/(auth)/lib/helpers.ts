const passwordCriteria = {
  minLength: 8,
  maxLength: 50,
  hasNumber: /\d/,
  hasLowercase: /[a-z]/,
  hasUppercase: /[A-Z]/,
} as const

export const validatePassword = (value: string): string => {
  if (!value) return ''
  if (value.length < passwordCriteria.minLength)
    return `Password must be at least ${passwordCriteria.minLength} characters`
  if (value.length > passwordCriteria.maxLength)
    return `Password must be less than ${passwordCriteria.maxLength} characters`
  if (!passwordCriteria.hasNumber.test(value)) return 'Password must contain at least one number'
  if (!passwordCriteria.hasLowercase.test(value))
    return 'Password must contain at least one lowercase letter'
  if (!passwordCriteria.hasUppercase.test(value))
    return 'Password must contain at least one uppercase letter'
  return ''
}

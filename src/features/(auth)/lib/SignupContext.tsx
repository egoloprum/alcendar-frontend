import { createContext, useContext, useState } from 'react'

interface SignupData {
  username: string
  password: string
  isRemembered?: boolean
  email: string
  isEmailRequired?: boolean
  birthday: string
}

interface SignupContextType {
  data: SignupData
  update: (patch: Partial<SignupData>) => void
}

const SignupContext = createContext<SignupContextType | null>(null)

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<SignupData>({
    username: '',
    password: '',
    isRemembered: false,
    email: '',
    isEmailRequired: false,
    birthday: '',
  })

  const update = (patch: Partial<SignupData>) =>
    setData(prev => ({
      ...prev,
      ...patch,
    }))

  return <SignupContext.Provider value={{ data, update }}>{children}</SignupContext.Provider>
}

export function useSignup() {
  const context = useContext(SignupContext)

  if (!context) {
    throw new Error('useSignup must be used within a SignupProvider')
  }

  return context
}

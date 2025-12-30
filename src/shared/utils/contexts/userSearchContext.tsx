import { User } from '@/src/entities/user'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react'

type UserSearchContextValue = {
  users: User[] | null
  setUsers: Dispatch<SetStateAction<User[] | null>>
  searchParam: string
  setSearchParam: Dispatch<SetStateAction<string>>
}

const UserSearchContext = createContext<UserSearchContextValue | undefined>(undefined)

export function UserSearchProvider({ children }: PropsWithChildren) {
  const [searchParam, setSearchParam] = useState<string>('')
  const [users, setUsers] = useState<User[] | null>(null)

  return (
    <UserSearchContext.Provider
      value={{
        users,
        setUsers,
        searchParam,
        setSearchParam
      }}>
      {children}
    </UserSearchContext.Provider>
  )
}

export function useUserSearchContext() {
  const context = useContext(UserSearchContext)
  if (!context) {
    throw new Error('useUserSearchContext must be used within UserSearchProvider')
  }
  return context
}

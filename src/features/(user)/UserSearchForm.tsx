import { User } from '@/src/entities/user'
import { Input } from '@/src/shared/components'
import { Search } from 'lucide-react-native'
import React, { Dispatch } from 'react'

export const UserSearchForm = ({
  setUsers
}: {
  setUsers: Dispatch<React.SetStateAction<User[] | null>>
}) => {
  return <Input placeholder="Search" leftElement={<Search />} />
}

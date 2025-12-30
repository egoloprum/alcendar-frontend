import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react-native'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { getSearchUser } from '@/src/entities/user'
import { Input } from '@/src/shared/components'
import { useUserSearchContext } from '@/src/shared/utils/contexts'
import { useDebounce } from '@/src/shared/utils/hooks'

export const UserSearchForm = () => {
  const { searchParam, setSearchParam, setUsers } = useUserSearchContext()

  const { watch, setValue } = useForm({
    defaultValues: {
      searchTerm: searchParam || ''
    }
  })

  const currentSearchTerm = watch('searchTerm')
  const debouncedSearchTerm = useDebounce(currentSearchTerm, 500)

  const { data } = useQuery({
    queryKey: ['search-user', debouncedSearchTerm],
    queryFn: () => getSearchUser(debouncedSearchTerm!),
    enabled: !!debouncedSearchTerm,
    retry: false
  })

  useEffect(() => {
    setUsers(data?.users ?? null)
  }, [data, setUsers])

  return (
    <Input
      placeholder="Search"
      leftElement={<Search size={20} color="gray" />}
      value={watch('searchTerm')}
      onChangeText={text => {
        setValue('searchTerm', text)
        setSearchParam(text)
      }}
    />
  )
}

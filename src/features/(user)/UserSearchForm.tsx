import { Input } from '@/src/shared/components'
import { Search } from 'lucide-react-native'
import { useForm } from 'react-hook-form'

import { useEffect } from 'react'
import { useUserSearchContext } from '@/src/shared/utils/contexts'
import { useDebounce } from '@/src/shared/utils/hooks'

export const UserSearchForm = () => {
  const { searchParam, setSearchParam } = useUserSearchContext()

  const { watch, setValue } = useForm({
    defaultValues: {
      searchTerm: searchParam || ''
    }
  })

  const currentSearchTerm = watch('searchTerm')
  const debouncedSearchTerm = useDebounce(currentSearchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      setSearchParam(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, setSearchParam])

  return (
    <Input
      placeholder="Search"
      leftElement={<Search size={20} color="gray" />}
      value={watch('searchTerm')}
      onChangeText={text => setValue('searchTerm', text)}
    />
  )
}

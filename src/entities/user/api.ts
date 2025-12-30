import { api } from '@/src/shared/utils'

import { User } from './types'

interface SearchResponse {
  users: User[] | null
}

export async function getRecentSearchUser() {
  return await api.get<SearchResponse>('/users/recent-searches', { auth: true })
}

export async function getSearchUser(searchTerm: string) {
  return await api.get<SearchResponse>(`/users/search?q=${searchTerm}`, { auth: true })
}

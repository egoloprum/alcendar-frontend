import { api } from '@/src/shared/utils'

export async function getRecentSearchUser() {
  return await api.get('/users/recent-searches')
}

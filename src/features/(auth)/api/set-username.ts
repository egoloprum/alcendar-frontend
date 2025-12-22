import { getSession } from '@/src/shared/utils'

export async function setUsername(username: string) {
  const session = await getSession()
  if (!session) throw new Error('No session found')

  const res = await fetch('/auth/username', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({ username }),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Failed to set username')
  }

  return res.json()
}

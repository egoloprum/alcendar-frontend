import React from 'react'

import { AuthSignoutBtn } from '@/src/features/(auth)'
import { Container } from '@/src/shared/components'

export default function Index() {
  return (
    <Container>
      <AuthSignoutBtn />
    </Container>
  )
}

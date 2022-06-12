import React, { FC } from 'react'
import { Container } from './styles'
import AppRouter from '../AppRoutes/AppRouter'

const App: FC = () => {
  return (
    <Container>
      <AppRouter />
    </Container>
  )
}

export default App
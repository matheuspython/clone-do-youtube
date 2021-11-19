import  React  from 'react'
import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main'

import { Container } from './styles/appStyles'

export const App:React.FC = () => {

  return (
    <Container>
      <Header />
      <Aside />
      <Main />
    </Container>
  )
}


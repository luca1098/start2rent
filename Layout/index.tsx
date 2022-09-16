import React from 'react'
import Navbar from '../components/shared/Navbar'
import { LayoutI } from '../Interfaces/layout'
import { Container } from '../kit/Layout'
import { navbarLinks } from './utils'

const Layout:React.FC<LayoutI> = ({children}) => {
  return (
    <div>
      <Navbar links={navbarLinks}/>
        <Container>
        {children}
        </Container>
    </div>
  )
}

export default Layout
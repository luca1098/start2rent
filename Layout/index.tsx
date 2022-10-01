import React from 'react'
import Navbar from '../components/shared/Navbar'
import { LayoutI } from '../Interfaces/layout'
import { navbarLinks } from './utils'

const Layout:React.FC<LayoutI> = ({children}) => {
  return (
    <div>
      <Navbar links={navbarLinks}/>
        {children}
    </div>
  )
}

export default Layout
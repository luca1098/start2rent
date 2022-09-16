import Link from 'next/link'
import React from 'react'
import { MenuLinkI } from '../../../Interfaces/navbar'
import { NavLink } from './styles'

const NavbarLink:React.FC<MenuLinkI> = ({href, label, onClick}) => 
  <Link href={href}>
    <NavLink onClick={onClick}>{label}</NavLink>
  </Link>

export default NavbarLink
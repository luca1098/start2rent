import Link from 'next/link'
import React from 'react'
import { MenuLinkI } from '../../../Interfaces/navbar'
import { NavLink } from './styles'

const NavbarLink:React.FC<MenuLinkI> = ({
  href, 
  label, 
  onClick, 
  isButton
}) => 
  <Link href={href}>
      <NavLink onClick={onClick} isButton={isButton}>
        <a>{label} </a>
      </NavLink>
  </Link>

export default NavbarLink
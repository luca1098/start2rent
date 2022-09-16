import Link from 'next/link'
import React, { useState, useRef, useEffect, useCallback} from 'react'
import { NavbarI } from '../../../Interfaces/navbar'
import NavbarLink from './NavbarLink'
import { 
  HeaderNav, 
  Nav, 
  NavLinkWrapper, 
  BurgerButton, 
  Overlay 
} from './styles'


const Navbar:React.FC<NavbarI> = ({links}) => {
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false)
  const navLinkWrapperRef = useRef<HTMLUListElement | null>(null)
  const burgerRef = useRef<HTMLButtonElement | null>(null)

  const handleClickOutisde = useCallback((e:MouseEvent) => {
    const el = navLinkWrapperRef?.current
    const elButton = burgerRef?.current
    const containWrapper = !el || el.contains(e.target as Node )
    const containBtn= !elButton || elButton.contains(e.target as Node )
    if (containWrapper || containBtn) return
    isBurgerOpen && setIsBurgerOpen(!isBurgerOpen)
  }, [isBurgerOpen])


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutisde);
    () => document.removeEventListener('mousedown', handleClickOutisde);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBurgerOpen])

  return (
    <HeaderNav>
      <Nav>
      {isBurgerOpen && <Overlay />}
      <Link href={'/'}>Logo</Link>
        <NavLinkWrapper 
          isBurgerOpen={isBurgerOpen} 
          ref={navLinkWrapperRef}
        >
        {links.map( link => 
          <NavbarLink 
            key={link.label} 
            href={link.href} 
            label={link.label} 
            onClick={() => setIsBurgerOpen(false)}
          />
        )}
        </NavLinkWrapper>
        <BurgerButton 
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          ref={burgerRef}
          >
            x
        </BurgerButton>
      </Nav>
    </HeaderNav>
  )
}

export default Navbar
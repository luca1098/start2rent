import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect, useCallback, Fragment} from 'react'
import { NavbarI } from '../../../Interfaces/navbar'
import Button from '../../../kit/Button'
import { Container } from '../../../kit/Layout'
import Burger from './Burger'
import NavbarLink from './NavbarLink'
import { 
  HeaderNav, 
  Nav, 
  NavLinkWrapper,  
  Overlay 
} from './styles'
import Logo from '../../../assets/logo/logo.png'

const Navbar:React.FC<NavbarI> = ({links}) => {
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false)
  const [ showShadow, setShowShadow ] = useState(false)
  const navLinkWrapperRef = useRef<HTMLUListElement | null>(null)
  const burgerRef = useRef<HTMLButtonElement | null>(null)

  const handleClickOutisde = useCallback((e:MouseEvent) => {
    const el = navLinkWrapperRef?.current
    const elButton = burgerRef?.current
    const containWrapper = !el || el.contains(e.target as Node )
    const containBtn = !elButton || elButton.contains(e.target as Node )
    if (containWrapper || containBtn) return
    isBurgerOpen && setIsBurgerOpen(!isBurgerOpen)
  }, [isBurgerOpen])

  const handleShowShadow = () => {
    window.pageYOffset > 100 
      ? setShowShadow(true)
      : setShowShadow(false) 
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutisde);
    () => document.removeEventListener('mousedown', handleClickOutisde);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBurgerOpen])

  useEffect(() => {
    document.addEventListener('scroll', handleShowShadow);
    () => document.removeEventListener('scroll', handleShowShadow);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <HeaderNav showShadow={showShadow} >
      <Container>
        <Nav>
        {isBurgerOpen && <Overlay />}
        <Link href={'/'}>

          <Image src={Logo} alt={'Start2Rent logo'} width={'120px'} height={'40px'}/>
        </Link>
          <NavLinkWrapper 
            isBurgerOpen={isBurgerOpen} 
            ref={navLinkWrapperRef}
          >
          {links.map( link => 
            <Fragment key={link.label}>
              <NavbarLink 
                href={link.href} 
                label={link.label} 
                isButton={link.isButton}
                onClick={() => setIsBurgerOpen(false)}
              />
            </Fragment>
          )}
          </NavLinkWrapper>
          <Burger 
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            buttonRef={burgerRef}
            isActive={isBurgerOpen}
          />
        </Nav>
      </Container>
    </HeaderNav>
  )
}

export default Navbar
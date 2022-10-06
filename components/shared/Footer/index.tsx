import Link from 'next/link'
import React from 'react'
import { NavbarI } from '../../../Interfaces/navbar'
import { Container, Flex, Wrapper } from '../../../kit/Layout'
import { ThirdTitle } from '../../../kit/Text'
import { FooterWrapper } from './styles'

const Footer:React.FC<NavbarI> = ({links}) => {
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <Wrapper size='1/3'>
            <Flex direction='column'>
              <Link href='/'>
                Logo
              </Link>
              <a href='mailto:info@start2rentmanagement.com'> info@start2rentmanagement.com</a>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3'>
            <Flex direction='column' align='center'>
              <ThirdTitle>Menu</ThirdTitle>
              <ul>
                {links.map(link => 
                  <li key={link.label}>
                    <Link href={link.href}><a>{link.label}</a></Link>
                  </li>  
                )}
              </ul>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3'>
            <Flex direction='column' align='center'>
              <ThirdTitle>Social</ThirdTitle>
              <ul>
                {links.map(link => 
                  <li key={link.label}>
                    <Link href={link.href}><a>{link.label}</a></Link>
                  </li>  
                )}
              </ul>
            </Flex>
          </Wrapper>
        </Flex>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
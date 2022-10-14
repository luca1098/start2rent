import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavbarI } from '../../../Interfaces/navbar'
import { Container, Flex, Wrapper } from '../../../kit/Layout'
import { Paragraph, ThirdTitle } from '../../../kit/Text'
import { FooterWrapper, FooterMenuUL, SocialBox } from './styles'
import Logo from '../../../assets/logo/logo-h.png'
import { socialsFooterCofig } from './config'

const Footer:React.FC<NavbarI> = ({links}) => {
  const year = new Date().getFullYear()
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <Wrapper size='1/3' fullOnMobile  margin='0 0 30px'>
            <Flex direction='column' align='center'>
              <Link href='/' passHref>
                <a>
                  <Image src={Logo} alt={'Logo start2rent footer'} height={180} width={150} />
                </a>
              </Link>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3' fullOnMobile  margin='0 0 30px'>
            <Flex direction='column' align='center'>
              <ThirdTitle mBottom='20px'>Menu</ThirdTitle>
              <FooterMenuUL>
                {links.map(link => 
                  <li key={link.label}>
                    <Link href={link.href} passHref><a>{link.label}</a></Link>
                  </li>  
                )}
              </FooterMenuUL>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3' fullOnMobile margin='0 0 30px'>
            <Flex direction='column' align='center'>
              <ThirdTitle mBottom='20px'>Social</ThirdTitle>
              <Flex justify='center'>
                {socialsFooterCofig.map(s => {
                  const {icon:Icon, link, id} = s || {}
                  return (
                    <SocialBox href={link} target={'_blank'} key={id}>
                      <Icon size={25} />
                    </SocialBox>
                  )
                })}
              </Flex>
            </Flex>
          </Wrapper>
        </Flex>
        <Flex justify='center' margin='10px 0'>
          <Paragraph size='sm'align='center'>&copy;{` Copyright - start2rent ${year}`}</Paragraph>
        </Flex>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
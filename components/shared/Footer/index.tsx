import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavbarI } from '../../../Interfaces/navbar'
import { Container, Flex, Wrapper } from '../../../kit/Layout'
import { Paragraph, ThirdTitle } from '../../../kit/Text'
import { FooterWrapper, FooterMenuUL, SocialBox } from './styles'
import Logo from '../../../assets/logo/logo-h.png'
import { IconInstagram, IconMail, IconWhatsapp } from '../../../kit/Icons'

const socialsFooterCofig = [
  {icon:IconInstagram, link:''},
  {icon:IconWhatsapp, link:''},
  {icon:IconMail, link:'mailto:info@start2rent.com'},
]

const Footer:React.FC<NavbarI> = ({links}) => {
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <Wrapper size='1/3' fullOnMobile  margin='0 0 30px'>
            <Flex direction='column' align='center'>
              <Link href='/'>
                <Image src={Logo} alt={'Logo start2rent footer'} height={180} width={150} />
              </Link>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3' fullOnMobile  margin='0 0 30px'>
            <Flex direction='column' align='center'>
              <ThirdTitle mBottom='20px'>Menu</ThirdTitle>
              <FooterMenuUL>
                {links.map(link => 
                  <li key={link.label}>
                    <Link href={link.href}><a>{link.label}</a></Link>
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
                  const {icon:Icon, link} = s
                  return (
                    <SocialBox href={link} target={'_blank'}>
                      <Icon size={25} />
                    </SocialBox>
                  )
                })}
              </Flex>
            </Flex>
          </Wrapper>
        </Flex>
        <Flex justify='center' margin='10px 0'>
          <Paragraph size='sm'align='center'>&copy; Copyright - start2rent 2022</Paragraph>
        </Flex>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
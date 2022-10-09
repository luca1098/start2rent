import React from 'react'
import Box from '../../kit/Box'
import Button from '../../kit/Button'
import { Container, Flex } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle, UnderlineText } from '../../kit/Text'
import NavbarLink from '../shared/Navbar/NavbarLink'
import { sectionId, services } from './config'
import { WhyUsSection, Emoticon, UnderlineSmall } from './styles'

const WhyUs:React.FC = () => {
  return (
    <WhyUsSection id={sectionId.whyUs}>
      <Container>
        <SecondaryTitle align='center'>I vantaggi di averci come<UnderlineSmall> partner <span /> </UnderlineSmall></SecondaryTitle>
        <Paragraph align='center' mTop='30px'>
          Il nostro Team si forma quotidianamente sui nuovi trend e sul come rendere il tuo appartamento più appetibile possibile. 
          Offriamo <UnderlineText> garanzie, assicurazioni e assistenza <span /></UnderlineText> che ogni proprietario sognerebbe di avere con un affitto tradizionale. <br /> <br/>
        </Paragraph>
        <Flex justify='between' margin='50px 0 0' >
          {services.map( (i, index) => {
            return (
              <Box key={index} size={'1/3'} withShadow>
                <Flex align='center' direction='column' justify='between'> 
                  <Emoticon>{i.emoticon}</Emoticon>
                  <ThirdTitle align='center' mTop='1rem' mBottom='1rem'>{i.title}</ThirdTitle>
                  <Paragraph align='center'>{i.body}</Paragraph>
                </Flex>
              </Box>
            )
          })}
        </Flex>
        <Flex justify='center' margin='30px 0'>
          <NavbarLink 
            label='Entra in contatto'
            href={`/#${sectionId.contact}`} 
            isButton
          />
        </Flex>
      </Container>
    </WhyUsSection>
  )
}

export default WhyUs
import React, { FC } from 'react'
import ImageComponent from '../../../kit/Image'
import { Container, Flex, Section, Wrapper } from '../../../kit/Layout'
import { Paragraph, SecondaryTitle } from '../../../kit/Text'
import { UnderlineSmall } from '../styles'
import ContactForm from './ContactForm'
import ContactImage from '../../../assets/img/mail-img.png'


const SectionContatto:FC = () => {
  return (
    <Section background='primary'>
    <Container>
      <SecondaryTitle align='center'>Ottieni la tua valutazione <UnderlineSmall>gratuita! <span/></UnderlineSmall></SecondaryTitle>
      <Paragraph align='center' mBottom='1rem' mTop='.5rem' >
          Descrivi al meglio il tuo appartemento!
      </Paragraph>
      <Flex justify='center'>
        <Wrapper size='1/2'>
          <ImageComponent src={ContactImage} alt='start2rent contattaci imagine' />
        </Wrapper>
        <Wrapper size='1/2'>
          <ContactForm />
        </Wrapper>
      </Flex>
    </Container>
  </Section>
  )
}

export default SectionContatto
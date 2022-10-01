import React, { FC } from 'react'
import { Container, Flex, Section, Wrapper } from '../../../kit/Layout'
import { Paragraph, SecondaryTitle } from '../../../kit/Text'
import ContactForm from './ContactForm'


const SectionContatto:FC = () => {
  return (
    <Section background='secondary'>
    <Container>
      <SecondaryTitle secondary align='center'>Entiamo in conttatto!</SecondaryTitle>
      <Flex justify='center'>
        <Wrapper size='2/3'>
          <Paragraph align='center' mBottom='1rem' mTop='.5rem' secondary>
          Descrivi il tuo appartemento e ricevi una valutazione gratuita!
          </Paragraph>
          <ContactForm />
        </Wrapper>
      </Flex>
    </Container>
  </Section>
  )
}

export default SectionContatto
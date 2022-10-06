import React, { FC } from 'react'
import { Container, Flex, Section, Wrapper } from '../../../kit/Layout'
import { Paragraph, SecondaryTitle, UnderlineText } from '../../../kit/Text'
import { socialConfig } from '../config'
import SocialBox from './SocialBox'

const SectionSocial:FC = () => {
  return (
    <Section background='base'>
      <Container>
        <Flex justify='center'>
        <Wrapper size='2/3'>
             <SecondaryTitle align='center'>Vuoi maggiori informazioni?</SecondaryTitle>
            <Paragraph align='center' mBottom='1rem' mTop='.5rem'>
              Scrivici comodamente su <UnderlineText> WhatsApp <span /> </UnderlineText> o sui nostri <UnderlineText>canali social<span /></UnderlineText>
            </Paragraph>
            <SocialBox socials={socialConfig} />
          </Wrapper>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionSocial
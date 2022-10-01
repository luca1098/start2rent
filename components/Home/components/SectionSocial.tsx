import React, { FC } from 'react'
import { Container, Flex, Section, Wrapper } from '../../../kit/Layout'
import { Paragraph } from '../../../kit/Text'
import { socialConfig } from '../config'
import SocialBox from './SocialBox'

const SectionSocial:FC = () => {
  return (
    <Section>
      <Container>
        <Flex justify='center'>
        <Wrapper size='2/3'>
            <Paragraph align='center' mBottom='1rem' mTop='.5rem'>
              Vuoi maggiori informazioni? <br />
              Scrivici comodamente su WhatsApp o sui nostri canali social
            </Paragraph>
            <SocialBox socials={socialConfig} />
          </Wrapper>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionSocial
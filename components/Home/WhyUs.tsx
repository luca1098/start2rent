import React from 'react'
import Box from '../../kit/Box'
import Button from '../../kit/Button'
import { Container, Flex } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle } from '../../kit/Text'
import { services } from './config'
import { WhyUsSection, Emoticon } from './styles'

const WhyUs:React.FC = () => {
  return (
    <WhyUsSection>
      <Container>
        <SecondaryTitle align='center'>I vantaggi di averci come partner</SecondaryTitle>
        <Paragraph align='center' mTop='30px'>
          Il nostro Team si forma quotidianamente sui nuovi trend e sul come rendere il tuo appartamento più appetibile possibile. <br/> <br/>
          <b>Offriamo garanzie, assicurazioni e assistenza </b> che ogni proprietario sognerebbe di avere con un affitto tradizionale. <br /> <br/>
         <b> Puntiamo al successo del tuo immobile mantenendolo in ottimo stato e prendendocene cura a 360° </b>
        </Paragraph>
        <Flex justify='between' margin='50px 0 0' >
          {services.map( (i, index) => {
            return (
              <Box key={index} size={'1/3'} color={i.color}>
                <Flex align='center' direction='column'>
                  <Emoticon>{i.emoticon}</Emoticon>
                  <ThirdTitle align='center' mTop='1rem' mBottom='1rem'>{i.title}</ThirdTitle>
                  <Paragraph align='center'>{i.body}</Paragraph>
                </Flex>
              </Box>
            )
          })}
        </Flex>
        <Flex justify='center' margin='30px 0'>
          <Button label='Entra in contatto' onClick={() => {}} />
        </Flex>
      </Container>
    </WhyUsSection>
  )
}

export default WhyUs
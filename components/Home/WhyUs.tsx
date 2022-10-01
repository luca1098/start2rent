import React from 'react'
import Box from '../../kit/Box'
import { Container, Flex } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle } from '../../kit/Text'
import { services } from './config'
import { WhyUsSection, Emoticon } from './styles'

const WhyUs:React.FC = () => {
  return (
    <WhyUsSection>
      <Container>
        <SecondaryTitle>I vantaggi di averci come partner</SecondaryTitle>
        <Paragraph mBottom='30px' mTop='30px'>
          Il nostro Team si forma quotidianamente sui nuovi trend e sul come rendere il tuo appartamento più appetibile possibile. 
          Offriamo garanzie, assicurazioni e assistenza che ogni proprietario sognerebbe di avere con un affitto tradizionale. <br /> 
          Puntiamo al successo del tuo immobile mantenendolo in ottimo stato e prendendocene cura a 360° 
        </Paragraph>
        <Flex justify='between'>
          {services.map( (i, index) => {
            // const Icon = i.icon
            return (
              <Box key={index} size={'1/3'}>
                <Flex direction='column' align='center'>
                  {/* <Icon size={50} color='#1E6844'/> */}
                  <Emoticon>{i.emoticon}</Emoticon>
                  <ThirdTitle align='center' mTop='1rem' mBottom='1rem'>{i.title}</ThirdTitle>
                  <Paragraph align='center'>{i.body}</Paragraph>
                </Flex>
              </Box>
            )
          })}
        </Flex>
      </Container>
    </WhyUsSection>
  )
}

export default WhyUs
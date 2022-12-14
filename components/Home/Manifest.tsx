import React from 'react'
import Box from '../../kit/Box'
import Button from '../../kit/Button'
import { Container, Flex, Section } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle } from '../../kit/Text'
import NavbarLink from '../shared/Navbar/NavbarLink'
import { sectionId, statistiche } from './config'
import { UnderlineSmall, Percentage } from './styles'


const Manifest:React.FC = () => {
  return (
    <Section background='base' id={sectionId.business}>
      <Container>
        <Flex direction='column' align='center'>
          <SecondaryTitle 
            align='center' 
            color='secondary'
              
          >Conosci il <UnderlineSmall> Business  <span /></UnderlineSmall></SecondaryTitle>
          <Paragraph align='center' mBottom='30px'mTop='30px'>
            L’affitto breve consiste in una <b>modalità innovativa di locazione, basata su periodi di soggiorno brevi </b>che danno la possibilità al proprietario di monetizzare più velocemente e in maniera sicura ed efficace eliminando le problematiche derivanti dall’affitto classico 
          </Paragraph>
          <Container>
            <Flex justify='between'>
              {statistiche.map(s => 
                <Box key={s.title} size={'1/3'} withShadow={false} fullOnMobile>
                  <Flex align='center' direction='column'> 
                    <ThirdTitle align='center'>{s.title}</ThirdTitle>
                    <Paragraph align='center' size='sm'>{s.shortCopy}</Paragraph>
                    <Percentage>{s.percentuale}</Percentage>
                  </Flex>
                </Box>  
              )}
              </Flex>
            </Container>
          <Paragraph align='center' mBottom='30px'mTop='30px'>
          Questi numeri confermano ancora una volta il <b>successo di questo bussines. </b><br />
            Se sei anche tu interessato contatta gratuitamente il nostro team! Faremo un attenta e minuziosa valutazione del tuo immobile, 
            così da capire insieme se l’affitto breve possa fare a caso tuo!
          </Paragraph>
          <NavbarLink 
            href={`/#${sectionId.contact}`} 
            label={'Ottieni la tua valutazione gratuita!'}
            isButton 
            />
        </Flex>
      </Container>
    </Section>
  )
}

export default Manifest
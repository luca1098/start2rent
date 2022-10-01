import React from 'react'
import Button from '../../kit/Button'
import CountersUp from '../../kit/CounterUp'
import CounterUp from '../../kit/CounterUp'
import { Container, Flex, Section } from '../../kit/Layout'
import { Paragraph, SecondaryTitle } from '../../kit/Text'

const counters = [
  {start:0, end:12300, label:'Nuovi Airbnb'},
  {start:0, end:12300, label:'Proprietari profittevoli'},
  {start:0, end:12300, label:'Crescita del mercato'},
]

const Manifest:React.FC = () => {
  return (
    <Section background='secondary'>
      <Container>
        <Flex direction='column' align='center'>
          <SecondaryTitle 
            align='center' 
            color='secondary'
            secondary  
          >Conosci il Bussines</SecondaryTitle>
          <Paragraph align='center' mBottom='30px'mTop='30px' secondary>
            Gli affitti brevi sono un business in grande crescita in tutta Europa. 🚀<br />
            <b>Solo quest’anno in Italia c’è stato un incremento del () con un tasso di occupazione del (). </b> <br />
            <br />
            Questi numeri sono in forte aumento e confermano ancora una volta il successo di questo bussines. 
            1 proprietario d’immobile su 10 sceglie ogni giorno l’affitto breve come soluzione ideale. 
            Se sei anche tu interessato contatta gratuitamente il nostro team! Faremo un attenta e minuziosa valutazione del tuo immobile, 
            così da capire insieme se l’affitto breve possa fare a caso tuo!
          </Paragraph>
          {/* <CountersUp counters={counters} /> */}
          <Button onClick={() =>{}} label={'Ottieni la tua consulenza gratuita!'}/>
        </Flex>
      </Container>
    </Section>
  )
}

export default Manifest
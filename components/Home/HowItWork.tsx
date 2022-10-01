import React, { FC } from 'react'
import { Container, Flex, Section, Wrapper } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle } from '../../kit/Text'
import { Number } from './styles'

const HowItWork:FC = () => {
  return (
    <Section>
      <Container>
        <SecondaryTitle align='center' mBottom='5rem'>Inizia in 3 semplici passi</SecondaryTitle>
        <Flex justify='between'>
          <Wrapper size='1/3'>
            <Flex noWrap>
            <Number>1</Number>
              <div>
                <ThirdTitle mBottom='1rem'>Valutazione Gratuita dell&apos;immobile</ThirdTitle>
                <Paragraph size='sm'>
                  Descrivici le tue esigenze e le caratteristiche della tua casa, ti daremo una stima del guadagno reale.
                  <br />
                  <b>Gli elementi principali sono sempre due: </b>
                </Paragraph>
                  <ul>
                    <li>Tariffe medie</li>
                    <li>Tassi di occupazione mensili.</li>
                  </ul>
              </div>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3'>
            <Flex noWrap>
            <Number>2</Number>
            <div>
              <ThirdTitle mBottom='1rem'>Firma del contratto</ThirdTitle>
              <Paragraph size='sm'>
                Forniamo massima flessibilità per la stipula e durata di contratto con periodi variabili da 3 mesi ad 1 anno. 
                x grande vantaggio è la mancanza di vincoli di lunghi periodi, senza attese pluriennali come nel caso degli affitti tradizionali
              </Paragraph>
            </div>
            </Flex>
          </Wrapper>
          <Wrapper size='1/3'>
            <Flex noWrap>
              <Number>3</Number>
              <div>
                <ThirdTitle mBottom='1rem'>Avviamento</ThirdTitle>
                <Paragraph size='sm'>
                  Dopo questo punto potrai semplicemente rilassarti e aspettare i primi guadagni.
                </Paragraph>
                  <ul>
                    <li>Avrai assistenza per la messa a punto dell&apos;immobile</li>
                    <li>Presenteremo noi le pratiche burocratiche</li>
                    <li>Faremo fotografie professionali</li>
                    <li>Realizzeremo l'annuncio e sarà pubblicato sui portali più importanti</li>
                  </ul>
                </div>
              </Flex>
          </Wrapper>
        </Flex>
      </Container>
    </Section>
  )
}

export default HowItWork
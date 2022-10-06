import React, { FC } from 'react'
import { Container, Flex, Section } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle } from '../../kit/Text'
import { Number, StepWrapper, UnderlineSmall } from './styles'

const HowItWork:FC = () => {
  return (
    <Section background='base'>
      <Container>
        <SecondaryTitle align='center'>Inizia in <UnderlineSmall>3 semplici passi<span /></UnderlineSmall></SecondaryTitle>
        <Flex justify='between' margin='5rem 0 0'>
          <StepWrapper size='1/3' fullOnMobile>
            <Flex noWrap>
            <Number>1</Number>
              <div>
                <ThirdTitle mBottom='1rem'>✅ Valutazione dell&apos;immobile</ThirdTitle>
                <Paragraph size='sm'>
                  Descrivici le tue esigenze e le caratteristiche della tua casa, ti daremo una stima del guadagno reale.
                  <br />
                  <br/>
                  <b>Gli elementi principali sono sempre due: </b>
                </Paragraph>
                <br/>
                  <ul>
                    <li>Tariffe medie</li>
                    <li>Tassi di occupazione mensili.</li>
                  </ul>
              </div>
            </Flex>
          </StepWrapper>
          <StepWrapper size='1/3' fullOnMobile>
            <Flex noWrap>
            <Number>2</Number>
            <div>
              <ThirdTitle mBottom='1rem'>✍️ Firma del contratto</ThirdTitle>
              <Paragraph size='sm'>
                <b>Forniamo massima flessibilità per la stipula e durata di contratto</b> con periodi variabili da 3 mesi ad 1 anno. 
                <br/><br/>
                Il grande vantaggio è la<b> mancanza di vincoli di lunghi periodi,</b> senza attese pluriennali come nel caso degli affitti tradizionali
              </Paragraph>
            </div>
            </Flex>
          </StepWrapper>
          <StepWrapper size='1/3' fullOnMobile>
            <Flex noWrap>
              <Number>3</Number>
              <div>
                <ThirdTitle mBottom='1rem'>💰 Avviamento</ThirdTitle>
                <Paragraph size='sm'>
                  Dopo questo punto potrai semplicemente rilassarti e aspettare i primi guadagni.
                </Paragraph>
                <br />
                  <ul>
                    <li>Riceverai assistenza per la messa a punto dell&apos;immobile</li>
                    <li>Ci occuperemo delle pratiche burocratiche</li>
                    <li>Realizzeremo fotografie professionali dell&apos;immobile</li>
                    <li>Realizzeremo l&apos;annuncio e sarà pubblicato sui portali più importanti</li>
                  </ul>
                </div>
              </Flex>
          </StepWrapper>
        </Flex>
      </Container>
    </Section>
  )
}

export default HowItWork
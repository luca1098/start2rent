import React, { FC } from 'react'
import { Flex, Section, Wrapper } from '../../kit/Layout'
import { Paragraph, SecondaryTitle, ThirdTitle } from '../../kit/Text'

const HowItWork:FC = () => {
  return (
    <Section>
      <SecondaryTitle align='center'>Inizia in 3 semplici passi</SecondaryTitle>
      <Flex>
        <Wrapper size='1/3'>
          <ThirdTitle>Valutazione Gratuita dell'immobile</ThirdTitle>
          <Paragraph>
            Descrivici le tue esigenze e le caratteristiche della tua casa, 
            ti daremo una stima del guadagno reale considerando lo stato dell’immobile, 
            l’arredamento, le dimensioni, l’ubicazione, appetibilità e stagionalità. 
            Gli elementi principali sono sempre due: tariffe medie e tassi di occupazione mensili.
          </Paragraph>
        </Wrapper>
        <Wrapper size='1/3'>
          <ThirdTitle>Firma del contratto</ThirdTitle>
          <Paragraph>
            ➢ Per poter disporre del proprio appartamento forniamo un contratto con scadenza annua rinnovabile. Il grande vantaggio che otterrai è non essere vincolato per lunghi periodi, non dovrai attendere le scadenze pluriennali degli affitti tradizionali.
            ➢ Il proprietario, nel corso della nostra collaborazione, potrà optare se applicare il regime di cedolare secca (tassazione fissa al 21%) o il regime ordinario (aliquota marginale in base alla fascia di reddito). Tale scelta avviene al momento della dichiarazione dei redditi.
          </Paragraph>
        </Wrapper>
        <Wrapper size='1/3'>
          <ThirdTitle>Avviamento</ThirdTitle>
          <Paragraph>
            Dopo questo punto potrai semplicemente rilassarti e aspettare i primi guadagni.
          </Paragraph>
            <ul>
              <li>Avrai assistenza per la messa a punto dell’immobile</li>
              <li>Presenteremo noi le pratiche burocratiche</li>
              <li>Faremo fotografie professionali</li>
              <li>Realizzeremo l'annuncio e sarà pubblicato sui portali più importanti</li>
            </ul>
        </Wrapper>
      </Flex>
    </Section>
  )
}

export default HowItWork
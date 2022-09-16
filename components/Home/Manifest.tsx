import React from 'react'
import { Section } from '../../kit/Layout'
import { Paragraph, SecondaryTitle } from '../../kit/Text'

const Manifest:React.FC = () => {
  return (
    <Section>
      <SecondaryTitle align='center'>Manifesto</SecondaryTitle>
      <Paragraph align='center'>
        Firenze Blockchain nasce dal bisogno di confronto attraverso degli appuntamenti 
        fisici sotto veste di aperitivi ed incontri costanti. Lo scopo è quello di da creare 
        sinergia di idee, knowledge ed un network solido che abbia voce in capitolo in una delle più belle città 
        d&apos;Italia e del mondo, per tutto quello che riguarda la Blockchain e le nuove tecnologie.
      </Paragraph>
    </Section>
  )
}

export default Manifest
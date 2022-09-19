import React, { FC } from 'react'
import { Flex, Section, Wrapper } from '../../kit/Layout'
import { Paragraph, SecondaryTitle } from '../../kit/Text'

const Contact:FC = () => {
  return (
    <Section>
      <SecondaryTitle>Entiamo in conttatto!</SecondaryTitle>
      <Flex>
        <Wrapper size='1/2'>
          <Paragraph>
            Scirvici su Whatsapp, oppure compila il modulo di contatto!
          </Paragraph>
        </Wrapper>
        <Wrapper size='1/2'> 
          <input type={'text'}/>
        </Wrapper>
      </Flex>
    </Section>
  )
}

export default Contact
import React from 'react'
import Button from '../../kit/Button'
import ImageComponent from '../../kit/Image'
import { Container, Flex, Wrapper } from '../../kit/Layout'
import { Subtitle, Title } from '../../kit/Text'
import HeroImage from '../../assets/img/rent.png'
import { HeroSection } from './styles';


const Hero:React.FC = () => {
  return (
    <HeroSection>
      <Container>
        <Flex align='center'>
          <Wrapper size='1/2'>
            <Title>Guadagna di più con gli affitti brevi!</Title>
            <Subtitle>
              1 proprietario d’immobile su 10 sceglie ogni giorno l’affitto breve come soluzione ideale!
            </Subtitle>
            <Button onClick={() => {}} label={'Contattaci gratuitamente'}/>
          </Wrapper>
          <Wrapper size='1/2'>
            <ImageComponent src={HeroImage} alt={'Affiti brevi image'} />
          </Wrapper>
        </Flex>
      </Container>
    </HeroSection>

  )
}

export default Hero
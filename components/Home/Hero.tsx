import React from 'react'
import Button from '../../kit/Button'
import ImageComponent from '../../kit/Image'
import { Container, Flex, Wrapper } from '../../kit/Layout'
import { Subtitle, Title } from '../../kit/Text'
import HeroImage from '../../assets/img/hero-img.png'
import { HeroSection, HeroWrapperText, Underline } from './styles';


const Hero:React.FC = () => {
  return (
    <HeroSection>
      <Container>
        <Flex align='center'>
          <HeroWrapperText size='1/2'>
            <Title>Guadagna di più con gli <Underline>affitti brevi!<span /> </Underline></Title>
            <Subtitle>
              Puntiamo al successo del tuo immobile mantenendolo in ottimo stato e prendendocene cura a 360° 
            </Subtitle>
            <Button onClick={() => {}} label={'Contattaci gratuitamente'}/>
          </HeroWrapperText>
          <Wrapper size='1/2'>
            <ImageComponent src={HeroImage} alt={'Affiti brevi image'} />
          </Wrapper>
        </Flex>
      </Container>
    </HeroSection>

  )
}

export default Hero
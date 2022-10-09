import React from 'react'
import Button from '../../kit/Button'
import ImageComponent from '../../kit/Image'
import { Container, Wrapper } from '../../kit/Layout'
import { Subtitle, Title } from '../../kit/Text'
import HeroImage from '../../assets/img/hero-img.png'
import { 
  HeroSection, 
  Underline,
  HeroFlex
} from './styles';
import { sectionId } from './config'
import NavbarLink from '../shared/Navbar/NavbarLink'


const Hero:React.FC = () => {
  return (
    <HeroSection id={sectionId.hero}>
      <Container>
        <HeroFlex align='center'>
          <Wrapper size='1/2'>
            <Title>Guadagna di più con gli <Underline>affitti brevi!<span /> </Underline></Title>
            <Subtitle>
              Puntiamo al successo del tuo immobile mantenendolo in ottimo stato e prendendocene cura a 360° 
            </Subtitle>
              <NavbarLink 
                label={'Contattaci gratuitamente'}
                href={`/#${sectionId.contact}`}
                isButton
              />
          </Wrapper>
          <Wrapper size='1/2'>
            <ImageComponent src={HeroImage} alt={'Affiti brevi image'} />
          </Wrapper>
        </HeroFlex>
      </Container>
    </HeroSection>

  )
}

export default Hero
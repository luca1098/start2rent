import styled, { css } from "styled-components";
import { Section } from "../../kit/Layout";

export const HeroSection = styled(Section)`
  min-height:80vh;
  display:flex;
  align-items:center;
  ${({theme}) => css`
    background:${theme.background.primary} center center;
    background-image: url('/img/hero-bg.png');
    background-position: center, center;
    background-size:cover, contain ;
  `};
`
export const WhyUsSection = styled(Section)`
  min-height:80vh;
  display:flex;
  padding:50px 0 0 ;
  align-items:center;
  ${({theme}) => css`
    /* background-image: url('/img/secondary-bg.png'); */
    background-position: center, center;
    background-size:cover, contain ;
  `};
`

export const Number = styled.span`
  position:relative ;
  bottom:50px;
  left:20px;
  opacity:.5;
  font-size:9rem;
  font-weight:700;
  background: linear-gradient(180deg, rgba(30,104,68,1) 10%, rgba(255,255,255,0) 100%);
  background-clip:text;
  -webkit-background-clip: text;
  color: transparent;
`

export const Emoticon = styled.span`
  font-size:4rem;
`

export const SocialLink = styled.a`
  margin-top:10px;
`
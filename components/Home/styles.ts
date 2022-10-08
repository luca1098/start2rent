import styled, { css } from "styled-components";
import { Flex, Section, Wrapper } from "../../kit/Layout";
import { breakpoint } from "../../styles/theme";

export const HeroSection = styled(Section)`
  min-height:80vh;
  display:flex;
  align-items:center;
  ${({theme}) => css`
    background:${theme.background.base} center center;
    /* background-image: url('/img/hero-bg.png'); */
    background-position: center, center;
    background-size:cover, contain ;
  `};
`
export const HeroFlex = styled(Flex)`
  @media(max-width:${breakpoint.lg}){
    flex-direction: column-reverse ;
  }
`
export const Underline = styled.span`
display:block ;
z-index:3;
  span{
    height:60px ;
    display:block;
    z-index:-1;
    margin-top:-60px ;
    ${({theme}) => css`
      background: ${theme.details.primary};
    `}
  }
`
export const UnderlineSmall = styled.span`
  position:relative;
  z-index:2;
  span{
    position:absolute;
    right:0 ;
    left:0px ;
    bottom:0px ;
    height:30px ;
    z-index:-1;
    ${({theme}) => css`
      background: ${theme.details.primary};
    `}
  }
`
export const WhyUsSection = styled(Section)`
  min-height:80vh;
  display:flex;
  padding:50px 0 0 ;
  align-items:center;
`

export const Number = styled.span`
  position:relative ;
  bottom:50px;
  left:20px;
  z-index:-1;
  opacity:.8;
  font-size:9rem;
  font-weight:700;
  background: linear-gradient(180deg, rgba(201,247,103,1) 10%, rgba(255,255,255,0) 100%);
  background-clip:text;
  -webkit-background-clip: text;
  color: transparent;
  @media(max-width:${breakpoint.lg}){
    bottom:0px;
    font-size:6rem;
    left:0px;
  }
`
export const StepWrapper = styled(Wrapper)`
  @media(max-width:${breakpoint.lg}){
    &:not(:first-child){
      margin-top:40px ;
    }
  }
`
export const Emoticon = styled.span`
  font-size:4rem;
`

export const SocialLink = styled.a`
  margin-top:10px;
`

export const Percentage = styled.span`
  justify-self:end;
  text-align:center;
  font-weight:700;
  font-size:3rem;
  margin-top:1.5rem;
  font-family:Rubik, sans-serif;
  ${({theme}) => css`
    color: ${theme.color.title.primary};
  `}
`
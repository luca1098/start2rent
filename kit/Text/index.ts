import styled, { css } from "styled-components";
import { TextI } from "../../Interfaces/kit";
import { breakpoint } from "../../styles/theme";
import { getBaseText, LG, MD, SM } from "./helper";


export const Title = styled.h1<TextI>`
  ${({theme, mTop, mBottom, align, secondary}) => {
    const { primary, secondary:colorSecondary } = theme.color.title
    return getBaseText({
      color: secondary ? colorSecondary : primary, 
      mTop, 
      mBottom, 
      align
    })
  }}
  font-size: 3.5rem;
  line-height:1.1;
  @media(max-width:${breakpoint.sm}){
    font-size: 2.5rem;
    text-align:center
  };
  @media(min-width: ${breakpoint.lg}){
    font-size: 5.5rem;
  }

`

export const SecondaryTitle = styled.h2<TextI>`
  position:relative;
  ${({theme, mTop, mBottom, align, secondary }) => {
    const { primary, secondary:colorSecondary } = theme.color.title
    return getBaseText({
      color: secondary ? colorSecondary : primary, 
      mTop, 
      mBottom, 
      align
    })
  }};
  font-size: 3rem;
  @media(max-width:${breakpoint.sm}){
    font-size: 1.8rem;
  };
  
`

export const ThirdTitle = styled.h2<TextI>`
  ${({theme, mTop, mBottom, align }) => {
    const { primary:color } = theme.color.title
    return getBaseText({
      color, 
      mTop, 
      mBottom, 
      align
    })
  }};
  font-size: 1.2rem;
`
export const UnderlineText = styled.span`
display:inline-block;
font-weight:700;
position:relative;
z-index:2;
span{
  position:absolute;
  right:0 ;
  left:0px ;
  bottom:2px ;
  height:10px ;
  z-index:-1;
  ${({theme}) => css`
    background: ${theme.details.primary};
  `}
}
`
export const Subtitle = styled.p`
  font-size:1.3em;
  ${({theme}) => css`
    color: ${theme.color.text.primary};
  `};
  @media(max-width:${breakpoint.sm}){
    text-align:center
  };
  @media(min-width: ${breakpoint.lg}){
    font-size:1.6em;
  }
`
export const Paragraph = styled.p<TextI>`
  ${({theme,  mTop, mBottom, align, secondary }) => {
    const { primary, secondary:colorSecondary } = theme.color.text
    return getBaseText({
      color: secondary ? colorSecondary : primary, 
      mTop, 
      mBottom, 
      align
    })
  }};
  font-size: ${({theme, size}) => {
    const { sm, md, lg } = theme.size.text
    switch(size){
      case SM:
        return sm
      case LG:
        return lg
      case MD:
      default:
        return md
    };
  }};
  @media(max-width: ${breakpoint.sm}){
    font-size: ${({theme, size}) => {
    const { sm, md } = theme.size.text;
    switch(size){
      case LG:
        return md;
      case MD:
      case SM:
      default:
        return sm;
    }
  }};
`

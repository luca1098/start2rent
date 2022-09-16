import styled, { css } from "styled-components";
import { TextI } from "../../Interfaces/kit";
import { getBaseText, LG, MD, SM } from "./helper";


export const Title = styled.h1<TextI>`
  ${({theme, mTop, mBottom, align}) => {
    const { primary:color } = theme.color.title
    return getBaseText({
      color, 
      mTop, 
      mBottom, 
      align
    })
  }}
  font-size: 7rem;
`

export const SecondaryTitle = styled.h2<TextI>`
  ${({theme, mTop, mBottom, align }) => {
    const { primary:color } = theme.color.title
    return getBaseText({
      color, 
      mTop, 
      mBottom, 
      align
    })
  }};
  font-size: 3rem;
`

export const Subtitle = styled.p`
  font-size:1.5rem;
  ${({theme}) => css`
    color: ${theme.color.text.primary};
  `};
`
export const Paragraph = styled.p<TextI>`
  ${({theme,  mTop, mBottom, align }) => {
    const { primary:color } = theme.color.text
    return getBaseText({color, mTop, mBottom, align})
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
    }
  }}
`
import styled, {css} from "styled-components";
import { breakpoint } from "../../styles/theme";
import { Flex } from "../Layout";
import { Paragraph } from "../Text";
interface BaseInputI {
  widthHalf?:boolean
}


export const BaseInput = styled.input<BaseInputI>`
  padding:.5rem 1rem;
  font-size:1.1rem;
  margin-bottom:.5rem;
  ${({theme, widthHalf}) => css`
    width:${widthHalf ? '49.8%' : '100%'}  ;
    border:1px solid ${theme.border.color};
    background:${theme.background.base};
    border-radius:${theme.border.radius};
  `};
  @media(max-width:${breakpoint.sm}){
    width:100%;
  }
`

export const Label = styled.label`
  font-weight:700;
  margin-bottom:10px;
  ${({theme}) => css`
    color:${theme.color.title.primary};
  `};
`
export const BaseSelect = styled.select<BaseInputI>`
  padding:.5rem 1rem;
  font-size:1.1rem;
  margin-bottom:.5rem;
  ${({theme, widthHalf}) => css`
    width:${widthHalf ? '49.8%' : '100%'}  ;
    border:1px solid ${theme.border.color};
    background:${theme.background.base};
    border-radius:${theme.border.radius};
  `};
  @media(max-width:${breakpoint.sm}){
    width:100%;
  }
`

export const CheckboxBase = styled.input`
  ${({theme}) => css`
    border:1px solid ${theme.border.color};
    background:${theme.background.base};
    border-radius:${theme.border.radius};
  `}
`

export const BaseTextArea = styled.textarea`
  padding:.5rem 1rem;
  font-size:1.1rem;
  width:100%;
  margin-bottom:.5rem;
  ${({theme}) => css`
    border:1px solid ${theme.border.color};
    background:${theme.background.base};
    border-radius:${theme.border.radius};
  `}
`

export const Form = styled.form`
  padding:1.5rem ;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap ;
  ${({theme}) => css`
    background:${theme.background.base};
    border-radius:${theme.border.radius};
    box-shadow: 7px 7px 0 ${theme.background.secondary};
  `}
`

export const ErrorLabel = styled(Paragraph)`
  font-weight:700;
  color: red;
`
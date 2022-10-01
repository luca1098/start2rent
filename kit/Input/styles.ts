import styled, {css} from "styled-components";
interface BaseInputI {
  widthHalf?:boolean
}

export const BaseInput = styled.input<BaseInputI>`
  padding:.5rem 1rem;
  margin-bottom:.5rem;
  ${({theme, widthHalf}) => css`
    width:${widthHalf ? '49.8%' : '100%'}  ;
    border:1px solid ${theme.border.color};
    background:${theme.background.primary};
    border-radius:${theme.border.radius};
  `}
`
export const CheckboxBase = styled.input`
  ${({theme}) => css`
    border:1px solid ${theme.border.color};
    background:${theme.background.primary};
    border-radius:${theme.border.radius};
  `}
`

export const BaseTextArea = styled.textarea`
  padding:.5rem 1rem;
  width:100%;
  margin-bottom:.5rem;
  ${({theme}) => css`
    border:1px solid ${theme.border.color};
    background:${theme.background.primary};
    border-radius:${theme.border.radius};
  `}
`

export const Form = styled.form`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap ;
`
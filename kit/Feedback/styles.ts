import styled, { css } from "styled-components";
import { IconClose } from "../Icons";

interface FeedbackI {
  type:'E' | 'S' | 'A';
}

export const FeedbackBase = styled.span<FeedbackI>`
  padding:1rem 2rem 1rem 1rem;
  display:block;
  width:100%;
  margin:20px 0;
  position:relative;
  font-weight:700;
  ${({theme, type}) => css`
    background:${getBackgroundByType(type)};
    border-radius:${theme.border.radius};
  `}
`

export const Close = styled(IconClose)`
  position:absolute ;
  right:15px;
  top:1rem;
  cursor:pointer;
  ${({theme}) => css`
    color:${theme.color.text.primary};
  `}
`


const getBackgroundByType = (type:string) => {
  switch(type){
    case "E":
      return '#ed9e9e';
    case 'A':
      return '#e8c79d';
    case 'S':
    default:
      return '#b8eab4';
  }
}
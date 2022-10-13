import styled, { css, keyframes } from "styled-components";
import { breakpoint } from "../../styles/theme";

interface BaseButtonI {
  secondary?:boolean;
}


export const BaseButton = styled.button<BaseButtonI>`
  padding: .8rem 2rem;
  min-width:150px;
  border: none;
  font-weight:700;
  text-transform:uppercase;
  cursor:pointer;
  ${({theme, secondary}) => css`
    transition: ${theme.transition.default};
    border-radius:${theme.button.border.radius};
    font-size:1rem;
    color:${theme.button[secondary? 'secondary' : 'primary'].text};
    background:${theme.button[secondary? 'secondary' : 'primary'].background};
    &:hover{
      color:${theme.button[secondary? 'secondary' : 'primary'].textHover};
      background:${theme.button[secondary? 'secondary' : 'primary'].backgroundHover};
    };
    &:disabled{
      background:${theme.button[secondary? 'secondary' : 'primary'].background};
      opacity:0.6;
    };
    @media(max-width:${breakpoint.lg}){
      font-size:${theme.size.text.md};
    }
  `}
`

const SvgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;
const CircleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`

export const LoaderSvg = styled.svg`
  animation: 2s linear infinite ${SvgAnimation};
`
export const Circle = styled.circle<BaseButtonI>`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  ${({theme, secondary}) => css`
    stroke:${theme.button[secondary? 'secondary' : 'primary'].text};
  `}
  transform-origin: center;
 
  animation: 2.4s ease-in-out infinite both ${CircleAnimation};  
`


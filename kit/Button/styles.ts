import styled, { css } from "styled-components";
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
    @media(max-width:${breakpoint.lg}){
      font-size:${theme.size.text.md};
    }
  `}
`
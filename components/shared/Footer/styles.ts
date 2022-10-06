import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  padding:50px 0;;
  ${({theme}) => css`
    background:${theme.background.primary} ;
    
  `}
`
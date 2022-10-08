import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  padding:50px 0;;
  ${({theme}) => css`
    background:${theme.background.primary} ;
    
  `}
`

export const FooterMenuUL = styled.ul`
  li{
    list-style:none;    
    font-weight:700;
    margin-bottom:10px;
    
    a{
      ${({theme}) => css`
        color:${theme.color.title.primary};
        text-decoration:none;
      `}
    }
  }
`

export const SocialBox = styled.a`
  padding: .5rem;
  margin:.5rem ;
  ${({theme}) => css`
    background:${theme.background.base} ;
    border-radius:${theme.border.radius} ;
    color:${theme.color.title.primary};
    transition:${theme.transition};
  `};
  &:hover{
    transition:translate(120px, 50%); 
  }
`
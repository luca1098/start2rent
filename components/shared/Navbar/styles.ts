import { RefObject } from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../../styles/theme";
interface NavLinkWrapperI {
  isBurgerOpen: boolean, 
  ref: RefObject<HTMLElement>

}
interface HeaderNavI {
  showShadow:boolean
}
interface NavLinkI {
  isButton?:boolean
  secondary?:boolean
}

export const HeaderNav = styled.header<HeaderNavI>`
  display:flex;
  align-items:center;
  justify-content:center;  
  position:fixed;
  width:100%:
  top:0;
  left:0;
  right:0;
  z-index:999;
  ${({theme}) => css`
    background:${theme.background.base};
  `};
  ${({theme, showShadow}) => showShadow && css`
    box-shadow:${theme.shadow.navbar};
  `};
`
export const Nav = styled.nav`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding .8rem 0;
`

export const NavLink = styled.li<NavLinkI>`
  cursor:pointer;
  margin:0 1.5rem;
  font-weight:700;
  list-style:none;
  ${({theme}) => css`
    @media(max-width:${breakpoint.md}){
      font-size:${theme.size.text.lg};
      padding:0.5rem 0;
      margin:0 0 30px ;
    }
  `}
  a{
    color: ${({theme}) => theme.color.title.primary};
  }
  ${({isButton, theme, secondary}) => isButton && css`
    padding: .8rem 2rem;
    min-width:150px;
    margin: 0;
    border: none;
    a{
      color:${theme.button[secondary? 'secondary' : 'primary'].text};
      font-weight:700;
      text-transform:uppercase;
      font-family:Arial, sans-serif;
      &:hover{
      color:${theme.button[secondary? 'secondary' : 'primary'].textHover};
      background:${theme.button[secondary? 'secondary' : 'primary'].backgroundHover};
    };
    }
    cursor:pointer;
    transition: ${theme.transition.default};
    border-radius:${theme.button.border.radius};
    font-size:1rem;
    text-align: center;
    display: inline-block ;
    background:${theme.button[secondary? 'secondary' : 'primary'].background};

    @media(max-width:${breakpoint.lg}){
      font-size:${theme.size.text.md};
    }
    @media(max-width:${breakpoint.md}){
      padding: .8rem 2rem;
    }
  `}
`

export const NavLinkWrapper = styled.ul<NavLinkWrapperI>`
  display:flex;
  align-items:center;
  overflow:hidden;
  transition: ${({theme}) => theme.transition.default};
  z-index:12;
  ${({isBurgerOpen, theme}) => css`
    @media(max-width:${breakpoint.md}){
      position: fixed;
      width:${isBurgerOpen ? '70%' : '0'};
      left:${isBurgerOpen ? '0' : '-70%'};
      top:0;
      bottom:0;
      height:100%;
      flex-direction:column;
      align-items:start;
      padding:80px 20px;
      background:${theme.background.base};
    }
  `}
`
export const Overlay = styled.div`
  background: #000;
  opacity:.1;
  position:fixed;
  z-index:8;
  transition: all 0.3s ease-im;
  top:0;
  left:0;
  right:0;
  bottom:0;
  @media(min-width:${breakpoint.md}){
    display:none;
  };
`
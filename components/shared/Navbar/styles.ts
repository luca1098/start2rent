import React, { RefObject } from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../../styles/theme";
interface NavLinkWrapperI {
  isBurgerOpen: boolean, 
  ref: RefObject<HTMLElement>

}

export const HeaderNav = styled.header`
  display:flex;
  align-items:center;
  justify-content:center;  
  border:1px solid red;
  position:fixed;
  width:100%:
  top:0;
  left:0;
  right:0;
`
export const Nav = styled.nav`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding .8rem 0;
`

export const NavLink = styled.li`
  cursor:pointer;
  margin:0 1.5rem;
  ${({theme}) => css`
    @media(max-width:${breakpoint.md}){
      font-size:${theme.size.text.lg};
      padding:0.5rem 0;
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
      background:${theme.background.primary};
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
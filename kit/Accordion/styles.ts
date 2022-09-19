import React from 'react'
import styled, { css } from "styled-components";
import { IconPlus } from "../Icons";
import { Flex } from "../Layout";

interface IconPlusI{
  isOpen:boolean;
}

export const AccordionWrapper = styled(Flex)`
  margin:20px 0;
`

export const AccordionHead = styled(Flex)`
  padding:0.8rem 1rem;
  ${({theme}) => css`
    border-bottom:1px solid ${theme.border.color};
  `};
  p{
    margin:0;
  };
`

export const AccordionBody = styled.div`
  padding:1.5rem 1rem;
`

export const Plus = styled(IconPlus)<IconPlusI>`
  cursor: pointer;
  transform: rotate(0.3turn);
  transform: rotate(90deg);
  ${({theme}) => css`
    transition:${theme.transition.default};
  `};
  ${({isOpen}) => isOpen && css`
  `}
`
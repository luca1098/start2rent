import styled, { css } from "styled-components";
import { getAlignJustifyDirection, getSize } from "./helper";
import { breakpoint } from '../../styles/theme'

interface ContainerI {
  background?: 'primary' | 'secondary';
}

interface FlexI {
  align?: 'center'| 'start' | 'end' | 'around' | 'between';
  justify?: 'center'| 'start' | 'end' | 'around' | 'between';
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  margin?: string;
  noWrap?: boolean;
  
}

interface WrapperI {
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3';
  fullOnMobile?: boolean
}
interface SectionI {
  background?: 'primary' | 'secondary' | 'base'
}
export const Container = styled.div<ContainerI>`
  margin:0 auto;
  ${({theme, background}) => css`
    width: ${theme.layout.width};
    background: ${ background ? theme.background[background] : 'transparent'};
    @media(max-width: ${breakpoint.md}){
      width:${theme.layout.widthMedium};
    };
    @media(max-width: ${breakpoint.sm}){
      width:${theme.layout.widthSmall};
    };
  `};
`
export const Section = styled.section<SectionI>`
  padding:50px 0;
  ${({theme, background}) => css`
      background: ${theme.background[background || 'primary']};
  `}
`
export const Flex = styled.div<FlexI>`
  width:100%;
  display:flex;
  ${({align, justify, direction, margin, noWrap }) => css`
    align-items:${getAlignJustifyDirection(align)};
    justify-content:${getAlignJustifyDirection(justify)};
    flex-direction:${direction ? direction : 'row'};
    margin:${margin ? margin : '0'};
    flex-wrap: ${noWrap ? 'no-wrap' : 'wrap'};
  `};
`;

export const Wrapper = styled.div<WrapperI>`
  ${({size, fullOnMobile}) => css`
    width: ${getSize(size, breakpoint.lg, fullOnMobile)};
    @media(max-width: ${breakpoint.md}){
      width: ${getSize(size, breakpoint.md, fullOnMobile)};
    };
    @media(max-width: ${breakpoint.sm}){
      width: ${getSize(size, breakpoint.sm, fullOnMobile)};
    };
  `};
`;
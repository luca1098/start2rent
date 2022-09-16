import { css } from "styled-components";
import { TextI } from "../../Interfaces/kit";

export const SM = 'sm'
export const MD = 'md'
export const LG = 'lg'

export const getBaseText = ({
  color, 
  mTop, 
  mBottom, 
  align
}:TextI) => css`
  color: ${color};
  margin-top: ${mTop ? `${mTop}px` : '0'};
  margin-bottom: ${mBottom ? `${mBottom}px` : '0'};
  text-align:${align ? align : 'left'};
`

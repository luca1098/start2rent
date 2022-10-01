import styled, { css } from "styled-components";
import { Wrapper } from "../Layout";

interface BoxWrapperI{
  color:string
}

export const BoxWrapper = styled(Wrapper)<BoxWrapperI>`
  margin-bottom:20px;
  padding:2rem;
  ${({theme, color}) => css`
    background:${theme.background.base};
    border-radius: ${theme.border.radius};
    border: 1px solid ${'#DCDEDD'};
    box-shadow: 3px 3px 10px ${color};
  `}
`
import styled, { css } from "styled-components";
import { Wrapper } from "../Layout";

interface BoxWrapperI{
  withShadow?:boolean
}

export const BoxWrapper = styled(Wrapper)<BoxWrapperI>`
  margin-bottom:20px;
  align-self:normal;
  padding:2rem;
  ${({theme}) => css`
    background:${theme.background.base};
    border-radius: ${theme.border.radius};
    border: 1px solid ${'#DCDEDD'};
  `}
  ${({theme, withShadow}) => withShadow && css`
    box-shadow:7px 7px 0 ${theme.background.secondary};
  `}
`
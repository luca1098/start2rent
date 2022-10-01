import styled, { css } from "styled-components";
import { Wrapper } from "../Layout";

export const BoxWrapper = styled(Wrapper)`
  margin-bottom:20px;
  display:flex;
  padding:2rem;
  background:transparent ;
  ${({theme}) => css`
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.border.color};
  `}
`
import styled, { css } from "styled-components";
import { Paragraph } from "../Text";

export const CounterLabel = styled(Paragraph)`
  font-weight:700;
`
export const Count = styled.span`
  ${({theme}) => css`
    color: ${theme.color.text.primary};
  `}
`
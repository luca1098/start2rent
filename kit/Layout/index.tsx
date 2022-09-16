import styled, { css } from "styled-components";

export const Container = styled.div`
  margin:0 auto;
  ${({theme}) => css`
    width: ${theme.layout.width}
  `}
`
export const Section = styled.section`
  padding:50px 0;
`
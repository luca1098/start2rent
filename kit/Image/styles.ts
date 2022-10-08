import styled from "styled-components";
import { breakpoint } from "../../styles/theme";

export const ImageWrapper = styled.div`
  position:relative;
  width:100%;
  height:500px ;
  @media(max-width:${breakpoint.lg}){
    height:500px ;
  }
`
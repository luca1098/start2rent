import React, {FC, ReactElement} from 'react'
import { Wrapper } from '../Layout'
import { BoxWrapper } from './styles'

interface BoxI {
  children: ReactElement
  size:"full" | "1/2" | "1/3" | "1/4"
}

const Box:FC<BoxI> = ({children, size}) => {
  return (
    <BoxWrapper size={size}>
      {children}
    </BoxWrapper>
  )
}

export default Box
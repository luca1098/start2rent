import React, {FC, ReactElement} from 'react'
import { BoxWrapper } from './styles'

interface BoxI {
  children: ReactElement
  size:"full" | "1/2" | "1/3" | "1/4"
  color:string
}

const Box:FC<BoxI> = ({children, size, color}) => {
  return (
    <BoxWrapper size={size} color={color}>
      {children}
    </BoxWrapper>
  )
}

export default Box
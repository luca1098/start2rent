import React, {FC, ReactElement} from 'react'
import { BoxWrapper } from './styles'

interface BoxI {
  children: ReactElement
  size:"full" | "1/2" | "1/3" | "1/4"
  withShadow:boolean
  fullOnMobile?:boolean
}

const Box:FC<BoxI> = ({
  children, 
  size, 
  withShadow, 
  fullOnMobile
}) => {
  return (
    <BoxWrapper size={size} withShadow={withShadow} fullOnMobile={fullOnMobile}>
      {children}
    </BoxWrapper>
  )
}

export default Box
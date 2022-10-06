import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import { BaseInput, Label } from './styles'

interface BaseInputI {
  widthHalf?:boolean
  label?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const Select:FC<BaseInputI> = ({label, size, widthHalf, ...restProps}) => {
  return (
    <Wrapper size={size}>
      <Flex direction='column'>
        {label && <Label>{label}</Label>}
        <BaseInput {...restProps} widthHalf={widthHalf}/>
      </Flex>
    </Wrapper>
  )
}

export default Select
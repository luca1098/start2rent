import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import { BaseTextArea, Label } from './styles'

interface BaseTextAreaI {
  label?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const Select:FC<BaseTextAreaI> = ({label, size, ...restProps}) => {
  return (
    <Wrapper size={size}>
      <Flex direction='column'>
        {label && <Label>{label}</Label>}
        <BaseTextArea {...restProps} />
      </Flex>
    </Wrapper>
  )
}

export default Select
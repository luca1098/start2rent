import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import { BaseSelect, Label } from './styles'

interface OptionI{
  label:string
  value:string
}

interface SelectI {
  options: OptionI[]
  label?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const Select:FC<SelectI> = ({label, options, size, ...restProps}) => {
  return (
    <Wrapper size={size}>
      <Flex direction='column'>
        {label && <Label>{label}</Label>}
        <BaseSelect {...restProps}>
          {options.length > 0 
          ? options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)
          : 'test'
        } 
        </BaseSelect>
      </Flex>
    </Wrapper>
  )
}

export default Select
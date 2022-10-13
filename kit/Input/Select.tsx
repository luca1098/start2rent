import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import ErrorMessage from './ErrorMessage'
import { BaseSelect, Label } from './styles'

interface OptionI{
  label:string 
  value:string | null
}

interface SelectI {
  options: OptionI[]
  label?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const Select:FC<SelectI> = ({
  label, 
  options, 
  size, 
  name,
  register,
  validation,
  error,
  ...restProps
}) => {
  return (
    <Wrapper size={size}>
      <Flex direction='column'>
        {label && <Label>{label}</Label>}
        <BaseSelect 
          {...restProps} 
          {...(register && name ? register(name, validation ? validation : {}) : {})}
        >
          {options?.map(o => 
            <option key={o.label} value={o.value || '' }>{o.label}</option>
          )} 
        </BaseSelect>
        {error && <ErrorMessage message={error.message} />}
      </Flex>
    </Wrapper>
  )
}

export default Select
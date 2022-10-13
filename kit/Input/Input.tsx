import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import ErrorMessage from './ErrorMessage'
import { BaseInput, Label, Caption } from './styles'

interface BaseInputI {
  widthHalf?:boolean
  label?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const Input:FC<BaseInputI> = ({
  label, 
  size, 
  widthHalf, 
  register, 
  name, 
  validation,
  error,
  caption,
  ...restProps
}) => {
  return (
    <Wrapper size={size}>
      <Flex direction='column'>
        {label && <Label>{label}</Label>}
        <BaseInput  
          {...restProps} 
          widthHalf={widthHalf}
          {...(register && name ? register(
            name,
            validation ? validation : {}
          ) : {} )}
        />
        {caption && <Caption size='sm'>{caption}</Caption>}
        {error && <ErrorMessage message={error.message} />}
      </Flex>
    </Wrapper>
  )
}

export default Input
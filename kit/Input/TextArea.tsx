import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import ErrorMessage from './ErrorMessage'
import { BaseTextArea, Label } from './styles'

interface BaseTextAreaI {
  label?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const TextArea:FC<BaseTextAreaI> = ({
  label, 
  size, 
  name,
  register,
  error,
  ...restProps
}) => {
  return (
    <Wrapper size={size}>
      <Flex direction='column'>
        {label && <Label>{label}</Label>}
        <BaseTextArea 
          {...restProps} 
          {...(register && name ? register(name) : {})}
        />
        {error && <ErrorMessage message={error.message} />}
      </Flex>
    </Wrapper>
  )
}

export default TextArea
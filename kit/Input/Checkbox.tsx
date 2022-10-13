import React, { FC } from 'react'
import { Flex, Wrapper } from '../Layout'
import ErrorMessage from './ErrorMessage'
import { CheckboxBase } from './styles'

interface CheckboxI {
  name?:string
  size: 'full' | '1/2' | '1/3' | '1/4' | '2/3'
  [rest:string]: any
}

const Checkbox:FC<CheckboxI> = ({
  register,
  name,
  validation,
  error,
  size,
  children
}) => {
  return (
    <Wrapper size={size} margin='1rem 0'>
    <Flex align='start' justify='start' margin='0 0 .5rem 0'>
      <CheckboxBase 
        type={'checkbox'}  
        {...(register && name ? register(name, validation ? validation : {}) : {})}  
      />
      {children}
    </Flex>
    {error && <ErrorMessage message={error.message} />}
    </Wrapper>
  )
}

export default Checkbox
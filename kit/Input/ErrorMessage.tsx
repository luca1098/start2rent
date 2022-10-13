import React, { FC } from 'react'
import { ErrorLabel } from './styles'

interface ErrorMessageI {
  message?:string
}

const ErrorMessage:FC<ErrorMessageI> = ({message}) => {
  return (
    <ErrorLabel size='sm'>{message || 'Errore'}</ErrorLabel>
  )
}

export default ErrorMessage
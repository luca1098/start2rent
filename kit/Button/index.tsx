import React from 'react'
import { BaseButton } from './styles';

interface ButtonI {
  onClick:() => void;
  secondary?:boolean;
  label:string;
  [rest:string]:any 
}

const Button:React.FC<ButtonI> = ({
  onClick, 
  secondary,
  label,
  ...rest
}) => {
  return (
    <BaseButton 
      onClick={onClick}
      secondary={secondary}
      {...rest}
    >
      {label}
    </BaseButton>
  )
}

export default Button
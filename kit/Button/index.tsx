import React from 'react'
import { BaseButton } from './styles';

interface ButtonI {
  onClick:() => void;
  secondary?:boolean;
  label:string;
}

const Button:React.FC<ButtonI> = ({
  onClick, 
  secondary,
  label
}) => {
  return (
    <BaseButton 
      onClick={onClick}
      secondary={secondary}
    >
      {label}
    </BaseButton>
  )
}

export default Button
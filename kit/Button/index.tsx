import React from 'react'
import Loader from './Loader';
import { BaseButton } from './styles';

interface ButtonI {
  onClick?:() => void;
  secondary?:boolean;
  label:string;
  isLoading?:boolean;
  disabled?:boolean;
  [rest:string]:any 
}

const Button:React.FC<ButtonI> = ({
  onClick, 
  secondary,
  label,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <BaseButton 
      onClick={onClick}
      secondary={secondary}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? <Loader secondary={secondary} /> : label}
    </BaseButton>
  )
}

export default Button
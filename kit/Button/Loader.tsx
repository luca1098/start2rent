import React, { FC } from 'react'
import { Circle, LoaderSvg } from './styles'

interface BaseButtonI {
  secondary?:boolean;
}

const Loader:FC<BaseButtonI> = ({secondary}) => {
  return (
    <LoaderSvg 
      className="spinner" 
      width="15" 
      height="15" 
      viewBox="0 0 66 66" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle 
        secondary={secondary} 
        className="path" 
        fill="none" 
        strokeWidth="7px" 
        strokeLinecap="round" 
        cx="33" 
        cy="33" r="30" />
    </LoaderSvg>
  )
}

export default Loader
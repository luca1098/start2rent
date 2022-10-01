import React, { FC, ReactNode } from 'react'
import CountUp from 'react-countup'
import { RenderCounterProps } from 'react-countup/build/types'

export interface CounterUpI {
  children?: (props:RenderCounterProps) => ReactNode
  start: number
  end: number
  onEnd?: () => void
  onStart?: () => void
  [rest:string] : any

}

const CounterUp:FC<CounterUpI> = ({
  children, 
  start, 
  end,
  onEnd, 
  onStart,
  ...rest
}) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={2.75}
      onEnd={onEnd}
      onStart={onStart}
      {...rest}
    >
      {children}
  </CountUp>
  )
}

export default CounterUp
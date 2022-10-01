import React, { FC } from 'react'
import Counter from './Counter'
import VisibilitySensor from 'react-visibility-sensor-v2' //fix
import { Count, CounterLabel } from './styles'


interface CountersUpI {
  start:number
  end:number
  label:string
  onStart?: () => void
  onEnd?: () => void
}

const CountersUp:FC<CountersUpI> = ({
  start, 
  end, 
  label, 
  onEnd, 
  onStart
}) => {
  return (
    <Counter 
      start={start} 
      end={end}
      onEnd={onEnd}
      onStart={onStart}
    >
    { ({countUpRef, start}) => (
      <VisibilitySensor onChange={(isVisible:boolean) => isVisible && start()}>
        <>
          <CounterLabel>{label}</CounterLabel>
          <Count ref={countUpRef} />
        </>
      </VisibilitySensor>
    )}
    </Counter>  
  )
}

export default CountersUp
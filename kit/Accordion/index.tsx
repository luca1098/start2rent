import React, { FC } from 'react'
import { AccordionI } from '../../Interfaces/kit'
import { Flex } from '../Layout'
import AccordionChild from './AccordionChild'

const Accordion:FC<AccordionI> = ({data}) => {
  return (
    <Flex direction='column'>
      {data?.map( item => 
        <AccordionChild 
          key={item.id} 
          id={item.id}
          label={item.label} 
          body={item.body}
        />)}
    </Flex> 
  )
}

export default Accordion
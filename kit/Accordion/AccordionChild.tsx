import React, { FC, useState } from 'react'
import { AccordionChildI } from '../../Interfaces/kit'
import { AccordionHead, AccordionBody, AccordionWrapper, Plus } from './styles'

const AccordionChild:FC<AccordionChildI>= ({label, body}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <AccordionWrapper direction='column' >
      <AccordionHead
        onClick={() => setIsOpen(!isOpen)}
        align='center' 
        justify='between'
      >
        <p>{label}</p>
        <Plus isOpen={isOpen} />
      </AccordionHead>
      {isOpen && (
        <AccordionBody>
          {body}
        </AccordionBody>
      )}
    </AccordionWrapper>
  )
}

export default AccordionChild
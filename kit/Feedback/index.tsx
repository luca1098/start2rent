import React, { FC, useEffect, useState } from 'react'
import { Paragraph } from '../Text';
import { FeedbackBase, Close } from './styles';

interface FeedbackI {
  type:'E' | 'S' | 'A';
  message:string;
  show:boolean;
  autoHidden?:boolean
}

const Feedback:FC<FeedbackI> = ({
  type, 
  message, 
  show, 
  autoHidden
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(show)
  }, [show])

  return (
    <>
      {isVisible ? (
        <FeedbackBase type={type}>
          <Paragraph size='sm'>{message}</Paragraph>
          <Close onClick={() => setIsVisible(false)} />
        </FeedbackBase>
      ) : null}
    </>
  )
}

export default Feedback
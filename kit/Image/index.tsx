import React from 'react'
import Image from 'next/image'
import { ImageWrapper } from './styles'
import { ImageI } from '../../Interfaces/kit'

const ImageComponent:React.FC<ImageI> = ({src, alt}) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} layout="fill" objectFit='contain'/>
    </ImageWrapper>
  )
}

export default ImageComponent
import Image from 'next/image'
import React, { FC } from 'react'
import { PreloadPage } from './styles'
import LogoLoading from '../../assets/logo/logo-h.png'

const Preloader:FC = () => {
  return (
    <PreloadPage>
      <Image src={LogoLoading} height={100} width={80} />
    </PreloadPage>
  )
}

export default Preloader
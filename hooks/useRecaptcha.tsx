import React, { FC, FunctionComponent } from 'react'
import { Wrapper } from '../kit/Layout'
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

interface useRecaptchaI{
  Recaptcha: FunctionComponent<RecaptchaI>
}

interface RecaptchaI {
  onChange?:((token: string | null) => void) | undefined
}
const useRecaptcha = ():useRecaptchaI => {
  const Recaptcha:FC<RecaptchaI> = ({onChange}) => (
    <Wrapper size='full' margin='0 0 1rem 0'>
      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={onChange} />
    </Wrapper>
  )

  return { Recaptcha }
}

export default useRecaptcha
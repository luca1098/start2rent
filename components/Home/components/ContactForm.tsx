import React, { FC, useCallback, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../../../kit/Button';
import { Input, Form, TextArea, Select, Checkbox } from '../../../kit/Input';
import { Paragraph } from '../../../kit/Text';
import { optionFormConfig } from '../config';
import { EmailJSResponseStatus } from '@emailjs/browser';
import {sendEmail} from '../../../utils/email';
import Feedback from '../../../kit/Feedback';
import { handleOnlyNumbers } from '../../../utils/formatters';
import { validation } from '../validation';

export interface ContactFormI{
  tipologia:string
  posti:number
  address:string
  cellulare:string
  info:string
  email:`${string}@${string}.${string}`
  privacy:boolean
  name:string
  recaptcha:string
  [rest:string]: any
}

const ContactForm:FC = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors }
  } = useForm<ContactFormI>();
  const [feedbackType, setFeedbackType] = useState<'S' | 'A' | 'E'>('S')
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')
  const [showFeedback, setShowFeedback] = useState<boolean>(false)
  const [formSendLoading, setFormSendLoading] = useState<boolean>(false)
  const callback = (response:EmailJSResponseStatus | any) => {
    if(response?.status === 200){
      setFeedbackMessage('Messaggio inviato con successo!')
      setFeedbackType('S')
      setShowFeedback(true)
    }else{
      setFeedbackMessage(`Errore.. qualcosa è andato storto. ${response.text}`)
      setFeedbackType('E')
      setShowFeedback(true)
    }
    reset()
    setFormSendLoading(false)
  } 

  const onSubmit:SubmitHandler<ContactFormI> = async (values, e) => {
    e?.preventDefault()
    setFormSendLoading(true)
    sendEmail(values,callback)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        size='full'
        label='Nome e cognome*'
        placeholder={'Nome e cognome'} 
        name="name"
        register={register} 
        validation={validation['name']}
        error={errors.name}
      />
      <Select 
        label='Tip. appartamento*' 
        options={optionFormConfig} 
        size={'1/2'} 
        register={register}
        name="tipologia"
        validation={validation['tipologia']}
        error={errors.tipologia}
      />
      <Input 
        size='1/2'
        label='Posti Letto*'
        placeholder={'Numero posti letto'} 
        name="posti"
        register={register}
        validation={validation['posti']}
        error={errors.posti}
       />
      <Input 
        size='full' 
        label='Indirizzo*'
        placeholder={'Indirizzo (es. Via di Novoli 23, Firenze (FI))'} 
        name="address"
        register={register} 
        validation={validation['address']}
        error={errors.address}
      />
      <Input 
        size='full'
        label='Email*'
        placeholder={'Email'} 
        name="email"
        register={register} 
        validation={validation['email']}
        error={errors.email}
      />
      <Input 
        size='full'
        label='Cellulare*'
        placeholder={'Numero di cellulare'} 
        name="cellulare"
        register={register}
        onChange={handleOnlyNumbers}
        validation={validation['cellulare']}
        error={errors.cellulare}
      />
      <TextArea 
        size='full'
        label='Info Aggiuntive'
        placeholder={'Info aggiuntive'} 
        register={register}
        name="info"
      />
      <Input 
        size='full'
        label='Quanto fa 1+1?*'
        placeholder={'1+1='} 
        name="recaptcha"
        register={register} 
        validation={validation['recaptcha']}
        error={errors.recaptcha}
        caption={'Sei un umano? Dimostralo, rispondendo a questa semplice addizione'}
      />
      <Checkbox 
        name='privacy' 
        size='full'
        register={register}
        validation={validation['privacy']}
        error={errors.privacy}
      >
        <Paragraph size='sm'>Dichiaro di aver letto ed accettato la <a href='https://www.iubenda.com/privacy-policy/44755385' target={'_blank'} rel="noreferrer"> privacy policy</a></Paragraph> 
      </Checkbox>
      <Button 
        type={'submit'} 
        label={'Invia'} 
        isLoading={formSendLoading}
      />
      <Feedback
        type={feedbackType} 
        message={feedbackMessage} 
        show={showFeedback}
        autoHidden
      />
    </Form>
  )
}

export default ContactForm
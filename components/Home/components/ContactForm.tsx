import React, { FC } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../../../kit/Button';
import { Input, Form, TextArea, Select } from '../../../kit/Input';
import { CheckboxBase } from '../../../kit/Input/styles';
import { Flex } from '../../../kit/Layout';
import { Paragraph } from '../../../kit/Text';
import { optionFormConfig } from '../config';

interface ContactFormI{
  tipologia:string
  posti:number
  address:string
  cellulare:string
  info:string
  email:`${string}@${string}.${string}`
  privacy:boolean
}

const ContactForm:FC = () => {
  const { register, handleSubmit } = useForm<ContactFormI>();
  const onSubmit:SubmitHandler<ContactFormI> = values => {
    console.log('values', values)
  }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Select 
        label='Tip. appartamento' 
        options={optionFormConfig} 
        size={'1/2'} 
        {...register("tipologia")} 
      />
      <Input 
        size='1/2'
        label='Posti Letto'
        placeholder={'Posti Letto'} 
        type={'number'} 
        {...register("posti")} 
       />
      <Input 
        size='full' 
        label='Indirizzo'
        placeholder={'Indirizzo (es. Via di Novoli 23, Firenze (FI))'} 
        {...register("address")} 
      />
      <Input 
        size='full'
        label='Email'
        placeholder={'Email'} 
        {...register("email")} 
      />
      <Input 
        size='full'
        label='Cellulare'
        placeholder={'Numero di cellulare'} 
        {...register("cellulare")} 
      />
      <TextArea 
        size='full'
        label='Info Aggiuntive'
        placeholder={'Info aggiuntive'} 
        {...register("info")} 
      />
      {/* <Input {...register("photo")} placeholder={'Carica Foto'} /> */}
      <Flex align='start' justify='start' margin='0 0 1rem 0'>
        <CheckboxBase type={'checkbox'} {...register("privacy")} />
        <Paragraph size='sm'> Dichiaro di aver letto ed accettato la privacy policy</Paragraph>
      </Flex>
      <Button type={'submit'} label={'Invia'} onClick={() => {}} />
    </Form>
  )
}

export default ContactForm
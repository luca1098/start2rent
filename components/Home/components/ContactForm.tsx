import React, { FC } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../../../kit/Button';
import { Input, Form, TextArea } from '../../../kit/Input';
import { CheckboxBase } from '../../../kit/Input/styles';
import { Flex } from '../../../kit/Layout';
import { Paragraph } from '../../../kit/Text';

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
    console.log('#### values', values)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("tipologia")} placeholder={'Tipologia'} widthHalf />
      <Input {...register("posti")} placeholder={'Posti Letto'} type={'number'} widthHalf />
      <Input {...register("address")} placeholder={'Indirizzo (es. Via di Novoli 23, Firenze (FI))'} />
      <Input {...register("email")} placeholder={'Email'} />
      <Input {...register("cellulare")} placeholder={'Numero di cellulare'} />
      <TextArea {...register("info")} placeholder={'Info aggiuntive'} />
      {/* <Input {...register("photo")} placeholder={'Carica Foto'} /> */}
      <Flex align='center' justify='start' noWrap margin='0 0 1rem 0'>
        <CheckboxBase type={'checkbox'} {...register("privacy")} />
        <Paragraph size='sm' secondary> Dichiaro di aver letto ed accettato la privacy policy</Paragraph>
      </Flex>
      <Button type={'submit'} label={'Invia'} onClick={() => {}} />
    </Form>
  )
}

export default ContactForm
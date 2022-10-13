import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ContactFormI } from '../components/Home/components/ContactForm';

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || ''
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || ''
const PUBLIC_KEY_EMAIL = process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL || ''

export const sendEmail = async (values:ContactFormI, callback: (e:EmailJSResponseStatus | any) => void) => {
  try{
    const req:EmailJSResponseStatus = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      values, 
      PUBLIC_KEY_EMAIL
    )
    callback(req)
  }catch(e:any){
    callback(e)
  }
}
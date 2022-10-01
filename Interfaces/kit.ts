import { StaticImageData } from "next/image";

export interface TextI {
  mTop?: string;
  mBottom?:string
  color?:string
  align?:string
  size?:string
  secondary?:boolean
}

export interface AccordionChildI{
  id:string;
  label: string;
  body:string;

}
export interface AccordionI {
  data: Array<AccordionChildI>
}

export interface ImageI{
  src: StaticImageData | string;
  alt:string;
}
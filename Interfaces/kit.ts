export interface TextI {
  mTop?: string;
  mBottom?:string
  color?:string
  align?:string
  size?:string
}

export interface AccordionChildI{
  id:string;
  label: string;
  body:string;

}
export interface AccordionI {
  data: Array<AccordionChildI>
}
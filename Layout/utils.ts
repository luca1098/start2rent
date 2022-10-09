import { MenuLinkI } from "../Interfaces/navbar";
import { sectionId } from "../components/Home/config";

const { 
  contact,
  business,
  whyUs,
  start
} = sectionId

export const navbarLinks:Array<MenuLinkI> = [
  {href:`/#${business}`, label:'Il bussines'},
  {href:`/#${whyUs}`, label:'Perché noi'},
  {href:`/#${start}`, label:'Come iniziare'},
  {href:`/#${contact}`, label:'Iniziamo!', isButton:true},
]
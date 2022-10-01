import { 
  IconBroom, 
  IconCare, 
  IconDocument, 
  IconHome, 
  IconInstagram, 
  IconShield, 
  IconTrophy, 
  IconWhatsapp 
} from "../../kit/Icons";

import WhatsAppQr from '../../assets/img/qrCodeWhatsApp.png'
import InstaQr from '../../assets/img/qrCodeInstagram.png'

export const services = [
  {
    emoticon:'🚀',
    icon:IconShield,
    title: 'Copertura assicurativa',
    body:'Protezione per responsabilità civile e protezione furti e danni all’immobile'
  },
  {
    emoticon:'🏆',
    icon:IconTrophy,
    title: 'Visibilità e Qualità',
    body:'Foto professionali, gestione tariffe per periodo per massimizzare gli incassi, gestione immobile su tutti i principali portali in multi-lingua'
  },
  {
    emoticon:'🧹',
    icon:IconBroom,
    title: 'Pulizie e Biancheria',
    body:'Pulizia con check-list dopo ogni soggiorno da un team qualificato e servizio completo di gestione biancheria'
  },
  {
    emoticon:'🗂',
    icon:IconDocument,
    title: 'Gestione Burocratica',
    body:'Apertura attività con tutta la relativa documentazione. Comunicazione degli ospiti alla Polizia di Stato con relativa gestione e avvio di tutte le utenze'
  },
  {
    emoticon:'💆',
    icon:IconHome,
    title: 'Accoglienza degli Ospiti',
    body:'Accoglienza, illustrazione appartamento e consegna chiavi ed in alternativa self-checkin. Assistenza H24 durante il soggiorno e verifica dell’immobile ad ogni checkout'
  },
  {
    emoticon:'🏡',
    icon:IconCare,
    title: 'Cura dell\'immobile',
    body:'Assistenza all’Home Staging e arredamento per la messa a punto dell’immobile. Monitoraggio continuo dello stato dell’immobile e gestione della manutenzione'
  },
]

export const socialConfig = [
  {name: 'WhatsApp', icon:IconWhatsapp, qrCode:WhatsAppQr, link:''},
  {name: 'Instagram', icon:IconInstagram, qrCode:InstaQr, link:''}
]


const vantaggiShortRentConfig = [
  {

  }
]
const requiredMessage = 'Campo obbligatorio'

export const validation = {
  name: {
    required:requiredMessage
  },
  tipologia:{
    required:requiredMessage
  },
  address:{
    required:requiredMessage
  },
  privacy:{
    required:requiredMessage
  },
  cellulare:{
    required:requiredMessage,
    valueAsNumber: true,
    validate: (value:any) => {
      const stringValue = value.toString()
      if(stringValue.length >= 9 && stringValue.length < 13) return true  
      const reg = new RegExp(/^(0|[1-9]\d*)(\.\d+)?$/)
      return reg.test(value) 
        ? stringValue.length < 9 
          ? 'Lunghezza minima 9 numeri'
          : 'Non è possibbile inserire più di 13 numeri'
        : 'Sono consentiti solo caratteri numerici'
    },
  },
  posti:{
    required:requiredMessage,
    valueAsNumber: true,
    validate: (value:any) => {
      if(value > 0 && value < 50) return true  
      const reg = new RegExp(/^(0|[1-9]\d*)(\.\d+)?$/)
      return reg.test(value) 
        ? 'Non è possibile inserire più di 50 posti letto' 
        : 'Sono consentiti solo caratteri numerici'
    },
  },
  email:{
    required:requiredMessage,
    pattern:{
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Email non valida"
    }
  }
}
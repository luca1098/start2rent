import { breakpoint } from "../../styles/theme";


export const getAlignJustifyDirection = (status:string | undefined) => {
  switch(status){
    case 'center' :
      return 'center';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'start':
    default:
      return 'flex-start';
  }
}
export const getSize = (size:string | undefined, layout:string | undefined) => {
  switch(size){
    case '1/2' :
      return layout !== breakpoint.lg ? '100%' : '49%';
    case '2/3' :
      return layout !== breakpoint.lg ? '100%' : '80%';
    case '1/3':
      return layout === breakpoint.sm ? '100%' : '32%';
    case '1/4':
      return layout === breakpoint.sm 
        ? '100%' 
        : layout === breakpoint.md 
          ? '49%' 
          : '24%';
    case 'full':
    default:
      return '100%';
  }
}

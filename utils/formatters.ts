export const handleOnlyNumbers = (value:string) => {
  if (!value) return value
  return value.replace(/[^\d]/g, '')
}
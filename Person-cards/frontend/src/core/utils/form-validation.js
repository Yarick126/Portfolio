export const fieldValidation = (str) =>{
  if(!str) return false;

  if (/[\d.,:]/.test(str))  return false;

  return str
}
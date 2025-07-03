import { Filter } from "../filter/Filter.js"

export const AddCard = () => {
  const addButton = document.createElement('button')
  addButton.classList.add('addCard')
  addButton.innerHTML = '+'
  addButton.addEventListener('click', ()=>{
    Filter().style.display = 'block'
  })
  return addButton
}
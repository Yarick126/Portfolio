import {Button} from '../ui/button/Button.js'

export const AddCard = () => {
  const addHandler = () => {}
  const addButton = new Button(addHandler, '+', 'addCard', 'add_card')
  return addButton
}
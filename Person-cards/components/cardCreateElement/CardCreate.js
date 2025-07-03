import { Button } from "../ui/button/Button.js"
import { Input } from "../ui/input/Input.js"
import { Label } from "../ui/label/Label.js"
import { Textarea } from "../ui/textarea/Textarea.js"


export const CardCreate = () => {

  const cardCreateForm = document.createElement('form')
  const cardCreateElement = document.createElement('div')
  
  const formTitle = new Label('Person card create', 'card_create', 'formTitle')
  const nameInputTitle = new Label('Name','name')
  const surnameInputTitle = new Label('Surname','surname')
  const bioTitle = new Label('Bio','bio')
  const ageInputTitle = new Label('Age','age')

  const inputName = new Input('Enter name', 'name', 'person_name')
  const inputSurname = new Input('Enter surname', 'surname', 'person_surname')
  const inputAge = new Input(0,'age', 'person_age', 'number')

  const textareaBio = new Textarea('Persons bio', 'bio')

  cardCreateForm.appendChild(formTitle)
  cardCreateForm.appendChild(nameInputTitle)
  cardCreateForm.appendChild(inputName)
  cardCreateForm.appendChild(surnameInputTitle)
  cardCreateForm.appendChild(inputSurname)
  cardCreateForm.appendChild(ageInputTitle)
  cardCreateForm.appendChild(inputAge)
  cardCreateForm.appendChild(bioTitle)
  cardCreateForm.appendChild(textareaBio)
  

  cardCreateElement.className = 'filter'
  cardCreateForm.action = 'index.html'
  cardCreateForm.method = 'post'
  cardCreateForm.name = 'CreatePersonForm_active'
  cardCreateForm.className = 'cardCreateForm'
  cardCreateForm.autocomplete = 'on'

  const sendHandler = () =>{}

  const closeHandler = () =>{
    cardCreateElement.style.display = 'none'
  }

  const SendButton = new Button(sendHandler, 'Send', 'sendButton','send_button')
  const CloseButton = new Button(closeHandler, 'Close','closeButton', 'close_button')

  cardCreateForm.appendChild(SendButton)
  cardCreateForm.appendChild(CloseButton)
  
  cardCreateElement.appendChild(cardCreateForm)

  return cardCreateElement
}
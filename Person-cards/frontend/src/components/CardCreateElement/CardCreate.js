import { Button } from "../ui/button/Button.js"
import { Form } from "../ui/form/Form.js"
import { Input } from "../ui/input/Input.js"
import { Label } from "../ui/label/Label.js"
import { Textarea } from "../ui/textarea/Textarea.js"
import './cardCreateStyle.css'

export const CardCreate = () => {

  const cardCreateForm = new Form('post','CreatePersonForm','cardCreateForm',
    [
      new Label('Person card create', 'card_create', 'formTitle'),
      new Label('Name','name'),
      new Input('Enter name', 'name', 'person_name'),
      new Label('Surname','surname'),
      new Input('Enter surname', 'surname', 'person_surname'),
      new Label('Age','age'),
      new Input(0,'age', 'person_age', 'number'),
      new Label('Bio','bio'),
      new Textarea('Persons bio (max length 300)', 'bio',2, 6)
    ])
  
  const cardCreateElement = document.createElement('div')
  
  cardCreateElement.className = 'filter'
  cardCreateElement.id = 'formBackground'
  cardCreateElement.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('formBackground').style.display = 'none'
  })
  const sendHandler = () =>{}

  cardCreateForm.appendChild(new Button(sendHandler, 'Send', 'sendButton','send_button'))
  
  cardCreateElement.appendChild(cardCreateForm)

  return cardCreateElement
}
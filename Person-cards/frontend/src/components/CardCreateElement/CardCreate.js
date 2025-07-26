import { createUser } from "../../core/routes/userRoutes.js"
import { Button } from "../ui/button/Button.js"
import { DropDown } from "../ui/dropdown/DropDown.js"
import { Form } from "../ui/form/Form.js"
import { Input } from "../ui/input/Input.js"
import { Label } from "../ui/label/Label.js"
import { Textarea } from "../ui/textarea/Textarea.js"
import './cardCreateStyle.css'

export const CardCreate = () => {

  const inputName = new Input('Enter name', 'name', 'person_name');
  const inputSurname = new Input('Enter surname', 'surname', 'person_surname');
  const inputAge = new Input(0,'age', 'person_age', 'number')
  const inputBio = new Textarea('Persons bio (max length 300)', 'bio',2, 6)
  const inputImgSrc = new Input('image source', 'imgSrc', 'image_src')
  const dropDown = new DropDown(['male', 'female'])
  const cardCreateForm = new Form('CreatePersonForm','cardCreateForm',
    [
      new Label('Person card create', 'card_create', 'formTitle'),
      new Label('Name','name'),
      inputName,
      new Label('Surname','surname'),
      inputSurname,
      new Label('Sex','sex'),
      dropDown,
      new Label('Age','age'),
      inputAge,
      new Label('Image','image'),
      inputImgSrc,
      new Label('Bio','bio'),
      inputBio
    ]);
  
  const cardCreateElement = document.createElement('div')
  
  cardCreateElement.className = 'filter'
  cardCreateElement.id = 'formBackground'
  cardCreateElement.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('formBackground').style.display = 'none'
  })


  cardCreateForm.appendChild(new Button((e)=>{
    e.preventDefault()
    const name = inputName.value
    const surname = inputSurname.value
    const age = +inputAge.value
    const sex = dropDown.firstChild.value
    const imgSrc = inputImgSrc.value
    const bio = inputBio.value
    createUser({name,surname, age, sex, imgSrc, bio})
  }, 'Send', 'sendButton','send_button'))
  
  cardCreateElement.appendChild(cardCreateForm)

  return cardCreateElement
}
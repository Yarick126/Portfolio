import { Button } from "../ui/button/Button.js"
import { Image } from "../ui/image/Image.js"


export const Card = ( person ) =>{

  

  const Card = document.createElement('section')
  Card.className = 'card'
  if(!person) {
    Card.style.padding = '0px'
    Card.appendChild(new Button(
    ()=>{
      document.getElementById('formBackground').style.display = 'block'
    }, '+', 'addCard', 'add_card'))

    return Card
  }
  const card_top = document.createElement('div')
  card_top.className = 'card_top'

  const card_about = document.createElement('div')
  card_about.className = 'card_about'
  
  const card_about_name = document.createElement('span')
  card_about_name.className = 'card_about-name'
  card_about_name.textContent = person?.name + ' ' + person?.surname

  const card_about_age = document.createElement('span')
  card_about_age.textContent = 'Age: ' +person?.age

  const card_about_sex = document.createElement('span')
  card_about_sex.textContent = 'Sex: '+ person?.sex

  const card_bottom = document.createElement('div')
  card_bottom.className = 'card_bottom'

  const card_bio = document.createElement('p')
  card_bio.className = 'card_bio'
  card_bio.textContent = person?.bio

  card_bottom.appendChild(card_bio)

  card_top.appendChild(new Image(person?.imgSrc,'personImage'))
  card_top.appendChild(card_about)

  card_about.appendChild(card_about_name)
  card_about.appendChild(card_about_age)
  card_about.appendChild(card_about_sex)
  Card.appendChild(card_top)
  const line = document.createElement('hr')
  line.setAttribute('color', 'black')
  line.setAttribute('size','5')
  Card.appendChild(line)
  Card.appendChild(card_bottom)

  return Card
}
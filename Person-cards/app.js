import {CardElement} from './components/cardElement/Card.js'
import { AddCard} from './components/addCardElement/AddCard.js'
import PERSON_DATA_ARRAY from './data/constants.js'
import { CardCreate } from './components/cardCreateElement/CardCreate.js'

const appDiv = document.querySelector('#app') 


function app(){

  const back = document.createElement('div')
  
  back.classList.add('backGround')
  back.appendChild(CardCreate())
  PERSON_DATA_ARRAY.map((e)=>{
    back.appendChild(CardElement(e))
  })
  back.appendChild(AddCard())

  appDiv.appendChild(back)
}

app()
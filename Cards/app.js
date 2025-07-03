import {CardElement} from './cardElement/Card.js'
import { AddCard} from './addCardElement/AddCard.js'
import PERSON_DATA_ARRAY from './data/constants.js'
import { Filter } from './filter/Filter.js'
import { CardCreate } from './cardCreateElement/CardCreate.js'

const appDiv = document.querySelector('#app') 


function app(){

  const back = document.createElement('div')

  back.classList.add('backGround')
  back.appendChild(Filter())
  back.appendChild(CardCreate())
  PERSON_DATA_ARRAY.map((e)=>{
    back.appendChild(CardElement(e))
  })
  back.appendChild(AddCard())

  appDiv.appendChild(back)
}

app()
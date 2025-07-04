import {Card} from './components/Card/Card.js'
import PERSON_DATA_ARRAY from './core/data/constants.js'
import { CardCreate } from './components/cardCreateElement/CardCreate.js'


const appDiv = document.querySelector('#app') 
const back = document.createElement('div')
  

function app(){


  back.classList.add('backGround')
  back.appendChild(CardCreate())
  PERSON_DATA_ARRAY.map((e)=>{
    back.appendChild(Card(e))
  })
  back.appendChild(Card())
  appDiv.appendChild(back)
}

app()
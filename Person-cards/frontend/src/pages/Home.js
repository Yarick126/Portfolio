import {Card} from '../components/Card/Card.js'
import { CardCreate } from '../components/cardCreateElement/CardCreate.js'
import { getAllUsers } from '../core/routes/userRoutes.js'

// Главная страница (на ней все карточки отображаются)
export const HOME_ROOT = 'users/'
export function HomePage(){

  const promiseData = getAllUsers()
  const Home = document.createElement('div')

  Home.className = 'backGround'
  
  promiseData.then((res)=>{
    res.map((e)=>{
      Home.appendChild(Card(e))
    })
    Home.appendChild(CardCreate()) // добавляю форму для создания карточки (display: none конечно же)
    Home.appendChild(Card()) // это кнопка для добавления карточки (параметров нету поэтому превращается в кнопку)
    //они внутри then из за event loop-а
  })

  
  
  return Home
}
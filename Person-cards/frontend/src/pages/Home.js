import {Card} from '../components/Card/Card.js'
import { CardCreate } from '../components/cardCreateElement/CardCreate.js'
import { getAllUsers } from '../core/routes/userRoutes.js'

// Главная страница (на ней все карточки отображаются)

export function HomePage(){

  const users = getAllUsers()
  console.log(users);
  

  const Home = document.createElement('div')
  Home.className = 'backGround'
  Home.appendChild(CardCreate()) // добавляю форму для создания карточки (display: none конечно же)
  users.map((e)=>{
    console.log(e);
  })
  Home.appendChild(Card()) // это кнопка для добавления карточки (параметров нету поэтому превращается в кнопку)
  
  return Home
}
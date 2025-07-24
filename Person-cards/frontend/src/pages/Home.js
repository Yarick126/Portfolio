import {Card} from '../components/Card/Card.js'
import { CardCreate } from '../components/cardCreateElement/CardCreate.js'
import { getAllUsers } from '../core/routes/userRoutes.js'
import './home-style.css'
// Главная страница (на ней все карточки отображаются)
export function HomePage(){

  const promiseData = getAllUsers() // получаем информацию о людях из бд
  const Home = document.createElement('div')

  Home.className = 'home'
  
  promiseData.then((res)=>{
    res.map((e)=>{
      Home.appendChild(Card(e)) // добаляем карточки (если они есть)
    })
    Home.appendChild(CardCreate()) // добавляю форму для создания карточки (display: none конечно же)
    Home.appendChild(Card()) // это кнопка для добавления карточки (параметров нету поэтому превращается в кнопку)
    //они внутри then из за event loop-а
  })

  
  
  return Home
}
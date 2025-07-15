import './global/styles.css'
import { HOME_ROOT, HomePage } from './pages/Home.js'

const appDiv = document.querySelector('#app') 

function app(){
  appDiv.appendChild(HomePage())
}

app()
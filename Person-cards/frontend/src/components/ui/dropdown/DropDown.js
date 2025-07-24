import './dropdown-style.css'

export class DropDown {

  dropDown = document.createElement('div')
  input = document.createElement('input')
  dataList = document.createElement('datalist')
  constructor(options){
    for (let i = 0; i < options.length; i++) {
      let option = document.createElement('option')
      option.value = options[i]
      this.dataList.appendChild(option)
    }
    this.input.setAttribute('list','options') 
    this.dataList.id = 'options'
    this.dropDown.appendChild(this.input)
    this.dropDown.appendChild(this.dataList)
    this.dropDown.className = 'dropDown'
    return this.dropDown
  }
}
export class Button {

  button = document.createElement('button')

  constructor( onClickMethod, text, className, id, type = 'submit'){
    this.button.addEventListener('click', onClickMethod)
    this.button.textContent = text
    this.button.className = className
    this.button.type = type
    this.button.id = id

    return this.button
  }
}
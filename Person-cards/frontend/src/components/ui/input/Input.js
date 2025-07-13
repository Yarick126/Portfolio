import './input-style.css'

export class Input {

  input = document.createElement('input')

  constructor(text, id, name, type='text', autocomplete = 'on'){

    this.input.placeholder = text
    this.input.id = id
    this.input.name = name
    this.input.type = type 
    this.input.autocomplete = autocomplete

    if(type == 'number'){
      this.input.maxLength
    }

    return this.input
  }
}
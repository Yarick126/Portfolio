import './textarea-style.css'

export class Textarea {

  textarea = document.createElement('textarea')

  constructor(text, id,cols,rows, className = '',autocomplete = 'on'){
    this.textarea.placeholder = text
    this.textarea.id = id
    this.textarea.cols = cols
    this.textarea.rows = rows
    this.textarea.className = className
    this.textarea.autocomplete = autocomplete
    this.textarea.maxLength = 300
    return this.textarea
  }
}
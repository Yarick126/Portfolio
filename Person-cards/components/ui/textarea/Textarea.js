export class Textarea {

  textarea = document.createElement('textarea')

  constructor(text, id, className = '',autocomplete = 'on'){
    this.textarea.placeholder = text
    this.textarea.id = id
    this.textarea.className = className
    this.textarea.autocomplete = autocomplete
    
    return this.textarea
  }
}
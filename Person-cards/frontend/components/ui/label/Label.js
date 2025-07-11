export class Label {

  label = document.createElement('label')

  constructor(text, id, className = ''){
    this.label.textContent = text
    this.label.id = id
    this.label.className = className
    
    return this.label
  }
}
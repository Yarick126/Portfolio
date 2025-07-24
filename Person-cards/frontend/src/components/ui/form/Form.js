import './form-style.css'

export class Form {

  form = document.createElement('form')

  constructor(name, classname,components, autocomplete = 'on'){
    this.form.name = name
    this.form.className = classname
    this.form.autocomplete = autocomplete
    this.form.addEventListener('click', (e)=>{
      if (e.stopPropagation) e.stopPropagation();
    })
    for(let i = 0; i< components.length; i++){
      this.form.appendChild(components[i])
    }

    return this.form
  }
}
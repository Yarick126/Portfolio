export class Form {

  form = document.createElement('form')

  constructor(method, name, classname,components, autocomplete = 'on'){
    this.form.method = method
    this.form.name = name
    this.form.className = classname

    this.form.addEventListener('click', (e)=>{
      if (e.stopPropagation) e.stopPropagation();
    })
    for(let i = 0; i< components.length; i++){
      this.form.appendChild(components[i])
    }

    return this.form
  }
}
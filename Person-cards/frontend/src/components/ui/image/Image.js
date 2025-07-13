import './image-style.css'

export class Image {

  image = document.createElement('img')

  constructor(src, className){
    this.image.src = src
    this.image.className = className
    this.image.alt ='Not found'

    return this.image
  }
} 
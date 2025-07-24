export default class User {

  #name
  #surname
  #age
  #sex
  #imgSrc
  #bio
  constructor(data){
    this.#name = data.name
    this.#surname =data.surname
    this.#age = data.age
    this.#sex = data.sex
    this.#imgSrc = data.imgSrc
    this.#bio = data.bio

    return this
  }
}
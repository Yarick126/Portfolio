

export const CardElement = (person) =>{

  const cardHtml = 
  `<div class='card_top'>
      <img src=${person.imgSrc} alt='Not found'></img>
      <div class='card_about'>
        <span class='card_about-name'>${person.name} ${person.surname}</span>
        <span>Age: ${person.age}</span>
        <span>Sex: ${person.sex}</span>
      </div>
    </div>
    <hr size ="3" color="black"/>
    <div class='card_bottom'>
      <p class='card_bio'>${person.bio}</p>
    </div>`

  const Card = document.createElement('section')
  Card.classList.add('card')
  Card.innerHTML += cardHtml
  return Card
}
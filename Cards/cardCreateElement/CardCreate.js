

export const CardCreate = () => {

  const cardCreateHTML = 
  `
    <label for='name'>Name</label>
    <input placeholder='Enter name' id='name' name='person_name'></input>
    <label for='surname'>Surname</label>
    <input placeholder='Enter surname' id='surname' name='person_surname'></input>
    <label for='age'>Age</label>
    <input type='number' id='age' name='person_age'></input>
    <label for='bio'>Bio</label>
    <textarea placeholder='Bio' id='bio' name ='person_bio'></textarea>
    <button type='submit' id='send_button'>Send</button>
    <button name='close_form'>Close</button>
  `
  const cardCreateElement = document.createElement('form')

  cardCreateElement.action = 'index.html'
  cardCreateElement.method = 'post'
  cardCreateElement.name = 'CreatePersonForm'
  cardCreateElement.className = 'cardCreateElement'
  cardCreateElement.innerHTML +=cardCreateHTML

  return cardCreateElement
}
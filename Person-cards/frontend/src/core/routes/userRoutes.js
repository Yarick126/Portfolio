import { customAxios } from "../customAxios.js";

// получить все карточки
export async function getAllUsers() {
  try {
    const {data} = await customAxios.get('/users/')
    
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// создать карточку
export async function createUser (user) {
  try {
    const newUser = await customAxios.post('/users/createUser', user)
    console.log(newUser);
    
  } catch (error) {
    console.log(error.message);
  }
}

// удалить карточку
export async function deleteUser(id) {
  try {
    await customAxios.delete(`/users/deleteUser/${id}`)
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateUser(id) {
  try {
    await customAxios.patch(`/users/updateUser/${id}`)
  } catch (error) {
    console.log(error.message);
  }
}
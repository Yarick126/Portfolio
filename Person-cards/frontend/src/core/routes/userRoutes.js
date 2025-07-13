import { customAxios } from "../customAxios.js";

// получить все карточки
export async function getAllUsers() {
  try {
    const users = await customAxios.get('/users/')
    return users.data.data;
  } catch (error) {
    console.log(error.message);
  }
}

// создать карточку
export async function createUser (params) {
  try {
    await customAxios.post('/users/createUser', params)
  } catch (error) {
    console.log(error.message);
  }
}
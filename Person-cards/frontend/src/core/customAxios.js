import axios from 'axios'

export const customAxios = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2000
})
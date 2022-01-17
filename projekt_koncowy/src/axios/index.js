import axios from 'axios'

export const gamesInstance = axios.create({
  baseURL: 'http://127.0.0.1:8080/api/v1',
  headers: {
    'X-Api-Key': '123456',
  },
})

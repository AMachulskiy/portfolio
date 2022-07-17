import axios from 'axios'

const apiService = axios.create({
  baseURL: '  http://localhost:4000',
})

export default apiService

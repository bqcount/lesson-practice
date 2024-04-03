import axios from 'axios'

const authApiAle = axios.create({
    baseURL: 'https://api-order-lessons.onrender.com/api'
})

const authApi = axios.create({
    baseURL: 'https://ludohana.onrender.com/'
})

export default authApi
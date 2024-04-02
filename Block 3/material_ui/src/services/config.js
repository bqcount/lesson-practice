import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://ludohana.onrender.com'
})

export default authApi
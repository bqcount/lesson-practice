import api from './config.js'

export const getAllUsers = async()=> {
    const { data } = await api.get('/users')
    return data
}
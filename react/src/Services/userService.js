import {api} from './config'


export const getAll= async()=>{

    const {data}= await api.get('/users/all')
    return data
}

export const getOne= async()=>{

    const {data}= await api.get('/users/one', { headers: {'Authorization': localStorage.getItem('token')}})
    return data
}
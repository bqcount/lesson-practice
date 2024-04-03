import React from 'react'
import {api} from './config'


const signup = async(userData) => {
   console.log(userData)
    const {data} = await api.post('/auth/signup', userData)
    
    return data
}

export const login =async (userData)=>{

    const{data} = await api.post('auth/login',userData)
    return data
}


export default signup
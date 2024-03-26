import api from './config.js'

export const getAllPosts = async()=> {
    const { data } = await api.get('/posts')
    return data
}

export const getPostsById = async(userId)=> {
    const { data } = await api.get(`/posts?userId=${userId}`)
    return data
}
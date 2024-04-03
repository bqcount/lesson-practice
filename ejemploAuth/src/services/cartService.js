import authApi from './config'

export const getMyCart = async () => {
    const {data} = await authApi.get('/products', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return data
}
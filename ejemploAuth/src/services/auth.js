import authApi from './config'

export const login = async (loginData) => {
    const response = await authApi.post('api/auth/login', loginData)
    console.log(response.data.token)
    return response
}
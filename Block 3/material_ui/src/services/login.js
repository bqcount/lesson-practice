import authApi from "./config";

export const loginLudohana = async()=>  {
    const {data} = await authApi.get('/api/auth/login')
    return data
}
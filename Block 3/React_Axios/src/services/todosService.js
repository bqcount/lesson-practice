import { api } from './config.js'

export const getAllTodos = async () => {
  const { data } = await api.get('/todos')
  console.log(data)
  return data
}

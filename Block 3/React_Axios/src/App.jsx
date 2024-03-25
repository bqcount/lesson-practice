import './App.css'
import { useEffect, useState } from 'react'
import { getAllTodos } from './services/todosService'

function App() {
  /* const [name, setName] = useState('')
  const [email, setEmail] = useState('') */

  const [todos, setTodos] = useState([])

  const handleList = async () => {
    const todosData = await getAllTodos()
    setTodos(todosData)
  }

  const showTodos = () => {
    return todos && todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
  }

  useEffect(() => {
    handleList()
  }, [])

  return (
    <>
      <ul>
        {showTodos()}
      </ul>

      {/* <p>{name}</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <p>{email}</p>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      /> */}
    </>
  )
}

export default App

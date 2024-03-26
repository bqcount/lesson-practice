import { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/usersService'
import './Users.css'
import { Link } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])

  const handleUsers = async () => {
    const usersData = await getAllUsers()
    setUsers(usersData)
  }

  useEffect(() => {
    handleUsers()
  }, [])

  const displayUsers = () => {
    return (
      users &&
      users.map((user) => (
        <Link key={user.id} to={"/posts/" + user.id}>
        <article className="card">
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.website}</p>
        </article>
        </Link>
      ))
    )
  }

  return (
    <>
      <h1>Users</h1>
      <section>{displayUsers()}</section>
    </>
  )
}

export default Users

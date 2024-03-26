import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to="/users">
        <h2>Users</h2>
      </Link>
      <Link to="/posts">
        <h2>Posts</h2>
      </Link>
    </header>
  )
}

export default Header

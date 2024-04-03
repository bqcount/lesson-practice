import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <>
        <div>Esta ruta es para logueados</div>
        <Button onClick={() => {onLogout()}}>Log out</Button>
    </>
  )
}

export default About

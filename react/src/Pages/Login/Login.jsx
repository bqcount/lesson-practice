import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material'
import React, { useState } from 'react'
import { login } from '../../Services/authService'
import { useNavigate } from 'react-router-dom'
 
const Login = () => {


  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const navigate= useNavigate()

  const handleLogin= async ()=>{

    const res = await login({email, name:{firstname,lastname}, username,password})
    console.log(res)
    localStorage.setItem('token', res.token)
    localStorage.setItem('role', res.role)
    navigate('/home')
}
  return (
    <> <Card sx= {{width:'30vw', margin:'auto'}}>
    <CardHeader title="Mega hiper formulario de Google"/>
    
    <CardContent sx={{display:'flex', gap:'10px', flexDirection:'column'}}>
        <TextField type="email" variant="outlined" label="Email UwU" onChange={(e)=> setEmail(e.target.value)}></TextField>
        <TextField type="password" variant="outlined" label="Contraseñita UwU " onChange={(e)=> setPassword(e.target.value)}></TextField>

    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'end'}}>
        
        <Button>Cancel</Button>
        <Button variant="contained" onClick={()=> handleLogin()}>Login</Button>
    </CardActions>

</Card>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hZcV_8ZA2EhWHtS0bomsUcura6LJ2D_q8JrZPenvXvD3_wIg1YQ_aIv43EB7NJLZxtw&usqp=CAU"/>

</>
  )
}

export default Login
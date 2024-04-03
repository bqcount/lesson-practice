import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import signup from '../../Services/authService'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {

    const [firstname,setfirstName]=useState('')
    const [lastname,setlastName]=useState('')
    const [email,setEmail]=useState('')
    const [username,setUserName]=useState('')

    const [password,setPassword]=useState('')
    const navigate= useNavigate()
    const handleSignUp= async ()=>{

        const res = await signup({email, name:{firstname,lastname}, username,password})
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        navigate('/home')

    }

    return (
        <div className="main">

            <Card sx= {{width:'30vw', margin:'auto'}}>
                <CardHeader title="Mega hiper formulario de Google"/>
                
                <CardContent sx={{display:'flex', gap:'10px', flexDirection:'column'}}>
                    <TextField type="text" variant="outlined" label="Nombre UwU"  onChange={(e)=> setfirstName(e.target.value)} ></TextField>
                    <TextField type="text" variant="outlined" label="Apellido UwU" onChange={(e)=> setlastName(e.target.value)}></TextField>
                    <TextField type="email" variant="outlined" label="Email UwU" onChange={(e)=> setEmail(e.target.value)}></TextField>
                    <TextField type="text" variant="outlined" label="Usuario UwU" onChange={(e)=> setUserName(e.target.value)}></TextField>
                    <TextField type="password" variant="outlined" label="Contraseñita UwU " onChange={(e)=> setPassword(e.target.value)}></TextField>

                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'end'}}>
                    
                    <Button>Cancel</Button>
                    <Button variant="contained" onClick={()=> handleSignUp()}>Sign up</Button>
                </CardActions>

            </Card>
            <img style={{width:"40%",display:"block",margin:'auto'}} src="https://i.ytimg.com/vi/NEJlnqfVul8/maxresdefault.jpg"></img>

        </div>
    )
}

export default SignUp
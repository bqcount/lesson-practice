import { AppBar, Box, Toolbar, Typography ,Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {

    const navigate= useNavigate()
    const handleLogout = ()=>{

        localStorage.removeItem('token')
        localStorage.removeItem('rol')

        navigate('/')
    }

    return (
    <>
    <Box>
    <AppBar position="static">
        <Toolbar sx={{display:'flex', gap:'1%', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', gap:'1%', width:'30%'}}>
            <Link>
            <Typography variant="h6">Home</Typography>
            </Link>
            <Link to='/all'><Typography variant="h6">All users</Typography></Link>
            <Link to='/one'><Typography variant="h6">One users</Typography></Link>
            </Box>
            <img src="https://media.giphy.com/media/3oz8xMHvITObUmJr7G/giphy.gif" style={{width:'150px'}}/>
            <img src="https://e.snmc.io/i/600/s/cfaf38a01af80aa35fc25f78c4b6a8ca/3106877/delfin-quishpe-la-tigresa-del-oriente-and-wendy-sulca-en-tus-tierras-bailare-cover-art.png" style={{width:'150px'}}/>
            <img src="https://i.makeagif.com/media/1-30-2018/CHvdFe.gif" style={{width:'150px'}}/>

            {

                localStorage.getItem('token') ? <Button variant="contained" onClick={()=>handleLogout()}>Logout</Button>: <><Link to="/login"><Button variant="contained">Login</Button></Link> <Link to="/signup"><Button variant="contained">Sign Up</Button></Link>
</>
            }
            <Box>
            
            </Box>
        </Toolbar>
    </AppBar>
    </Box>
    
    </>
  )
}

export default Header
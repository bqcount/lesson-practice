import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  // Typography,
  TextField,
  Button,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material"

import {
  LockOutlined,
  EmailOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material"
// import { grey, green, teal } from "@mui/material/colors"
import { useState } from "react"
import { loginLudohana } from "../services/login"



function LoginForm() {
  const [isPassVisible, setIsPassVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

//backgroundColor: "#E5F6EC"
async function onLogin() {
  try {
    const loginResponse = await loginLudohana({email, password})
   //Do something with the response
  } catch (error) {
   //Handle the error
  }
}

  return (
    <Card sx={{ maxWidth: "700px",
      }} raised={true}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          //   variant="filled"
          // variant="outlined" predeterminada
          margin="normal"
          type="email"
          value={"diego@gmail.com"}
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon >
                  <EmailOutlined />
                </Icon>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Password"
          value={"1234"}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type={isPassVisible ? "text" : "password"}
          margin="normal"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>
                  <LockOutlined />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsPassVisible((oldState) => !oldState)
                  }}
                >
                  {isPassVisible ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <VisibilityOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
        {/* <Typography sx={{ color: teal[800] }} component="div" variant="h1">
          Mi tarjeta
        </Typography>
        <Typography sx={{ color: grey[800] }} variant="h1">Mi tarjeta</Typography>
        <Typography sx={{ color: grey[800] }} component="span">Mi tarjeta</Typography> */}
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "end", padding: "15px" }}
      >
        <Button size="small" color="secondary" variant="contained">
          Register
        </Button>
        <Button onClick={() => onLogin()} size="small" color="primary" variant="contained">
          Login
        </Button>
        {/* <Button size="small" color="info" variant="contained">
          Info
        </Button> */}
        {/* <Button size="small" color="primary" variant="text">
          AZUL
        </Button>
        <Button size="small" color="error" variant="outlined">
          ROJO
        </Button>
        <Button size="small" color="warning" variant="">
          NARANJA
        </Button>
        <Button size="small" color="success" variant="contained">
          VERDE
        </Button> */}
      </CardActions>
    </Card>
  )
}

export default LoginForm

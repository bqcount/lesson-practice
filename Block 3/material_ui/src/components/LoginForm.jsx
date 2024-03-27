import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
//   Typography,
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
import { grey } from "@mui/material/colors"
import { useState } from "react"

function LoginForm() {
  const [isPassVisible, setIsPassVisible] = useState(false)

  return (
    <Card sx={{ maxWidth: "700px", backgroundColor: grey[300] }} raised={true}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          label="Email"
          //   variant="filled"
          // variant="outlined" predeterminada
          margin="normal"
          type="email"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon >
                  <EmailOutlined />
                </Icon>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Password"
          variant="outlined"
          type={isPassVisible ? "text" : "password"}
          margin="normal"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <LockOutlined />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
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
        {/* <Typography component="div" variant="h1">
          Mi tarjeta
        </Typography>
        <Typography variant="h1">Mi tarjeta</Typography>
        <Typography component="span">Mi tarjeta</Typography> */}
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "end", padding: "15px" }}
      >
        <Button size="small" color="secondary" variant="contained">
          Register
        </Button>
        <Button size="small" color="primary" variant="contained">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginForm

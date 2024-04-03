import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { useState, useEffect } from "react";

import { getMyCart } from "../services/cartService";
import { login } from "./../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const onLogin = async () => {
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/");
    } catch (error) {
      setErrorMessage("Login failed");
    }
  };

  const getCart = async () => {
    setCart(await getMyCart());
  };

  return (
    <Card sx={{ maxWidth: "500px" }}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder={"diego@gmail.com"}
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder={"1234"}
          variant="outlined"
          fullWidth={true}
        />
        {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => {getCart()}}>Register</Button>
        <Button onClick={() => {onLogin()}} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;

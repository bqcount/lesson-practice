import "./App.css";
import LoginForm from "../src/components/LoginForm.jsx";
import NavBar from "./components/Navbar.jsx";
import SideBar from "./components/Sidebar.jsx";
import { Container, Box, Divider, CssBaseline } from "@mui/material";
import Footer from "./components/Footer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { customTheme } from "./themes/custom.js";
import { useMemo, useState } from "react";
import { ColorModeContext } from "./context/theme.js";
import ToggleButton from "./components/ToggleButton.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

function App() {
  const [mode, setMode] = useState("dark");

  function toggleColorMode() {
    setMode((previous) => (previous === "light" ? "dark" : "light"));
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode   // The palette will be in 'light' or 'dark' mode, depending on the state variable
        },
      }),
    [mode]      // Every time the state variable changes, the 'useMemo' hook will execute
  );

  return (
    <>
    <RouterProvider router={router}/>
      <ColorModeContext.Provider value={toggleColorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container fixed sx={{ maxWidth: "lg" }}>
            <NavBar />
            <ToggleButton />
            <SideBar />
            <LoginForm />
            <Box sx={{ bgcolor: "#cfe8fc", height: "100px" }} />
            <Divider sx={{ bgcolor: "#555555", height: "50px" }} />
            <Footer />
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

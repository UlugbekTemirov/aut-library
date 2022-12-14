import React from "react";

// mui
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// react router dom
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";

// cookie
import Cookies from "universal-cookie";

// components
import { Navbar, Footer } from "../components";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0,0,128)",
    },
  },
});

const App = () => {
  // cookie
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar jwt={jwt} />
        <Container maxWidth="xl">
          <Router jwt={jwt} />
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

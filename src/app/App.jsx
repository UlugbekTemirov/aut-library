import React from "react";

// mui
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// react router dom
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="xl">
          <Router />
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

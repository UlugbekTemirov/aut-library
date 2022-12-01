import React from "react";
import Navbar from "../components/Navbar";

import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";
import Container from "@mui/material/Container";

// cookie
import Cookies from "universal-cookie";
import { ToastContainer } from "react-toastify";

const App = () => {
  // cookie
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");

  return (
    <BrowserRouter>
      <Navbar jwt={jwt} />
      <Container maxWidth="xl">
        <Router />
      </Container>
    </BrowserRouter>
  );
};

export default App;

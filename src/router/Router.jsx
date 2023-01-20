import React, { useState } from "react";

// react router dom
import { Routes, Route, Navigate } from "react-router-dom";

// components
import { Login } from "../components";

// cookies
import Cookies from "universal-cookie";

// pages
import {
  Books,
  Home,
  RentBook,
  History,
  Libraries,
  Information,
  Rating,
} from "../pages";

const Router = () => {
  const cookie = new Cookies();
  const newJwt = cookie.get("jwt", { path: "/" });
  const [jwt, setJwt] = useState(undefined);

  return (
    <Routes>
      <Route path="/" element={<Home setJwt={setJwt} />} />
      <Route path="/kitoblar" element={<Books />} />
      <Route path="/kutubxonalar" element={<Libraries />} />
      <Route path="/kitoblar/:bookslug" element={<Information />} />
      <Route path="/rating" element={<Rating />} />
      {!Boolean(jwt) && <Route path="/login" element={<Login />} />}
      {Boolean(newJwt ?? jwt) && <Route path="/ijara" element={<RentBook />} />}
      {Boolean(newJwt ?? jwt) && <Route path="/tarix" element={<History />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;

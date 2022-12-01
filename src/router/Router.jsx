import React from "react";

// react router dom
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Login from "../components/Login";

// pages
import { Books, Home, RentBook } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="books" element={<Books />} />
      <Route path="login" element={<Login />} />
      <Route path="/lease" element={<RentBook />} />
      {/* <Route
        path="/libraries"
        element={<a href="https://unilibrary.uz/"></a>}
      /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;

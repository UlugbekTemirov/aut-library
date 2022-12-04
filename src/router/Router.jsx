import React from "react";

// react router dom
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Login from "../components/Login";

// pages
import { Books, Home, RentBook, History } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kitoblar" element={<Books />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ijara" element={<RentBook />} />
      <Route path="/tarix" element={<History />} />
      {/* <Route
        path="/libraries"
        element={<a href="https://unilibrary.uz/"></a>}
      /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;

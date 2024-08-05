import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Login from "./Login";
import Signup from "./Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     
    </Routes>
  );
};

export default AppRoutes;
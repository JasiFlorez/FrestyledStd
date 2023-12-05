import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/index";
import Register from "./registrarse/index";
import AdimVista from "./admin";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdimVista />} />
      </Routes>
    </Router>
  );
}

import "./App.css";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error";
import Layout from "./components/Layout/Layout";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Reset from "./components/User/Reset";
import Profile from "./components/User/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error";
import Layout from "./components/Layout/Layout";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Reset from "./components/User/Reset";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import FoodList from "./components/Food/List";

const baseURL = "http://localhost:8080/api/";

function App() {
  const [foods, setFoods] = useState([]);
  const [bites, setBites] = useState([]);

  async function getFoods() {
    const response = await fetch(baseURL + "foods");
    const responseJson = await response.json();
    setFoods(responseJson);
  }

  async function getBites() {
    const response = await fetch(baseURL + "bites");
    const responseJson = await response.json();
    setBites(responseJson);
  }

  useEffect(() => {
    getFoods();
    // getBites();
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<Error404 />} />

          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/foods" element={<FoodList foods={foods} />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

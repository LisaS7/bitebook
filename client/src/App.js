import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDataState } from "./state/slice";
import { getData } from "./Service";
import Home from "./pages/home";
import Error404 from "./pages/error";
import Layout from "./components/Layout/Layout";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Reset from "./components/User/Reset";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import FoodContainer from "./Food/FoodContainer";

function App() {
  const [foods, setFoods] = useState([]);
  const [bites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData("/foods", setFoods);
    // getData("/bites", setBites);
    getData("/categories", setCategories);
    getData("/groups", setGroups);
  }, []);

  useEffect(() => {
    dispatch(setDataState({ foods, bites, categories, groups }));
  }, [foods, bites, categories, groups, dispatch]);

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
            <Route path="/foods" element={<FoodContainer />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

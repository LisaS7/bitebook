import "./App.css";
import { trackPromise } from "react-promise-tracker";
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

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import FoodRoutes from "./Food/Routes";
import BiteRoutes from "./Bites/Routes";

function App() {
  const [foods, setFoods] = useState([]);
  const [bites, setBites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    getData("/categories", setCategories);
    getData("/groups", setGroups);
  }, []);

  useEffect(() => {
    if (user) {
      trackPromise(getData("/foods", setFoods, user.uid));
      trackPromise(getData("/bites", setBites, user.uid));
    }
  }, [user]);

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
            {FoodRoutes()}
            {BiteRoutes()}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

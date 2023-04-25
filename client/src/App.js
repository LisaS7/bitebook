import "./App.css";
import { trackPromise } from "react-promise-tracker";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDataState } from "./state/slice";
import { getData } from "./Service";
import Home from "./pages/Home";
import Error404 from "./pages/Error";
import Layout from "./components/Layout/Layout";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Reset from "./components/User/Reset";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import FoodContainer from "./food/Container";
import BiteContainer from "./bites/Container";
import Dashboard from "./pages/Dashboard";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FoodReport } from "./food/report/food_report";

function App() {
  const [foods, setFoods] = useState([]);
  const [bites, setBites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  user && localStorage.setItem("uid", user.uid);

  useEffect(() => {
    if (user) {
      getData("/categories", setCategories);
      getData("/groups", setGroups);
      trackPromise(getData("/foods", setFoods));
      trackPromise(getData("/bites", setBites));
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
            <Route path="/foods" element={<FoodContainer />} />
            <Route path="/foods/report" element={<FoodReport />} />
            <Route path="/bites" element={<BiteContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

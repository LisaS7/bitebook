import "./App.css";
import { trackPromise } from "react-promise-tracker";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDataState } from "./state/slice";
import { getData } from "./Service";
import Home from "./pages/home/Home";
import Error404 from "./pages/Error";
import Layout from "./components/Layout/Layout";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Reset from "./components/User/Reset";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import FoodContainer from "./food/Container";
import FoodRecords from "./food/foodRecords/Container";
import BiteContainer from "./bites/Container";
import Dashboard from "./pages/dashboard/Dashboard";

import { auth } from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FoodReport } from "./food/report/index";
import CategoriesDnd from "./food/Categories";

function App() {
  const [foods, setFoods] = useState([]);
  const [foodRecords, setFoodRecords] = useState([]);
  const [bites, setBites] = useState([]);
  const [people, setPeople] = useState([]);
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
      trackPromise(getData("/foodlists", setFoodRecords));
      trackPromise(getData("/bites", setBites));
      getData("/people/" + user.uid, setPeople);
    }
  }, [user]);

  useEffect(() => {
    dispatch(
      setDataState({ foods, foodRecords, bites, people, categories, groups })
    );
  }, [foods, foodRecords, bites, people, categories, groups, dispatch]);

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
            <Route path="/foods/categories" element={<FoodRecords />} />
            <Route path="/foods/categories/test" element={<CategoriesDnd />} />
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

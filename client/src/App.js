import "./App.css";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error";
import Layout from "./components/Layout/Layout";
import Login from "./components/User/Login";

function App() {
  // const [user, setUser] = useState("");

  function responseHandler(response) {
    // set user
    // console.log(decodedResponse);
  }

  function errorHandler(error) {
    console.log(error);
  }

  // if not user then return login page with google auth

  return (
    <Router>
      <div className="App">
        <h1>Hello</h1>
      </div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

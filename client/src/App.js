import "./App.css";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error";
import Layout from "./components/Layout/Layout";

function App() {
  const [user, setUser] = useState("");

  function responseHandler(response) {
    const decodedResponse = jwt_decode(response.credential);
    // set user
    console.log(decodedResponse);
  }

  //   {
  //     "iss": "https://accounts.google.com",
  //     "nbf": 1680853513,
  //     "aud": "993319444538-cigqhskhfc77gpd3hbu2rn9j89jkedpm.apps.googleusercontent.com",
  //     "sub": "112217843014843000776",
  //     "email": "mclisa00@gmail.com",
  //     "email_verified": true,
  //     "azp": "993319444538-cigqhskhfc77gpd3hbu2rn9j89jkedpm.apps.googleusercontent.com",
  //     "name": "Lisa Steven",
  //     "picture": "https://lh3.googleusercontent.com/a/AGNmyxYQMgjA94n51SbnE1ID9zuBCGx6eIzE1vPMes1bIrM=s96-c",
  //     "given_name": "Lisa",
  //     "family_name": "Steven",
  //     "iat": 1680853813,
  //     "exp": 1680857413,
  //     "jti": "984adfdc46548fc686f7955806490855e4c6d88f"
  // }

  function errorHandler(error) {
    console.log(error);
  }

  // if not user then return login page with google auth

  return (
    <Router>
      <div className="App">
        <h1>Hello</h1>
        <GoogleLogin onSuccess={responseHandler} onError={errorHandler} />
      </div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { StyledContainer } from "./style";
import Loading from "../Layout/Loading";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  function registerUser() {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  }

  useEffect(() => {
    // replace register page in history so browser back button works correctly
    if (user) navigate("/home", { replace: true });
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading message="Registering user" showLoading={loading} />;
  }

  return (
    <StyledContainer>
      <section>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={registerUser}>Register</button>
        <button className="google-button" onClick={signInWithGoogle}>
          Register with Google
        </button>
        <div className="bottom-link">
          Already have an account? <Link to="/">Sign In</Link>
        </div>
      </section>
    </StyledContainer>
  );
}

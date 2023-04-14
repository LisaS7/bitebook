import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { StyledContainer } from "./style";
import Loading from "../Layout/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/home");
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading message="Loading user data" showLoading={loading} />;
  }
  return (
    <StyledContainer>
      <section>
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
        <button onClick={() => logInWithEmailAndPassword(email, password)}>
          Sign In
        </button>
        <button className="google-button" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <Link to="/reset" className="bottom-link">
          Forgot Password?
        </Link>
        <div className="bottom-link">
          New user? <Link to="/register">Sign up here</Link>
        </div>
      </section>
    </StyledContainer>
  );
}

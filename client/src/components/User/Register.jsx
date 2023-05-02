import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { StyledContainer, StyledForm } from "./style";
import Form from "react-bootstrap/Form";
import Loading from "../Layout/Loading";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  function registerUser() {
    if (!name) {
      alert("Please enter name");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      registerWithEmailAndPassword(name, email, password);
    }
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
      <StyledForm>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          data-cy="name"
        />
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          data-cy="email"
        />
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          data-cy="pw"
        />{" "}
        <Form.Control
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          data-cy="pw2"
        />
        <button data-cy="submit-reg" onClick={registerUser}>
          Register
        </button>
      </StyledForm>
      <section className="bottom-section">
        <button
          data-cy="google-reg"
          className="google-button"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div data-cy="sign-in-link" className="bottom-link">
          Already have an account? <Link to="/">Sign In</Link>
        </div>
      </section>
    </StyledContainer>
  );
}

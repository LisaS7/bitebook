import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import { StyledContainer } from "./style";
import Loading from "../Layout/Loading";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/home");
  }, [user, loading, navigate]);

  if (loading)
    return (
      <Loading message="Sending password reset email" showLoading={loading} />
    );

  return (
    <StyledContainer>
      <section>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <button onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
        <div className="bottom-link">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </section>
    </StyledContainer>
  );
}

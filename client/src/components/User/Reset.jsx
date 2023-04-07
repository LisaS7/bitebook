import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import { StyledContainer } from "./style";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; //todo: loading page
    // if (user) navigate("/home")
  }, [user, loading, navigate]);

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

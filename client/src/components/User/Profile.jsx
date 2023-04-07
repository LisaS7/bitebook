import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, getDocs, collection, where } from "firebase/firestore";
import { StyledContainer } from "./style";

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function fetchUserName() {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("Error while fetching user data");
    }
  }

  useEffect(() => {
    if (loading) return; // todo: loading screen
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <StyledContainer>
      <section>
        Logged in as <p>{name}</p>
        <p>{user?.email}</p>
        <button onClick={logout}>Logout</button>
      </section>
    </StyledContainer>
  );
}

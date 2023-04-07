import React, { useState, useEffect } from "react";
import { auth, db, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, getDocs, collection, where } from "firebase/firestore";
import { StyledContainer } from "./style";

export default function Profile() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");

  useEffect(() => {
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

    fetchUserName();
    // disable warning - don't want user to cause rerender as this causes
    // error alert to appear when logging out from profile page
    // ok to only fetch data on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

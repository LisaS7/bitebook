import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { auth, db, logout, updateUserProfile } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, getDocs, collection, where } from "firebase/firestore";
import Loading from "../Layout/Loading";
import { StyledContainer, UserDetailsSection } from "./style";

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    updateUserProfile(user.uid, { name: editName, email: editEmail });
  }

  function changeValue(e, setValue) {
    setValue(e.target.value);
  }

  useEffect(() => {
    async function fetchUserName() {
      if (user) {
        try {
          const q = query(
            collection(db, "users"),
            where("uid", "==", user.uid)
          );
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setName(data.name);
          setEditName(data.name);
          setEditEmail(data.email);
        } catch (err) {
          console.error(err);
          alert("Error while fetching user data");
        }
      }
    }

    fetchUserName();
    // disable warning - don't want user to cause rerender as this causes
    // error alert to appear when logging out from profile page
    // ok to only fetch data on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading message="Loading user data" showLoading={loading} />;
  }
  return (
    <StyledContainer>
      <UserDetailsSection>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formUserName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={editName}
              onChange={(e) => changeValue(e, setEditName)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={editEmail}
              onChange={(e) => changeValue(e, setEditEmail)}
            />
          </Form.Group>
          <button>Save changes</button>
        </Form>
        <button onClick={logout}>Logout</button>
      </UserDetailsSection>
      <section>stuff</section>
    </StyledContainer>
  );
}

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  auth,
  db,
  logout,
  sendPasswordReset,
  updateUserProfile,
} from "../../firebase";
import { useAuthState, useDeleteUser } from "react-firebase-hooks/auth";
import { query, getDocs, collection, where } from "firebase/firestore";
import Loading from "../Layout/Loading";
import { StyledContainer } from "./style";

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const [deleteUser] = useDeleteUser(auth);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  async function handleUpdate(e) {
    e.preventDefault();
    updateUserProfile(user.uid, { name: editName, email: editEmail });
  }

  async function handleDelete(params) {
    const success = await deleteUser();
    if (success) {
      alert("Account deleted");
    }
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
      <Form onSubmit={(e) => handleUpdate(e)}>
        <h4>User Details</h4>
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
      <button onClick={() => sendPasswordReset(user.email)}>
        Reset Password
      </button>
      <button onClick={logout}>Logout</button>
      <Button variant="danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </StyledContainer>
  );
}

import Form from "react-bootstrap/Form";
import { db, updateUserProfile } from "../../../lib/firebase";
import { query, getDocs, collection, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { StyledForm } from "../style";
import Buttons from "./Buttons";

export default function UserDetails({ user }) {
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  async function handleUpdate(e) {
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
  }, [user]);

  return (
    <div>
      <StyledForm onSubmit={(e) => handleUpdate(e)}>
        <h4>User Details</h4>
        <Form.Group controlId="formUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={editName}
            data-cy="name"
            onChange={(e) => changeValue(e, setEditName)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={editEmail}
            data-cy="email"
            onChange={(e) => changeValue(e, setEditEmail)}
          />
        </Form.Group>
        <button data-cy="save-changes">Save</button>
      </StyledForm>
    </div>
  );
}

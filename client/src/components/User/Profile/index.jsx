import React from "react";
import { auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import Loading from "../../../Layout/Loading";
import Buttons from "./Buttons";
import UserDetails from "./UserDetails";
import People from "./People";
import { PeopleContainer, UserContainer, Container } from "./style";
import { NotepadBg } from "../../../Layout/NotepadBg";

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const { people } = useSelector((state) => state);

  if (loading) {
    return <Loading message="Loading user data" showLoading={loading} />;
  }

  return (
    <NotepadBg>
      <Container>
        <UserContainer>
          <UserDetails user={user} />
          <Buttons user={user} auth={auth} />
        </UserContainer>
        <PeopleContainer>
          <People people={people} />
        </PeopleContainer>
      </Container>
    </NotepadBg>
  );
}

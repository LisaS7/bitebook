import React from "react";
import { auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import Loading from "../../Layout/Loading";
import { ProfileContainer } from "./style";
import Buttons from "./Buttons";
import UserDetails from "./UserDetails";
import People from "./People";

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const { people } = useSelector((state) => state);

  if (loading) {
    return <Loading message="Loading user data" showLoading={loading} />;
  }

  return (
    <ProfileContainer>
      <UserDetails user={user} />
      <People people={people} />
      <Buttons user={user} auth={auth} />
    </ProfileContainer>
  );
}

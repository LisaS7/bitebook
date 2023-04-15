import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GetDataTemplate from "./dataTemplate";
import { Route } from "react-router-dom";
import BiteContainer from "./Container";

export default function BiteRoutes() {
  const [user] = useAuthState(auth);
  const template = GetDataTemplate();

  return (
    <>
      <Route path="/bites" element={<BiteContainer />} />
    </>
  );
}

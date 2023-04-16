import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import BiteContainer from "./Container";
import GetDataTemplate from "./dataTemplate";
import { addBite } from "../state/slice";
import AddForm from "../components/AddForm";

export default function BiteRoutes() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const template = GetDataTemplate();

  function addNewBiteToState(bite) {
    dispatch(addBite(bite));
  }

  return (
    <>
      <Route path="/bites" element={<BiteContainer />} />
      <Route
        path="/bites/add"
        element={
          <AddForm
            uid={user?.uid}
            template={template}
            endpoint={"bites"}
            setState={addNewBiteToState}
          />
        }
      />
    </>
  );
}

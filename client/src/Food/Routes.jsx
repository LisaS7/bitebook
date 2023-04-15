import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import FoodContainer from "./Container";
import AddForm from "../components/AddForm";
import GetDataTemplate from "./dataTemplate";
import { addFood } from "../state/slice";

export default function FoodRoutes() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const template = GetDataTemplate();

  function addNewFoodToState(food) {
    dispatch(addFood(food));
  }

  return (
    <>
      <Route path="/foods" element={<FoodContainer />} />
      <Route
        path="/foods/add"
        element={
          <AddForm
            uid={user?.uid}
            template={template}
            endpoint={"foods"}
            setState={addNewFoodToState}
          />
        }
      />
    </>
  );
}

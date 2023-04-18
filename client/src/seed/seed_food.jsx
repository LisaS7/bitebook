import { store } from "../state/store";
import { postRecord } from "../Service";
import { addFood } from "../state/slice";
import { newFoods } from "./data";

export function seedNewAccount(uid) {
  newFoods.forEach((food) => {
    food.userId = uid;
    postRecord(food, "foods");
    store.dispatch(addFood(food));
  });
}

import { store } from "../state/store";
import { postRecord } from "../Service";
import { addFood } from "../state/slice";
import { newFoods } from "./data";
import { infoStyle } from "../consolecss";

export function seedNewAccount(uid) {
  console.info("%c Adding food for new user " + uid, infoStyle);
  newFoods.forEach((food) => {
    food.userId = uid;
    postRecord(food, "foods");
    store.dispatch(addFood(food));
  });
}

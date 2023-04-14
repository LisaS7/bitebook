import { postRecord } from "../Service";
import { newFoods } from "./data";

export function seedNewAccount(uid) {
  const userFoods = newFoods.map((food) => (food.id = uid));
  userFoods.forEach((food) => {
    postRecord(food);
  });
}

import { useSelector } from "react-redux";
import { NewFoodSummary } from "./style";

export default function Summary({ records }) {
  const { foods } = useSelector((state) => state);

  const foodsTried = records.map((record) => record.food);
  const foodsNotTried = foods.filter(
    (food) => !foodsTried.find((obj) => obj.id === food.id)
  );

  const displayFoods = foodsNotTried.map((food) => (
    <p>
      {food.icon} {food.name}
      <span className="detail">{food.detail && " (" + food.detail + ")"}</span>
    </p>
  ));

  return (
    <NewFoodSummary>
      <h3>Try something new?</h3>
      <div className="new-foods">{displayFoods}</div>
    </NewFoodSummary>
  );
}

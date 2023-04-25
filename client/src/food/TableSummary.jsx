import { PinkCard } from "../components/Layout/global.style";
import { SummarySection } from "./style";
import CategoryPie from "./charts";

export default function Summary({ foods }) {
  const foodCategories = {
    liked: foods.filter((food) => food.category === "Yes").length,
    ok: foods.filter(
      (food) => food.category === "Rarely" || food.category === "Maybe"
    ).length,
    unliked: foods.filter((food) => food.category === "No").length,
    nottried: foods.filter((food) => food.category === "Untested").length,
    unknown: foods.filter((food) => !food.category || food.category === "None")
      .length,
  };

  return (
    <SummarySection>
      <PinkCard>
        <h5>{foods.length} foods</h5>
        <p>
          <span>{foodCategories.liked}</span> enjoyed
        </p>
        <p>
          <span>{foodCategories.ok}</span> not too bad
        </p>
        <p>
          <span>{foodCategories.unliked}</span> not so good
        </p>
        <p>
          <span>{foodCategories.nottried}</span> still to taste
        </p>
        <p>
          <span>{foodCategories.unknown}</span> to be categorised
        </p>
      </PinkCard>
      <CategoryPie />
    </SummarySection>
  );
}

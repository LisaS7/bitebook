import { Column } from "./style";

function FoodRecord({ food }) {
  return (
    <p className="food">
      {food.icon} {food.name}{" "}
      {food.detail && <span className="small-text">({food.detail})</span>}
    </p>
  );
}

export function CategoryColumns({ categories, personFoodRecords }) {
  let columns = [];
  categories.forEach((category) => {
    const categoryFoods = personFoodRecords
      .filter((record) => record.category === category)
      .sort((a, b) =>
        a.food.grouping < b.food.grouping
          ? -1
          : b.food.grouping < a.food.grouping
          ? 1
          : 0
      );
    if (categoryFoods.length) {
      const foodRows = categoryFoods.map((record, index) => (
        <FoodRecord key={index} food={record.food} />
      ));
      columns.push(
        <Column key={category}>
          <h3>{category}</h3>
          {foodRows}
        </Column>
      );
    }
  });

  return columns;
}

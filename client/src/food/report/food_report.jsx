import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Column, ReportHead, ReportBody, ReportContainer } from "./style";

function FoodRecord({ food }) {
  return (
    <p>
      {food.icon} {food.name}
    </p>
  );
}

export function FoodReport() {
  const { foods, categories } = useSelector((state) => state);

  let columns = [];
  categories.forEach((category) => {
    const categoryFoods = foods.filter((food) => food.category === category);
    if (categoryFoods.length) {
      const foodRows = categoryFoods.map((food, index) => (
        <FoodRecord key={index} food={food} />
      ));
      columns.push(
        <Column key={category}>
          <h3>{category}</h3>
          {foodRows}
        </Column>
      );
    }
  });

  return (
    <ReportContainer>
      <ReportHead>
        <h1>Food Report</h1>
        <button
          id="pink-button"
          className="noPrint"
          onClick={() => {
            window.print();
            return false;
          }}
        >
          <FontAwesomeIcon icon={faPrint} />
          <span>Print</span>
        </button>
      </ReportHead>
      <ReportBody>{columns}</ReportBody>
    </ReportContainer>
  );
}

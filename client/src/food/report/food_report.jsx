import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Column, ReportHead, ReportBody, ReportContainer } from "./style";

function FoodRecord({ food }) {
  return (
    <p>
      {food.icon} {food.name}{" "}
      {food.detail && <span className="small-text">({food.detail})</span>}
    </p>
  );
}

export function FoodReport() {
  const { foodRecords, categories } = useSelector((state) => state);

  let columns = [];
  categories.forEach((category) => {
    const categoryFoods = foodRecords
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

  return (
    <ReportContainer>
      <ReportHead className="noPrint">
        <h1>Food Report</h1>
        <button
          id="pink-button"
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

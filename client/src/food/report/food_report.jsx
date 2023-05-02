import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Column, ReportHead, ReportBody, ReportContainer } from "./style";
import { getBitePropertyAverages } from "./utils";

function FoodRecord({ food }) {
  return (
    <p>
      {food.icon} {food.name}{" "}
      {food.detail && <span className="small-text">({food.detail})</span>}
    </p>
  );
}

export function FoodReport() {
  const { foodRecords, categories, bites, activePerson } = useSelector(
    (state) => state
  );
  const personFoodRecords = foodRecords.filter(
    (record) => record.person.id === activePerson.id
  );
  const personBites = bites.filter(
    (bite) => bite.foodRecord.person.id === activePerson.id
  );

  const bitePropertyAverages = getBitePropertyAverages(personBites);

  console.log("\nfinal", bitePropertyAverages);

  // avg ratings for each list
  // return hashmap with word: rating

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

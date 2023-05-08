import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { getAverage } from "../utils";
import { randomColours } from "../../../constants";

export default function SmallBarChart({ foodRecords }) {
  const [selection, setSelection] = useState("top");

  const aggBitesByFoodName = [];
  foodRecords.forEach((record) => {
    if (record.bites.length) {
      const index = aggBitesByFoodName.findIndex(
        (obj) => obj.food.name === record.food.name
      );
      if (index < 0) {
        aggBitesByFoodName.push({ ...record });
      } else {
        aggBitesByFoodName[index].bites = aggBitesByFoodName[
          index
        ].bites.concat(record.bites);
      }
    }
  });

  const avgList = aggBitesByFoodName
    .map((record) => ({
      name: record.food.name,
      avgRating: getAverage(record.bites, "rating"),
    }))
    .sort((a, b) => b.avgRating - a.avgRating);

  const selectedFoods =
    selection === "top" ? avgList.slice(0, 10) : avgList.slice(-10);

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => setSelection("top")}>Top 10</Button>
        <Button onClick={() => setSelection("bottom")}>Bottom 10</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={selectedFoods}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 50,
          }}
        >
          <XAxis tick={false} height={5} />
          <YAxis
            label={{
              value: "Average Rating",
              angle: -90,
            }}
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
          />
          <Bar dataKey="avgRating">
            <LabelList
              dataKey="name"
              fontSize={16}
              fill="white"
              position="inside"
              angle={-90}
            />
            {selectedFoods.map((food, index) => (
              <Cell
                fill={randomColours[Math.round((food.avgRating - 1) * 2)]}
                key={index}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

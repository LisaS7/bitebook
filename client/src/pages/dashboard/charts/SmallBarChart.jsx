import React, { useState } from "react";
import _ from "underscore";
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
import { randomColours } from "../../../constants";

export default function SmallBarChart({ foodRecords }) {
  const [selection, setSelection] = useState("top");

  const aggByFood = _.groupBy(foodRecords, (record) => record.food.name);

  const data = [];
  for (const food in aggByFood) {
    const bites = _.pluck(aggByFood[food], "bites").flat();
    const rating = bites.reduce((total, current) => total + current.rating, 0);
    const average = { name: food, avgRating: rating / bites.length };
    data.push(average);
  }

  const sortedData = _.sortBy(data, "avgRating").reverse();

  const selectedFoods =
    selection === "top" ? sortedData.slice(0, 10) : sortedData.slice(-10);

  return (
    <>
      <ButtonGroup style={{ marginBottom: "2rem" }}>
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

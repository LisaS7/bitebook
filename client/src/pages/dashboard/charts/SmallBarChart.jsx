import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useSelector } from "react-redux";
import { aggFoodBites, getAverage } from "../utils";

// y : avg rating

// for each food -> sum all ratings and divide by arr length
// https://stackoverflow.com/questions/55375935/how-to-calculate-the-average-in-javascript-of-the-given-properties-in-the-array
// https://stackoverflow.com/questions/33850412/merge-javascript-objects-in-array-with-same-key

const testData = [
  { name: "potato", bites: [{ rating: 5 }, { rating: 5 }] },
  { name: "potato", bites: [{ rating: 1 }, { rating: 1 }] },
  { name: "cheese", bites: [{ rating: 1 }, { rating: 2 }, { rating: 2 }] },
  { name: "orange", bites: [{ rating: 5 }, { rating: 4 }] },
  { name: "strawberry", bites: [{ rating: 4 }, { rating: 4 }] },
];

// const newData = aggFoodBites(testData);

// const avgList = newData.map((food) => ({
//   name: food.name,
//   avgRating: getAverage(food.bites, "rating"),
// }));

// console.log("OUTPUT ======= ", avgList);

export default function SmallBarChart() {
  const { foods } = useSelector((state) => state);

  const aggData = aggFoodBites(foods);

  const avgList = aggData.map((food) => ({
    name: food.name,
    avgRating: getAverage(food.bites, "rating"),
  }));

  console.log("OUTPUT ======= ", avgList);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={avgList}
        margin={{
          top: 10,
          right: 30,
          left: 10,
          bottom: 0,
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
        <Tooltip />
        <Bar dataKey="avgRating" fill="#8884d8">
          <LabelList dataKey="food" fill="white" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

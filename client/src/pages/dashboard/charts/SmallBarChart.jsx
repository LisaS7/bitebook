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

// x : foods, agg by name
// y : avg rating

// import foods

// foods -> concat bites for foods with same name
// for each food -> sum all ratings and divide by arr length
// https://stackoverflow.com/questions/55375935/how-to-calculate-the-average-in-javascript-of-the-given-properties-in-the-array

const testData = [
  { food: "potato", avgRating: 3.5 },
  { food: "cheese", avgRating: 2 },
  { food: "orange", avgRating: 4.7 },
  { food: "strawberry", avgRating: 4.3 },
];

export default function SmallBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={testData}
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

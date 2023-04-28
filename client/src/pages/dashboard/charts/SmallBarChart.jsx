import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { aggFoodBites, getAverage } from "../utils";
import { colours } from "../style";

export default function SmallBarChart({ foods }) {
  // limit to 10 results
  const aggData = aggFoodBites(foods).slice(0, 10);

  const avgList = aggData.map((food) => ({
    name: food.name,
    avgRating: getAverage(food.bites, "rating"),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={avgList}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <XAxis tick={false} height={5} />
        <YAxis
          label={{
            value: "Average Rating",
            angle: -90,
          }}
          domain={[0, 6]}
          ticks={[0, 1, 2, 3, 4, 5]}
        />
        <Bar dataKey="avgRating">
          <LabelList dataKey="name" fontSize={13} fill="black" position="top" />
          {avgList.map((food, index) => (
            <Cell fill={colours[Math.round(food.avgRating) - 1]} key={index} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

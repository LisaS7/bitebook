import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useSelector } from "react-redux";
import { aggFoodBites, getAverage } from "../utils";
import { colours } from "../style";

export default function SmallBarChart() {
  const { foods } = useSelector((state) => state);

  // limit to 20 results
  const aggData = aggFoodBites(foods).slice(0, 20);

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
          <LabelList dataKey="name" fill="white" angle={-90} />
          {avgList.map((food, index) => (
            <Cell fill={colours[Math.round(food.avgRating) - 1]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

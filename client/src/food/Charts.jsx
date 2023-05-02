import React from "react";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";
import { fillColours } from "../constants";

// https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
//https://stackoverflow.com/questions/72056017/how-does-one-from-an-array-of-objects-collect-and-aggregate-the-merged-variant

function renderLabel(entry) {
  return entry.name;
}

export function GroupPie() {
  const { foods, groups } = useSelector((state) => state);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = [];
  groups.forEach((group, index) => {
    let aggFoods = foods.filter((item) => item.grouping === group);
    if (aggFoods.length) {
      data.push({ name: group, value: aggFoods.length, fill: COLORS[index] });
    }
  });

  console.log(data);

  return (
    <PieChart width={350} height={300}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        labelLine={false}
        label={renderLabel}
      />
    </PieChart>
  );
}

export function ColourPie() {
  const { foods } = useSelector((state) => state);

  const colours = foods
    .map((food) => food.colour.split(",").map((colour) => colour.trim()))
    .flat();
  const colourFrequency = colours.reduce((total, current) => {
    return total[current] ? ++total[current] : (total[current] = 1), total;
  }, {});
  console.log(colourFrequency);
  const data = [];
  for (const [key, value] of Object.entries(colourFrequency)) {
    data.push({ name: key, value, fill: fillColours[key] });
  }

  return (
    <PieChart width={350} height={300}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={80}
        labelLine={false}
        label={renderLabel}
      />
    </PieChart>
  );
}

import React from "react";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";
import { namedColours, randomColours } from "../constants";
import { ChartTitle } from "./style";

function renderLabel(entry) {
  return entry.name;
}

export function PropertyPie({ property, title }) {
  const { foods } = useSelector((state) => state);

  const properties = foods
    .map((food) => food[property].split(",").map((item) => item.trim()))
    .flat();

  const frequency = properties.reduce((total, current) => {
    return total[current] ? ++total[current] : (total[current] = 1), total;
  }, {});

  const data = [];
  Object.keys(frequency).forEach((key) => {
    data.push({
      name: key,
      value: frequency[key],
    });
  });

  const sorted = data.sort((a, b) => b.value - a.value);
  const coloured = sorted.map((obj, index) => ({
    ...obj,
    fill: property === "colour" ? namedColours[obj.name] : randomColours[index],
  }));

  let chartData;
  if (coloured.length > 6) {
    const others = {
      name: "Other",
      value: coloured.slice(6).reduce((total, curr) => total + curr.value, 0),
      fill: "lightsteelblue",
    };
    chartData = [...coloured.slice(0, 6), others];
  } else {
    chartData = coloured;
  }

  return (
    <div>
      <ChartTitle>{title}</ChartTitle>
      <PieChart width={350} height={200}>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          labelLine={false}
          label={renderLabel}
        />
      </PieChart>
    </div>
  );
}

import React from "react";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";

// https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
//https://stackoverflow.com/questions/72056017/how-does-one-from-an-array-of-objects-collect-and-aggregate-the-merged-variant

export default function GroupPie() {
  const { foods, groups } = useSelector((state) => state);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  let renderLabel = function (entry) {
    return entry.name;
  };

  const data = [];
  groups.forEach((group, index) => {
    let aggFoods = foods.filter((item) => item.grouping === group);
    if (aggFoods.length) {
      data.push({ name: group, value: aggFoods.length, fill: COLORS[index] });
    }
  });

  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
        labelLine={false}
        label={renderLabel}
      />
    </PieChart>
  );
}

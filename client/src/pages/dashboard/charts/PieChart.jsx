import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { randomColours } from "../../../constants";
import { ChartTitle } from "../style";
// import { bitesPieChartTestData } from "./test_data";

function renderLabel(entry) {
  return entry.name;
}

export default function BitesPieChart({ bites }) {
  const groups = [
    ...new Set(bites.map((bite) => bite.foodRecord.food.grouping)),
  ];
  const totalBites = bites.length;

  const data = [];
  groups.forEach((group, index) => {
    const count = bites.filter(
      (bite) => bite.foodRecord.food.grouping === group
    ).length;
    data.push({
      name: group,
      value: Math.round((count / totalBites) * 100),
      fill: randomColours[groups.length - index],
    });
  });

  return (
    <>
      <ChartTitle>% of Bites by Food Group</ChartTitle>
      <ResponsiveContainer>
        <PieChart width={300} height={200}>
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
      </ResponsiveContainer>
    </>
  );
}

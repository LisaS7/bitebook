import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";
import { randomColours } from "../../../constants";
import { ChartTitle } from "../style";
// import { bitesPieChartTestData } from "./test_data";

// function renderLabel(entry) {
//   return entry.name;
// }

const RADIAN = Math.PI / 180;
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  // constant controls how far out/in the labels are placed
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN); // left right position
  const y = cy + radius * Math.sin(-midAngle * RADIAN); // up down position

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontWeight={800}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BitesPieChart({ bites }) {
  console.log("BITES IN PIE", bites);
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
      <ChartTitle>Bites by Food Group</ChartTitle>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90}
            labelLine={false}
            label={renderLabel}
          />
          <Legend height={70} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

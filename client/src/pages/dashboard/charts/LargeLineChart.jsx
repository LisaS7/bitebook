import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LargeLineChart() {
  const [filteredFoods, setFilteredFoods] = useState([]);

  const testData = [
    {
      date: "2023-04-10",
      yellow: 3.5,
      blue: 1.3,
      green: 3.7,
      brown: 4.8,
    },
    {
      date: "2023-04-11",
      yellow: 3,
      blue: 1.7,
      green: 3.2,
      brown: 4.1,
    },
    {
      date: "2023-04-12",
      yellow: 2.4,
      blue: 1.7,
      green: 3.5,
      brown: 3.7,
    },
    {
      date: "2023-04-13",
      yellow: 3.2,
      blue: 2.4,
      green: 3.7,
      brown: 3.9,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={testData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 5.5]} ticks={[0, 1, 2, 3, 4, 5]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="yellow"
          stroke="#dbd219"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="blue" stroke="#4031df" />
        <Line type="monotone" dataKey="green" stroke="#009d3c" />
        <Line type="monotone" dataKey="brown" stroke="#785532" />
      </LineChart>
    </ResponsiveContainer>
  );
}

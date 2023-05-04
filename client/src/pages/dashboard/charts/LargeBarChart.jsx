import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { categoryColours } from "../../../constants";
// import { lgBarChartTestData } from "./test_data";
import { capitalise, getDistinctValues } from "../utils";

export default function LargeBarChart({ foodRecords }) {
  const [category, setCategory] = useState("colour");

  // get unique properties from food records
  const properties = [
    ...new Set(
      foodRecords
        .map((record) => getDistinctValues([record.food], category))
        .flat()
    ),
  ];

  const categoryKeys = Object.keys(categoryColours);

  const data = [];
  properties.forEach((property) => {
    // filter to only records which include the current property
    const records = foodRecords.filter((record) =>
      record.food[category].toLowerCase().includes(property)
    );

    // count occurences of each category
    const counts = {};
    records.forEach((record) => {
      counts[record.category]
        ? (counts[record.category] += 1)
        : (counts[record.category] = 1);
    });

    // calculate percentages
    const newRecord = { property: capitalise(property) };
    for (const [key, value] of Object.entries(counts)) {
      const perc = (value / records.length) * 100;
      newRecord[key] = Math.round(perc * 100) / 100;
    }

    data.push(newRecord);
  });

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => setCategory("colour")}>Colour</Button>
        <Button onClick={() => setCategory("flavour")}>Flavour</Button>
        <Button onClick={() => setCategory("texture")}>Texture</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="property"
            interval={0}
            angle={-45}
            height={60}
            textAnchor="end"
          />
          <YAxis
            width={100}
            label={{
              value: "% of foods",
              angle: -90,
            }}
            domain={[0, 100]}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={40} />
          {categoryKeys.map((key, index) => {
            return (
              <Bar
                key={index}
                dataKey={key}
                stackId="a"
                barSize={50}
                fill={categoryColours[key]}
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

// {keys.map((key, index) => {
//     <Bar key={key} dataKey={key} stackId="a" fill={randomColours[index]} />
//   })}

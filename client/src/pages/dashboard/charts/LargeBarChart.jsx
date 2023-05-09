import React, { useState } from "react";
import _ from "underscore";
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
import { ChartTitle } from "../style";

export default function LargeBarChart({ foodRecords }) {
  const [category, setCategory] = useState("colour");
  const categoryKeys = Object.keys(categoryColours);

  // get unique properties from food records
  const properties = [
    ...new Set(
      foodRecords
        .map((record) => getDistinctValues([record.food], category))
        .flat()
    ),
  ];

  const data = [];
  properties.forEach((property) => {
    // filter to only records which include the current property
    const records = foodRecords.filter((record) =>
      record.food[category].toLowerCase().includes(property)
    );

    const counts = _.countBy(records, (record) => record.category);

    // calculate percentages
    const newRecord = { property: capitalise(property) };
    let remainder = 100;
    for (const [key, value] of Object.entries(counts)) {
      const perc = Math.round((value / records.length) * 100);
      newRecord[key] = perc;
      remainder -= perc;
    }

    // add any remainder to the largest category
    const max = Object.keys(newRecord).reduce(
      (a, b) => (newRecord[a] > newRecord[b] ? a : b),
      null
    );
    newRecord[max] += remainder;
    data.push(newRecord);
  });

  return (
    <>
      <ChartTitle>Foods by Description</ChartTitle>
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
            bottom: 70,
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

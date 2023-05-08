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
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getDistinctValues } from "../utils";
import { namedColours, randomColours } from "../../../constants";
import { ChartTitle } from "../style";
// import { lgLineChartTestData } from "./test_data";

export default function LargeLineChart({ bites, filterOptions }) {
  const [category, setCategory] = useState("colour");
  let colours = category === "colour" ? namedColours : randomColours;

  const bitesByDate = [];
  const keys = filterOptions[category];
  bites.forEach((bite) => {
    let index = bitesByDate.findIndex((obj) => obj.date === bite.date);

    // returns a formatted list of the properties for the given category
    const properties = getDistinctValues([bite.foodRecord.food], category);

    // if there's currently no record for date then make a new one
    // and populate with all potential properties
    if (index < 0) {
      const newEntry = { date: bite.date };
      keys.forEach((key) => (newEntry[key] = []));
      bitesByDate.unshift(newEntry);
      index = 0;
    }

    // for each property, add the current rating
    properties.forEach((property) => {
      bitesByDate[index][property].push(bite.rating);
    });
  });

  bitesByDate.forEach((record) => {
    for (const [key, ratings] of Object.entries(record)) {
      if (key !== "date") {
        // calculate average rating for property on the given date
        record[key] =
          ratings.reduce((total, curr) => total + curr, 0) / ratings.length;
      }

      if (!ratings.length) {
        delete record[key];
      }
    }
  });

  const chartKeys = [
    ...new Set(bitesByDate.map((obj) => Object.keys(obj)).flat()),
  ].filter((key) => key !== "date");

  const lines = chartKeys.map((key, index) => {
    return (
      <Line
        key={index}
        type="monotone"
        dataKey={key}
        stroke={colours[key[0].toUpperCase() + key.slice(1)] || colours[index]}
        strokeWidth={2}
        connectNulls
      />
    );
  });

  return (
    <>
      <ChartTitle>Average Ratings by Date</ChartTitle>
      <ButtonGroup>
        <Button onClick={() => setCategory("colour")}>Colour</Button>
        <Button onClick={() => setCategory("flavour")}>Flavour</Button>
        <Button onClick={() => setCategory("texture")}>Texture</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={bitesByDate}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            label={{
              value: "Average Rating",
              angle: -90,
            }}
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
          />
          <Tooltip />
          <Legend verticalAlign="top" iconType="circle" height={50} />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

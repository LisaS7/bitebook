import React, { useState } from "react";
import _ from "underscore";
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

export default function LargeLineChart({ bites }) {
  const [category, setCategory] = useState("colour");
  let colours = category === "colour" ? namedColours : randomColours;

  const bitesByDate = _.groupBy(bites, "date");
  const finalData = [];

  _.keys(bitesByDate).forEach((date) => {
    const agg = {};
    bitesByDate[date].map((bite) => {
      // split string properties into array of distinct values
      const properties = getDistinctValues([bite.foodRecord.food], category);

      // sum and count for each property value
      properties.forEach((property) => {
        if (agg[property]) {
          agg[property].sum += bite.rating;
          agg[property].count++;
        } else {
          agg[property] = { sum: bite.rating, count: 1 };
        }
      });
    });

    const averages = _.mapObject(agg, (val) => val.sum / val.count);
    const newRecord = { date, ...averages };
    finalData.unshift(newRecord);
  });

  const chartKeys = [
    ...new Set(finalData.map((obj) => Object.keys(obj)).flat()),
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
          data={finalData}
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

import styled from "styled-components";
import { Card } from "../../components/Layout/global.style";

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  height: 75vh;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "chart-controls  chart-controls chart-controls top-ratings top-ratings sm-bar-chart sm-bar-chart"
    "lg-bar-chart lg-bar-chart lg-bar-chart top-ratings top-ratings sm-bar-chart sm-bar-chart"
    "lg-bar-chart lg-bar-chart lg-bar-chart lg-line-chart lg-line-chart lg-line-chart lg-line-chart"
    "lg-bar-chart lg-bar-chart lg-bar-chart lg-line-chart lg-line-chart lg-line-chart lg-line-chart";
`;

export const CardSmallBarChart = styled(Card)`
  grid-area: sm-bar-chart;
`;

export const CardLargeLineChart = styled(Card)`
  grid-area: lg-line-chart;
`;

export const CardChartControls = styled(Card)`
  grid-area: chart-controls;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  & > div {
    width: 33%;
  }

  & .form-select {
    min-width: 100px;
  }
`;

export const CardLargeBarChart = styled(Card)`
  grid-area: lg-bar-chart;
`;

export const CardTopRatings = styled(Card)`
  grid-area: top-ratings;
`;

export const ChartTitle = styled.h5`
  text-align: center;
`;

import styled from "styled-components";
import { Card } from "../../components/Layout/global.style";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  height: 75vh;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "sm-bar-chart sm-bar-chart sm-bar-chart lg-line-chart lg-line-chart lg-line-chart line-chart-controls"
    "lg-bar-chart lg-bar-chart lg-bar-chart lg-line-chart lg-line-chart lg-line-chart line-chart-controls"
    "lg-bar-chart lg-bar-chart lg-bar-chart top-ratings top-ratings top-ratings top-ratings"
    "lg-bar-chart lg-bar-chart lg-bar-chart top-ratings top-ratings top-ratings top-ratings";
`;

export const CardTextBox = styled(Card)`
  grid-area: textbox;
`;

export const CardSmallBarChart = styled(Card)`
  grid-area: sm-bar-chart;
`;

export const CardPieChart = styled(Card)`
  grid-area: pie-chart;
`;

export const CardLargeLineChart = styled(Card)`
  grid-area: lg-line-chart;
`;

export const CardLineChartControls = styled(Card)`
  grid-area: line-chart-controls;
`;

export const CardLargeBarChart = styled(Card)`
  grid-area: lg-bar-chart;
`;

export const CardTopRatings = styled(Card)`
  grid-area: top-ratings;
`;

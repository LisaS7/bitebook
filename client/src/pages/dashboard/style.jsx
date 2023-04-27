import styled from "styled-components";
import { Card } from "../../components/Layout/global.style";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "textbox sm-bar-chart pie-chart lg-line-chart lg-line-chart lg-line-chart line-chart-controls"
    "lg-bar-chart lg-bar-chart lg-bar-chart lg-line-chart lg-line-chart lg-line-chart line-chart-controls"
    "lg-bar-chart lg-bar-chart lg-bar-chart top-ratings top-ratings top-ratings top-ratings"
    "lg-bar-chart lg-bar-chart lg-bar-chart top-ratings top-ratings top-ratings top-ratings";
`;

export const TextBox = styled(Card)`
  grid-area: textbox;
`;

export const SmallBarChart = styled(Card)`
  grid-area: sm-bar-chart;
`;

export const PieChart = styled(Card)`
  grid-area: pie-chart;
`;

export const LargeLineChart = styled(Card)`
  grid-area: lg-line-chart;
`;

export const LineChartControls = styled(Card)`
  grid-area: line-chart-controls;
`;

export const LargeBarChart = styled(Card)`
  grid-area: lg-bar-chart;
`;

export const TopRatings = styled(Card)`
  grid-area: top-ratings;
`;

import styled from "styled-components";
import { Card } from "../../components/Layout/global.style";
import paper1 from "./images/paper1.png";
import paper2 from "./images/paper2.avif";
import paper3 from "./images/paper3.png";

export const Container = styled.div`
  display: grid;
  position: relative;
  gap: 1rem;
  height: 75vh;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "chart-controls  chart-controls chart-controls top-ratings top-ratings sm-bar-chart sm-bar-chart"
    "lg-bar-chart lg-bar-chart lg-bar-chart top-ratings top-ratings sm-bar-chart sm-bar-chart"
    "lg-bar-chart lg-bar-chart lg-bar-chart lg-line-chart lg-line-chart lg-line-chart lg-line-chart"
    "lg-bar-chart lg-bar-chart lg-bar-chart lg-line-chart lg-line-chart lg-line-chart lg-line-chart";

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    .recharts-responsive-container {
      max-height: 600px !important;
    }
  }
`;

export const CardSmallBarChart = styled(Card)`
  grid-area: sm-bar-chart;
`;

export const CardLargeLineChart = styled.div`
  grid-area: lg-line-chart;
  position: relative;

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper2});
    background-size: 60rem 50rem;
    background-position: -20px -60px;
    padding: 4rem 2rem 2rem 3rem;
  }
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

export const CardLargeBarChart = styled.div`
  grid-area: lg-bar-chart;

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper1});
    background-size: 60rem 50rem;
    background-position: -20px -60px;
    padding: 4rem 2rem 2rem 3rem;
  }
`;

export const CardTopRatings = styled.div`
  grid-area: top-ratings;

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper3});
    background-size: 40rem 40rem;
    background-position: 0px -10px;
    padding: 5rem 2rem 2rem 3rem;
  }
`;

export const ChartTitle = styled.h5`
  text-align: center;
`;

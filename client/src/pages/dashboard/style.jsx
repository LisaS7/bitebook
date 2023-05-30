import styled from "styled-components";
import paper2 from "./images/paper2.avif";
import paper3 from "./images/paper3.png";
import paper4 from "./images/paper4.avif";
import paper5 from "./images/paper5.jpeg";
import paper6 from "./images/paper6.jpeg";

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

export const CardSmallBarChart = styled.div`
  grid-area: sm-bar-chart;
  position: absolute;
  height: 105%;
  width: 110%;

  & .paper-bg {
    height: 100%;
    background-image: url(${paper6});
    background-position: 20px 0px;
    padding: 4rem 2rem 2rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const CardLargeLineChart = styled.div`
  grid-area: lg-line-chart;
  position: absolute;
  left: -20px;
  width: 100%;
  height: 100%;
  transform: rotate(2deg);

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper5});
    background-size: 80rem;
    background-position: -20px -60px;
    padding: 4rem 2rem 2rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const CardChartControls = styled.div`
  grid-area: chart-controls;
  position: relative;

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper4});
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  & .form-select {
    background-color: ghostwhite;
  }
`;

export const ControlsContainer = styled.div`
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
  position: relative;

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper2});
    background-size: 60rem 50rem;
    background-position: -20px -60px;
    padding: 4rem 2rem 2rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const CardTopRatings = styled.div`
  grid-area: top-ratings;
  height: 110%;

  & .paper-bg {
    width: 100%;
    height: 100%;
    background-image: url(${paper3});
    background-size: 40rem 40rem;
    background-position: 0px -10px;
    padding: 5rem 3rem 1.5rem 5rem;
  }
`;

export const ChartTitle = styled.h5`
  text-align: center;
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.5rem;
`;

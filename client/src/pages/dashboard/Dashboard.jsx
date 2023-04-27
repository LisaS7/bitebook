import {
  Container,
  LargeBarChart,
  LargeLineChart,
  LineChartControls,
  PieChart,
  SmallBarChart,
  TextBox,
  TopRatings,
} from "./style";

export default function Dashboard() {
  return (
    <Container>
      {/* ======== ROW 1 ======== */}
      <TextBox>textbox</TextBox>
      <SmallBarChart>small bar chart</SmallBarChart>
      <PieChart>pie chart</PieChart>
      <LargeLineChart>large line chart</LargeLineChart>
      <LineChartControls>line chart controls</LineChartControls>
      {/* ======== ROW 2 ======== */}
      <LargeBarChart>large bar chart</LargeBarChart>
      <TopRatings>top ratings</TopRatings>
    </Container>
  );
}

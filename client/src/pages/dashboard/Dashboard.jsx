import SmallBarChart from "./charts/SmallBarChart";
import {
  Container,
  CardLargeBarChart,
  CardLargeLineChart,
  CardLineChartControls,
  CardSmallBarChart,
  CardTopRatings,
} from "./style";

export default function Dashboard() {
  return (
    <Container>
      {/* ======== ROW 1 ======== */}
      <CardSmallBarChart>
        <SmallBarChart />
      </CardSmallBarChart>
      <CardLargeLineChart>large line chart</CardLargeLineChart>
      <CardLineChartControls>line chart controls</CardLineChartControls>
      {/* ======== ROW 2 ======== */}
      <CardLargeBarChart>large bar chart</CardLargeBarChart>
      <CardTopRatings>top ratings</CardTopRatings>
    </Container>
  );
}

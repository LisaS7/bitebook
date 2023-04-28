import { useSelector } from "react-redux";
import LargeLineChart from "./charts/LargeLineChart";
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
  const { foods, bites } = useSelector((state) => state);

  return (
    <Container>
      {/* ======== ROW 1 ======== */}
      <CardSmallBarChart>
        <SmallBarChart foods={foods} />
      </CardSmallBarChart>
      <CardLargeLineChart>
        <LargeLineChart bites={bites} />
      </CardLargeLineChart>
      <CardLineChartControls>line chart controls</CardLineChartControls>
      {/* ======== ROW 2 ======== */}
      <CardLargeBarChart>large bar chart</CardLargeBarChart>
      <CardTopRatings>top ratings</CardTopRatings>
    </Container>
  );
}

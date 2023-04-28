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
import { Controls } from "./charts/Controls";
import { getDistinctValues } from "./utils";

export default function Dashboard() {
  const { foods, filteredFoods, bites } = useSelector((state) => state);

  const filterOptions = {
    flavour: getDistinctValues(foods, "flavour"),
    texture: getDistinctValues(foods, "texture"),
    colour: getDistinctValues(foods, "colour"),
  };

  return (
    <Container>
      {/* ======== Top ======== */}
      <CardSmallBarChart>
        <SmallBarChart foods={filteredFoods} />
      </CardSmallBarChart>
      <CardLargeLineChart>
        <LargeLineChart bites={bites} />
      </CardLargeLineChart>
      <CardLineChartControls>
        <Controls options={filterOptions} />
      </CardLineChartControls>
      {/* ======== Bottom ======== */}
      <CardLargeBarChart>large bar chart</CardLargeBarChart>
      <CardTopRatings>top ratings</CardTopRatings>
    </Container>
  );
}

import { useSelector } from "react-redux";
import LargeLineChart from "./charts/LargeLineChart";
import SmallBarChart from "./charts/SmallBarChart";
import {
  Container,
  CardLargeBarChart,
  CardLargeLineChart,
  CardChartControls,
  CardSmallBarChart,
  CardTopRatings,
} from "./style";
import { Controls } from "./charts/Controls";
import { getDistinctValues } from "./utils";
import LargeBarChart from "./charts/LargeBarChart";
import BitesPieChart from "./charts/PieChart";

export default function Dashboard() {
  const { foods, activeData } = useSelector((state) => state);

  const filterOptions = {
    flavour: getDistinctValues(foods, "flavour"),
    texture: getDistinctValues(foods, "texture"),
    colour: getDistinctValues(foods, "colour"),
  };

  return (
    <Container>
      {/* ======== Top ======== */}
      <CardChartControls>
        <Controls options={filterOptions} />
      </CardChartControls>
      <CardTopRatings>
        <BitesPieChart bites={activeData.bites} />
      </CardTopRatings>
      <CardSmallBarChart>
        <SmallBarChart foodRecords={activeData.foodRecords} />
      </CardSmallBarChart>

      {/* ======== Bottom ======== */}
      <CardLargeBarChart>
        <LargeBarChart foodRecords={activeData.foodRecords} />
      </CardLargeBarChart>
      <CardLargeLineChart>
        <LargeLineChart
          bites={activeData.bites}
          filterOptions={filterOptions}
        />
      </CardLargeLineChart>
    </Container>
  );
}

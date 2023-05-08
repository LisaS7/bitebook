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
import Loading from "../../components/Layout/Loading";

export default function Dashboard() {
  const { foods, activeData } = useSelector((state) => state);
  console.log(activeData);

  const filterOptions = {
    flavour: getDistinctValues(foods, "flavour"),
    texture: getDistinctValues(foods, "texture"),
    colour: getDistinctValues(foods, "colour"),
  };

  if (!activeData.filteredBites.length) {
    return <Loading />;
  }

  return (
    <Container>
      {/* ======== Top ======== */}
      <CardChartControls>
        <Controls options={filterOptions} />
      </CardChartControls>
      <CardTopRatings>
        <BitesPieChart bites={activeData.filteredBites} />
      </CardTopRatings>
      <CardSmallBarChart>
        <SmallBarChart foodRecords={activeData.filteredFoodRecords} />
      </CardSmallBarChart>

      {/* ======== Bottom ======== */}
      <CardLargeBarChart>
        <LargeBarChart foodRecords={activeData.filteredFoodRecords} />
      </CardLargeBarChart>
      <CardLargeLineChart>
        <LargeLineChart
          bites={activeData.filteredBites}
          filterOptions={filterOptions}
        />
      </CardLargeLineChart>
    </Container>
  );
}

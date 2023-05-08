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
import { TapeBottomRight, TapeTopLeft } from "../../components/Layout/Tape";

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
        <div className="paper-bg">
          <BitesPieChart bites={activeData.filteredBites} />
        </div>
      </CardTopRatings>
      <CardSmallBarChart>
        <SmallBarChart foodRecords={activeData.filteredFoodRecords} />
      </CardSmallBarChart>

      {/* ======== Bottom ======== */}
      <CardLargeBarChart>
        <div className="paper-bg">
          <LargeBarChart foodRecords={activeData.filteredFoodRecords} />
        </div>
      </CardLargeBarChart>
      <CardLargeLineChart>
        <div className="paper-bg">
          <TapeTopLeft />
          <TapeBottomRight />
          <LargeLineChart
            bites={activeData.filteredBites}
            filterOptions={filterOptions}
          />
        </div>
      </CardLargeLineChart>
    </Container>
  );
}

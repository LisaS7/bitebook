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
import {
  LongTopTape,
  TapeBottomRight,
  TapeBottomLeft,
  TapeTopLeft,
  TapeTopRight,
} from "../../Layout/Tape";

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
        <div className="paper-bg">
          <Controls options={filterOptions} />
        </div>
      </CardChartControls>
      <CardTopRatings>
        <div className="paper-bg">
          <BitesPieChart bites={activeData.filteredBites} />
        </div>
      </CardTopRatings>
      <CardSmallBarChart>
        <div className="paper-bg">
          <TapeTopLeft />
          <TapeTopRight />
          <SmallBarChart foodRecords={activeData.filteredFoodRecords} />
        </div>
      </CardSmallBarChart>

      {/* ======== Bottom ======== */}
      <CardLargeBarChart>
        <LongTopTape />
        <TapeBottomLeft />
        <TapeBottomRight />
        <div className="paper-bg">
          <LargeBarChart foodRecords={activeData.filteredFoodRecords} />
        </div>
      </CardLargeBarChart>
      <CardLargeLineChart>
        <div className="paper-bg">
          <TapeTopLeft />
          <TapeBottomLeft />
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

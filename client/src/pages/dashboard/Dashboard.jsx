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

export default function Dashboard() {
  const { foodRecords, foods, filteredFoods, bites, activePerson } =
    useSelector((state) => state);

  const personBites = bites.filter(
    (bite) => bite.foodRecord.person.id === activePerson.id
  );

  const personFoodRecords = foodRecords.filter(
    (record) => record.person.id === activePerson.id
  );

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
      <CardTopRatings>top ratings</CardTopRatings>
      <CardSmallBarChart>
        <SmallBarChart foodRecords={personFoodRecords} />
      </CardSmallBarChart>

      {/* ======== Bottom ======== */}
      <CardLargeBarChart>large bar chart</CardLargeBarChart>
      <CardLargeLineChart>
        <LargeLineChart bites={personBites} />
      </CardLargeLineChart>
    </Container>
  );
}

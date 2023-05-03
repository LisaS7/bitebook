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
  const { foods, filteredRecords, bites, activePerson } = useSelector(
    (state) => state
  );

  const filterOptions = {
    flavour: getDistinctValues(foods, "flavour"),
    texture: getDistinctValues(foods, "texture"),
    colour: getDistinctValues(foods, "colour"),
  };

  const personBites = bites.filter(
    (bite) => bite.foodRecord.person.id === activePerson.id
  );

  const personFoodRecords = filteredRecords.filter((record) => {
    return record.person.id === activePerson.id;
  });

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
        <LargeLineChart bites={personBites} filterOptions={filterOptions} />
      </CardLargeLineChart>
    </Container>
  );
}

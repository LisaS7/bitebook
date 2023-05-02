import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { ReportHead, ReportSection, ReportContainer } from "./style";

import { CategoryColumns } from "./CategoryColumns";
import PropertyDetails from "./PropertyDetails";

export function FoodReport() {
  const { foodRecords, categories, bites, activePerson } = useSelector(
    (state) => state
  );
  const personFoodRecords = foodRecords.filter(
    (record) => record.person.id === activePerson.id
  );
  const personBites = bites.filter(
    (bite) => bite.foodRecord.person.id === activePerson.id
  );

  return (
    <ReportContainer>
      <ReportHead className="noPrint">
        <h1>Food Report</h1>
        <button
          id="pink-button"
          onClick={() => {
            window.print();
            return false;
          }}
        >
          <FontAwesomeIcon icon={faPrint} />
          <span>Print</span>
        </button>
      </ReportHead>
      <ReportSection>
        <PropertyDetails personBites={personBites} />
      </ReportSection>
      <ReportSection>
        <CategoryColumns
          categories={categories}
          personFoodRecords={personFoodRecords}
        />
      </ReportSection>
    </ReportContainer>
  );
}

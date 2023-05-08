import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { ReportHead, ReportSection, ReportContainer } from "./style";

import { CategoryColumns } from "./CategoryColumns";
import PropertyDetails from "./PropertyDetails";
import { PaperClip, PaperStack } from "../../components/Layout/Paper";

import pclip from "../../components/Layout/paper-clip.png";

export function FoodReport() {
  const { categories, activeData } = useSelector((state) => state);

  return (
    <PaperStack>
      <PaperClip src={pclip} id="pclip" />
      <ReportContainer>
        <ReportHead className="noPrint">
          <h1>Food Report</h1>
          <button
            id="contrast-button"
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
          <PropertyDetails personBites={activeData.bites} />
        </ReportSection>
        <ReportSection>
          <CategoryColumns
            categories={categories}
            personFoodRecords={activeData.foodRecords}
          />
        </ReportSection>
      </ReportContainer>
    </PaperStack>
  );
}

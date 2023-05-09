import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import {
  ReportHead,
  ReportSection,
  ReportContainer,
  PrintButton,
} from "./style";
import { CategoryColumns } from "./CategoryColumns";
import PropertyDetails from "./PropertyDetails";
import { PaperClip, PaperStack } from "../../Layout/Paper";
import pclip from "../../Layout/paper-clip.png";

export function FoodReport() {
  const { categories, activeData } = useSelector((state) => state);

  return (
    <PaperStack>
      <PaperClip className="noPrint" src={pclip} id="pclip" />
      <ReportContainer id="printable">
        <ReportHead>
          <h1 className="noPrint">Food Report</h1>
          <PrintButton
            className="noPrint"
            onClick={() => {
              window.print();
              return false;
            }}
          >
            <FontAwesomeIcon icon={faPrint} />
            Print
          </PrintButton>
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

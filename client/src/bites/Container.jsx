import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";
import Summary from "./Summary";
import { StyledColumnContainer } from "../Layout/global.style";

export default function BiteContainer() {
  const { activeData } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  return (
    <StyledColumnContainer>
      <Summary records={activeData.foodRecords} />
      <div style={{ width: "70%", margin: "auto" }}>
        <EditableTable
          data={activeData.bites}
          InputRow={InputRow}
          TableRow={TableRow}
          dataTemplate={dataTemplate}
        />
      </div>
    </StyledColumnContainer>
  );
}

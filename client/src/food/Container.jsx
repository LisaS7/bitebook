import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import Summary from "./TableSummary";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";
import { StyledColumnContainer } from "../Layout/global.style";

export default function FoodContainer() {
  const { foods } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  return (
    <StyledColumnContainer>
      <Summary foods={foods} />
      <EditableTable
        data={foods}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </StyledColumnContainer>
  );
}

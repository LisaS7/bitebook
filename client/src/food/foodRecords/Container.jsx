import { useSelector } from "react-redux";
import EditableTable from "../../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";

export default function FoodRecords() {
  const { foodRecords } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  return (
    <>
      <EditableTable
        data={foodRecords}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </>
  );
}

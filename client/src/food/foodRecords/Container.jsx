import { useSelector } from "react-redux";
import EditableTable from "../../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";
import Summary from "./Summary";

export default function FoodRecords() {
  const { foodRecords, activePerson } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  let personData = foodRecords.filter(
    (record) => record.person.id === activePerson.id
  );

  return (
    <>
      <Summary records={personData} />
      <EditableTable
        data={personData}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </>
  );
}

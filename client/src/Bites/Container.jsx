import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";
import Summary from "./Summary";

export default function BiteContainer() {
  const { activePerson, bites, foodRecords } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  let personData = bites.filter(
    (bite) => bite.foodRecord.person.id === activePerson.id
  );

  const personRecords = foodRecords.filter(
    (record) => record.person.id === activePerson.id
  );

  return (
    <>
      <Summary records={personRecords} />
      <EditableTable
        data={personData}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </>
  );
}

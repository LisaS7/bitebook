import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";

export default function BiteContainer() {
  const { activePerson, bites } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  let personData = bites.filter(
    (bite) => bite.foodRecord.person.id === activePerson.id
  );

  return (
    <>
      <EditableTable
        data={personData}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </>
  );
}

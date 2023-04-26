// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";

export default function BiteContainer() {
  const { bites } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  return (
    <>
      <EditableTable
        data={bites}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </>
  );
}

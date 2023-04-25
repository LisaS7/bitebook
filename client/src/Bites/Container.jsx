// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editBite, addBite } from "../state/slice";
import EditableTable from "../components/Table";
import {
  GetDataTemplate,
  setFoodId,
  replaceNullWithDefaults,
} from "./data_template";
import { updateRecord, postRecord } from "../Service";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";

export default function BiteContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bites } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleUpdate(event, bite) {
    event.preventDefault();
    setFoodId(bite);
    const newBite = replaceNullWithDefaults(bite);
    updateRecord(newBite, "bites");
    dispatch(editBite(newBite));
  }

  function handleNew(event, data) {
    event.preventDefault();
    setFoodId(data);
    const newBite = replaceNullWithDefaults(data);
    postRecord(newBite, "bites");
    dispatch(addBite(newBite));
    navigate("/bites");
  }

  return (
    <>
      <EditableTable
        data={bites}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
        handleUpdate={handleUpdate}
        handleNew={handleNew}
      />
    </>
  );
}

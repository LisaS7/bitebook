import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editFood, addFood } from "../state/slice";
import EditableTable from "../components/Table";
import Summary from "./TableSummary";
import { GetDataTemplate, replaceNullWithDefaults } from "./data_template";
import { updateRecord, postRecord } from "../Service";
import TableRow from "./TableRow";

export default function FoodContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleUpdate(event, food) {
    event.preventDefault();
    const newFood = replaceNullWithDefaults(food);
    updateRecord(newFood, "foods");
    dispatch(editFood(newFood));
  }

  function handleNew(event, data) {
    event.preventDefault();
    const newFood = replaceNullWithDefaults(data);
    postRecord(newFood, "foods");
    dispatch(addFood(newFood));
    navigate("/foods");
  }

  return (
    <>
      <Summary foods={foods} />
      <EditableTable
        data={foods}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
        handleUpdate={handleUpdate}
        handleNew={handleNew}
      />
    </>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editFood, removeFood, addFood } from "../state/slice";
import EditableTable from "../components/EditableTable";
import Summary from "./Summary";
import { GetDataTemplate, replaceNullWithDefaults } from "./dataTemplate";
import { deleteRecord, updateRecord, postRecord } from "../Service";

export default function FoodContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleDelete(id) {
    deleteRecord(id, "foods");
    dispatch(removeFood(id));
  }

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
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleNew={handleNew}
      />
    </>
  );
}

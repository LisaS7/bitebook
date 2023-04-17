import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editFood, removeFood, addFood } from "../state/slice";
import EditableTable from "../components/EditableTable";
import GetDataTemplate from "./dataTemplate";
import { deleteRecord, updateRecord, postRecord } from "../Service";

export default function FoodContainer({ uid }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleDelete(id) {
    deleteRecord(id, "foods");
    dispatch(removeFood(id));
  }

  function handleUpdate(food) {
    updateRecord(food, "foods");
    dispatch(editFood(food));
  }

  function handleNew(event, data) {
    event.preventDefault();
    data.userId = uid;
    postRecord(data, "foods");
    dispatch(addFood(data));
    navigate("/foods");
  }

  return (
    <>
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

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editFood, removeFood } from "../state/slice";
import EditableTable from "../components/EditableTable";
import GetDataTemplate from "./dataTemplate";
import { deleteRecord, updateRecord } from "../Service";
import { AddButton, ButtonControls } from "../components/Layout/style";

export default function FoodContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <>
      <ButtonControls>
        <AddButton onClick={() => navigate("/foods/add")}>
          <span className="material-symbols-outlined">add_circle</span>
        </AddButton>
      </ButtonControls>
      <EditableTable
        data={foods}
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

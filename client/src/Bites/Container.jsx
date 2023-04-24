import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBite, editBite, addBite } from "../state/slice";
import EditableTable from "../components/EditableTable";
import {
  GetDataTemplate,
  setFoodId,
  replaceNullWithDefaults,
} from "./dataTemplate";
import { deleteRecord, updateRecord, postRecord } from "../Service";

export default function BiteContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bites } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleDelete(id) {
    deleteRecord(id, "bites");
    dispatch(removeBite(id));
  }

  function handleUpdate(bite) {
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
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleNew={handleNew}
      />
    </>
  );
}

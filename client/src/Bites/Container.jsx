import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBite, editBite, addBite } from "../state/slice";
import EditableTable from "../components/EditableTable";
import GetDataTemplate from "./dataTemplate";
import { deleteRecord, updateRecord, postRecord } from "../Service";

export default function BiteContainer({ uid }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bites } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleDelete(id) {
    deleteRecord(id, "bites");
    dispatch(removeBite(id));
  }

  function handleUpdate(bite) {
    if (typeof bite.food !== "object") {
      bite.food = { id: bite.food };
    }
    updateRecord(bite, "bites");
    dispatch(editBite(bite));
  }

  function handleNew(event, data) {
    event.preventDefault();
    data.userId = uid;

    if (data.food) {
      data.food = { id: data.food };
    }

    postRecord(data, "bites");
    dispatch(addBite(data));
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

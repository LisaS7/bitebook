import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBite, editBite } from "../state/slice";
import { AddButton, ButtonControls } from "../components/Layout/style";
import EditableTable from "../components/EditableTable";
import GetDataTemplate from "./dataTemplate";
import { deleteRecord, updateRecord } from "../Service";

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
    updateRecord(bite, "bites");
    dispatch(editBite(bite));
  }

  return (
    <>
      <ButtonControls>
        <AddButton onClick={() => navigate("/bites/add")}>
          <span className="material-symbols-outlined">add_circle</span>
        </AddButton>
      </ButtonControls>
      <EditableTable
        data={bites}
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddButton, ButtonControls } from "../Layout/style";
import EditableTable from "../EditableTable";
import GetDataTemplate from "./dataTemplate";

export default function BiteContainer() {
  const navigate = useNavigate();
  const { bites } = useSelector((state) => state);
  const dataTemplate = GetDataTemplate();

  function handleDelete(id) {}

  function handleUpdate(bite) {}

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
        handleSave={handleUpdate}
      />
    </>
  );
}

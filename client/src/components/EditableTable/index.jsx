import { useState } from "react";
import Row from "./Row";
import InputRow from "./InputRow";
import { StyledTable, ButtonControls, LargeButton } from "./style";
import TableHead from "./Head";

export default function EditableTable({
  summary,
  data,
  dataTemplate,
  handleDelete,
  handleUpdate,
  handleNew,
}) {
  const [mode, setMode] = useState("view");
  const keyOrder = Object.keys(dataTemplate);

  function toggleEditMode() {
    mode === "view" ? setMode("edit") : setMode("view");
  }

  let dataElements;

  switch (mode) {
    case "add":
    case "view":
      dataElements = data.map((item) => (
        <Row
          key={item.id}
          item={item}
          keyOrder={keyOrder}
          handleDelete={handleDelete}
        />
      ));
      break;
    case "edit":
      dataElements = data.map((item) => (
        <InputRow
          key={item.id}
          item={item}
          mode={mode}
          dataTemplate={dataTemplate}
          handleAction={handleUpdate}
        />
      ));
      break;
    default:
      break;
  }

  return (
    <div>
      <ButtonControls>
        {summary}
        <div>
          <LargeButton data-cy="add-btn" onClick={() => setMode("add")}>
            <span className="material-symbols-outlined">add_circle</span>
          </LargeButton>
          <LargeButton data-cy="edit-btn" setMode={setMode}>
            <span
              className="material-symbols-outlined"
              onClick={() => toggleEditMode()}
            >
              {mode === "view" ? "edit" : "edit_off"}
            </span>
          </LargeButton>
        </div>
      </ButtonControls>
      <StyledTable data-cy="table" responsive hover>
        <TableHead template={dataTemplate} />
        <tbody>
          {mode === "add" && (
            <InputRow
              item={{}}
              mode={mode}
              setMode={setMode}
              dataTemplate={dataTemplate}
              handleAction={handleNew}
            />
          )}
          {dataElements}
        </tbody>
      </StyledTable>
    </div>
  );
}

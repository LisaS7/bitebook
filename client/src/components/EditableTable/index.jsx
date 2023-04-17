import { useState } from "react";
import Row from "./Row";
import EditRow from "./EditRow";
import AddRow from "./AddRow";
import { StyledTable } from "./style";
import { AddButton, ButtonControls } from "../Layout/style";

export default function EditableTable({
  data,
  dataTemplate,
  handleDelete,
  handleUpdate,
  handleNew,
}) {
  const [mode, setMode] = useState("view");
  const keyOrder = Object.keys(dataTemplate);
  const headings = Object.values(dataTemplate).map((obj) => obj.heading);

  const headingElements = headings.map((heading, index) => (
    <th key={index}>{heading}</th>
  ));

  let dataElements;

  switch (mode) {
    case "add":
    case "view":
      dataElements = data.map((item) => (
        <Row
          key={item.id}
          item={item}
          setMode={setMode}
          keyOrder={keyOrder}
          handleDelete={handleDelete}
        />
      ));
      break;
    case "edit":
      dataElements = data.map((item) => (
        <EditRow
          key={item.id}
          item={item}
          setMode={setMode}
          dataTemplate={dataTemplate}
          handleUpdate={handleUpdate}
        />
      ));
      break;
    default:
      break;
  }

  return (
    <section>
      <ButtonControls>
        <AddButton onClick={() => setMode("add")}>
          <span className="material-symbols-outlined">add_circle</span>
        </AddButton>
      </ButtonControls>
      <StyledTable size="sm" responsive>
        <thead>
          <tr key="headings">
            {headingElements}
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mode === "add" && (
            <AddRow
              setMode={setMode}
              dataTemplate={dataTemplate}
              handleNew={handleNew}
            />
          )}
          {dataElements}
        </tbody>
      </StyledTable>
    </section>
  );
}

import { useState } from "react";
import Row from "./Row";
import InputRow from "./InputRow";
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
        <InputRow
          key={item.id}
          item={item}
          mode={mode}
          setMode={setMode}
          dataTemplate={dataTemplate}
          handleAction={handleUpdate}
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
      <StyledTable responsive>
        <thead>
          <tr>
            {headingElements}
            <th></th>
            <th></th>
          </tr>
        </thead>
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
    </section>
  );
}

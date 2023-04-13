import { useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "./Row";
import EditRow from "./EditRow";

export default function EditableTable({
  data,
  dataTemplate,
  handleDelete,
  handleSave,
}) {
  const [editMode, setEditMode] = useState(false);
  const keyOrder = Object.keys(dataTemplate);
  const headings = Object.values(dataTemplate).map((obj) => obj.heading);

  const headingElements = headings.map((heading, index) => (
    <th key={index}>{heading}</th>
  ));

  const dataElements = data.map((item) =>
    editMode ? (
      <EditRow
        key={item.id}
        item={item}
        setEditMode={setEditMode}
        dataTemplate={dataTemplate}
        handleSave={handleSave}
      />
    ) : (
      <Row
        key={item.id}
        item={item}
        handleDelete={handleDelete}
        setEditMode={setEditMode}
        keyOrder={keyOrder}
      />
    )
  );

  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          {headingElements}
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>{dataElements}</tbody>
    </Table>
  );
}

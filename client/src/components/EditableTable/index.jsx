import { useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "./Row";
import EditRow from "./EditRow";

export default function EditableTable({
  data,
  dataTemplate,
  handleDelete,
  handleUpdate,
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
        handleSave={handleUpdate}
      />
    ) : (
      <Row
        key={item.id}
        item={item}
        setEditMode={setEditMode}
        keyOrder={keyOrder}
        handleDelete={handleDelete}
      />
    )
  );

  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          {headingElements}
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{dataElements}</tbody>
    </Table>
  );
}

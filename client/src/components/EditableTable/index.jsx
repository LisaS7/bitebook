import { useState, useEffect } from "react";
import Row from "./Row";
import InputRow from "./InputRow";
import { StyledTable } from "./style";
import TableHead from "./Head";
import { ButtonSection } from "./ButtonSection";

export default function EditableTable({
  data,
  dataTemplate,
  handleDelete,
  handleUpdate,
  handleNew,
}) {
  const [editRow, setEditRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);
  const keyOrder = Object.keys(dataTemplate);

  function toggleEdit(itemId) {
    setEditRow(itemId);
  }

  function addRow() {
    const newRow = (
      <InputRow
        item={{}}
        setEditRow={setEditRow}
        dataTemplate={dataTemplate}
        handleAction={handleNew}
      />
    );
    setTableRows([newRow, ...tableRows]);
  }

  let tempRows = [];
  useEffect(() => {
    data.forEach((item) => {
      if (item.id === editRow) {
        tempRows.push(
          <InputRow
            key={item.id}
            item={item}
            setEditRow={setEditRow}
            dataTemplate={dataTemplate}
            handleAction={handleUpdate}
          />
        );
      } else {
        tempRows.push(
          <Row
            key={item.id}
            item={item}
            toggleEdit={toggleEdit}
            handleDelete={handleDelete}
            keyOrder={keyOrder}
          />
        );
      }
    });
    setTableRows([...tempRows]);
    // Dependency array is fine - don't want to rerender when tempRows changes
    // eslint-disable-next-line
  }, [data, editRow]);

  return (
    <div>
      <ButtonSection addRow={addRow} />
      <StyledTable data-cy="table" responsive hover>
        <TableHead template={dataTemplate} />
        <tbody>{tableRows}</tbody>
      </StyledTable>
    </div>
  );
}

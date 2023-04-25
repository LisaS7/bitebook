import { useState, useEffect } from "react";
import { StyledTable } from "./style";
import TableHead from "./Head";
import { ButtonSection } from "./ButtonSection";

export default function EditableTable({
  data,
  InputRow,
  TableRow,
  dataTemplate,
  handleUpdate,
  handleNew,
}) {
  const [editRow, setEditRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);

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
          <TableRow key={item.id} item={item} toggleEdit={toggleEdit} />
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

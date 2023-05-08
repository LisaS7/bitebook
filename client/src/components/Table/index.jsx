import { useState, useEffect } from "react";
import { StyledTable } from "./style";
import TableHead from "./Head";
import { TipBar } from "../../Layout/global.style";

export default function EditableTable({
  data,
  InputRow,
  TableRow,
  dataTemplate,
}) {
  const [editRow, setEditRow] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  function toggleEdit(itemId) {
    setEditRow(itemId);
  }

  function addRow() {
    const newRow = (
      <InputRow action="create" item={{}} setEditRow={setEditRow} />
    );
    setTableRows([newRow, ...tableRows]);
  }

  let tempRows = [];
  useEffect(() => {
    data.forEach((item) => {
      if (item.id === editRow) {
        tempRows.push(
          <InputRow
            action="update"
            key={item.id}
            item={item}
            setEditRow={setEditRow}
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
      <StyledTable data-cy="table" responsive hover>
        <TableHead template={dataTemplate} addRow={addRow} />
        <tbody>{tableRows}</tbody>
      </StyledTable>
    </div>
  );
}

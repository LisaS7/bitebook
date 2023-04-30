import { useDispatch } from "react-redux";
import { deleteRecord } from "../Service";
import { removeStateItem } from "../state/slice";
import { GetDataTemplate } from "./data_template";
import { DeleteButton, EditButton } from "../components/Table/Buttons";

export default function TableRow({ item, toggleEdit }) {
  const dispatch = useDispatch();
  const dataTemplate = GetDataTemplate();
  const keyOrder = Object.keys(dataTemplate);

  function handleDelete(id) {
    deleteRecord(id, "foods");
    dispatch(removeStateItem({ id, list: "foods" }));
  }

  let cells = [];

  keyOrder.forEach((field) => {
    cells.push(
      <td data-cy={field} className={field} key={field}>
        {item[field]}
      </td>
    );
  });

  return (
    <tr>
      {cells}
      <td data-cy={`edit-${item.name || item.date}`} key={`edit-${item.name}`}>
        <EditButton itemId={item.id} toggleEdit={toggleEdit} />
      </td>
      <td data-cy={`delete-${item.name}`} key={`delete-${item.name}`}>
        <DeleteButton handleDelete={handleDelete} id={item.id} />
      </td>
    </tr>
  );
}

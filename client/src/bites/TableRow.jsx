import { useDispatch } from "react-redux";
import { deleteRecord } from "../Service";
import { removeBite } from "../state/slice";
import { GetDataTemplate } from "./data_template";
import { DisplayRating } from "./utils";
import { DeleteButton, EditButton } from "../components/Table/Buttons";

export default function TableRow({ item, toggleEdit }) {
  const dispatch = useDispatch();
  const dataTemplate = GetDataTemplate();
  const keyOrder = Object.keys(dataTemplate);

  function handleDelete(id) {
    deleteRecord(id, "bites");
    dispatch(removeBite(id));
  }

  let cells = [];

  keyOrder.forEach((field) => {
    switch (field) {
      case "food":
        if (typeof item[field] === "object" && field !== null) {
          cells.push(
            <td data-cy={field} key={field}>
              {item[field]?.name}
            </td>
          );
        }
        break;
      case "rating":
        cells.push(
          <td data-cy={field} key={field}>
            {DisplayRating(item[field])}
          </td>
        );
        break;
      default:
        cells.push(
          <td data-cy={field} className={field} key={field}>
            {item[field]}
          </td>
        );
        break;
    }
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

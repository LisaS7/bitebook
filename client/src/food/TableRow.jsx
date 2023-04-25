import { useDispatch } from "react-redux";
import { deleteRecord } from "../Service";
import { removeFood } from "../state/slice";
import { GetDataTemplate } from "./data_template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categorySymbols } from "./category_symbols";
import { DeleteButton, EditButton } from "../components/Table/Buttons";

export default function TableRow({ item, toggleEdit }) {
  const dispatch = useDispatch();
  const dataTemplate = GetDataTemplate();
  const keyOrder = Object.keys(dataTemplate);

  function handleDelete(id) {
    deleteRecord(id, "foods");
    dispatch(removeFood(id));
  }

  let cells = [];

  keyOrder.forEach((field) => {
    switch (field) {
      case "category":
        const value = item[field].toLowerCase();
        let symbol;
        if (value && value !== "none") {
          symbol = (
            <FontAwesomeIcon
              icon={categorySymbols[value][0]}
              color={categorySymbols[value][1]}
              size="xl"
            />
          );
        }

        cells.push(
          <td data-cy={field} className={field} key={field}>
            <div>
              {value && symbol}
              {" " + item[field]}
            </div>
          </td>
        );
        break;
      case "bites":
        cells.push(
          <td data-cy={field} className={field} key={field}>
            {item[field].length}
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

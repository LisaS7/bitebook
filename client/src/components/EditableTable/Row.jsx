import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categorySymbols } from "../../food/category_symbols";
import { DisplayRating } from "./utils";
import { DeleteButton, EditButton } from "./Buttons";

export default function Row({ item, toggleEdit, handleDelete, keyOrder }) {
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

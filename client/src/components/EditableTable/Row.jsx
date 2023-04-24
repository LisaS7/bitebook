import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faCircleQuestion,
  faChevronCircleDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { DisplayRating } from "./utils";
import { DeleteButton, EditButton } from "./Buttons";

export default function Row({ item, toggleEdit, handleDelete, keyOrder }) {
  let cells = [];

  const categorySymbols = {
    yes: [faCircleCheck, "green"],
    no: [faCircleXmark, "red"],
    maybe: [faCircleQuestion, "darkorange"],
    rarely: [faChevronCircleDown, "darkturquoise"],
    untested: [faMinus, "lightslategrey"],
  };

  keyOrder.forEach((field) => {
    // food dropdown
    if (typeof item[field] === "object" && field !== null) {
      cells.push(
        <td data-cy={field} key={field}>
          {item[field]?.name}
        </td>
      );
      // rating buttons
    } else if (field === "rating") {
      cells.push(
        <td data-cy={field} key={field}>
          {DisplayRating(item[field])}
        </td>
      );
      // category
    } else if (field === "category") {
      const value = item[field].toLowerCase();

      const symbol = value && (
        <FontAwesomeIcon
          icon={categorySymbols[value][0]}
          color={categorySymbols[value][1]}
          size="xl"
        />
      );

      cells.push(
        <td data-cy={field} className={field} key={field}>
          <div>
            {value && symbol}
            {" " + item[field]}
          </div>
        </td>
      );
    } else {
      cells.push(
        <td data-cy={field} className={field} key={field}>
          {item[field]}
        </td>
      );
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

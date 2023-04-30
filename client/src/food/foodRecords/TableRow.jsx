import { useDispatch } from "react-redux";
import { deleteRecord } from "../../Service";
import { removeStateItem } from "../../state/slice";
import { GetDataTemplate, categorySymbols } from "./data_template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteButton, EditButton } from "../../components/Table/Buttons";
import { PopoverTrigger } from "../food_popover";
import { Circle } from "../../components/Table/style";
import { FoodCell } from "./style";

export default function TableRow({ item, toggleEdit }) {
  const dispatch = useDispatch();
  const dataTemplate = GetDataTemplate();
  const keyOrder = Object.keys(dataTemplate);

  function handleDelete(id) {
    deleteRecord(id, "foodlists");
    dispatch(removeStateItem({ id, list: "foodRecords" }));
  }

  let cells = [];

  keyOrder.forEach((field) => {
    switch (field) {
      case "food":
        if (typeof item[field] === "object" && field !== null) {
          cells.push(
            <FoodCell data-cy={field} key={field}>
              {item["food"].icon}
              <PopoverTrigger food={item["food"]} />
            </FoodCell>
          );
        }
        break;
      case "person":
        if (typeof item[field] === "object" && field !== null) {
          const person = item[field];
          cells.push(
            <td data-cy={field} key={field}>
              <Circle colour={person.colour} />
              {person.name}
            </td>
          );
        }
        break;
      case "category":
        const value = item[field]?.toLowerCase();
        let symbol = null;
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
      // TODO: add bites list to food record view
      case "bites":
        cells.push(
          <td data-cy={field} className={field} key={field}>
            {item[field]?.length}
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

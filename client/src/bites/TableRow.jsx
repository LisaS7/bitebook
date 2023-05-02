import { useDispatch } from "react-redux";
import { deleteRecord } from "../Service";
import { removeStateItem } from "../state/slice";
import { GetDataTemplate } from "./data_template";
import { DisplayRating } from "./utils";
import { DeleteButton, EditButton } from "../components/Table/Buttons";
import { PopoverTrigger } from "../food/food_popover";
import { Circle } from "../components/Table/style";

export default function TableRow({ item, toggleEdit }) {
  const dispatch = useDispatch();
  const dataTemplate = GetDataTemplate();
  const keyOrder = Object.keys(dataTemplate);

  function handleDelete(id) {
    deleteRecord(id, "bites");
    dispatch(removeStateItem({ id, list: "bites" }));
  }

  function PersonCircle() {
    return <Circle colour={item.foodRecord.person.colour} />;
  }

  let cells = [];

  keyOrder.forEach((field) => {
    switch (field) {
      case "person":
        cells.push(
          <td data-cy={field} className={field} key={field}>
            <PersonCircle />
            {item.foodRecord.person.name}
          </td>
        );
        break;
      case "food":
        if (typeof item.foodRecord.food === "object" && field !== null) {
          cells.push(
            <td data-cy={field} key={field}>
              <PopoverTrigger food={item.foodRecord.food} />
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
        {/* <EditButton itemId={item.id} toggleEdit={toggleEdit} /> */}
      </td>
      <td data-cy={`delete-${item.name}`} key={`delete-${item.name}`}>
        <DeleteButton handleDelete={handleDelete} id={item.id} />
      </td>
    </tr>
  );
}

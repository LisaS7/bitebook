import { useDispatch } from "react-redux";
import { deleteRecord } from "../Service";
import { removeBite } from "../state/slice";
import { GetDataTemplate } from "./data_template";
import { DisplayRating } from "./utils";
import { DeleteButton, EditButton } from "../components/Table/Buttons";
import { PopoverTrigger } from "../food/food_popover";
import styled from "styled-components";

const Circle = styled.span`
  display: inline-flex;
  background-color: ${(props) => props.colour};
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-right: 20px;
`;

export default function TableRow({ item, toggleEdit }) {
  const dispatch = useDispatch();
  const dataTemplate = GetDataTemplate();
  const keyOrder = Object.keys(dataTemplate);

  function handleDelete(id) {
    deleteRecord(id, "bites");
    dispatch(removeBite(id));
  }

  function PersonCircle() {
    return <Circle colour={item.person.colour} />;
  }

  let cells = [];

  keyOrder.forEach((field) => {
    switch (field) {
      case "person":
        cells.push(
          <td data-cy={field} className={field} key={field}>
            <PersonCircle />
            {item[field]?.name}
          </td>
        );
        break;
      case "food":
        if (typeof item[field] === "object" && field !== null) {
          cells.push(
            <td data-cy={field} key={field}>
              <PopoverTrigger food={item["food"]} />
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

import { DisplayRating } from "./utils";
import { DeleteButton, EditButton } from "./Buttons";

export default function Row({ item, handleDelete, setEditMode, keyOrder }) {
  let cells = [];

  keyOrder.forEach((field) => {
    if (typeof item[field] === "object" && field !== null) {
      cells.push(<td key={field}>{item[field]?.name}</td>);
    } else if (field === "rating") {
      cells.push(<td key={field}>{DisplayRating(item[field])}</td>);
    } else {
      cells.push(<td key={field}>{item[field]}</td>);
    }
  });

  return (
    <tr>
      {cells}
      <td>
        <EditButton setEditMode={setEditMode} />
      </td>
      <td>
        <DeleteButton handleDelete={handleDelete} id={item.id} />
      </td>
    </tr>
  );
}

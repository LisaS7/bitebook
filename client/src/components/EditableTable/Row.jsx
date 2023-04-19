import { DisplayRating } from "./utils";
import { DeleteButton } from "./Buttons";

export default function Row({ item, handleDelete, keyOrder }) {
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
      <td key="blank"></td>
      <td key="delete">
        <DeleteButton handleDelete={handleDelete} id={item.id} />
      </td>
    </tr>
  );
}

import { DisplayRating } from "./utils";
import { DeleteButton } from "./Buttons";
import maybe from "../../svg/category_maybe.svg";
import yes from "../../svg/category_yes.svg";
import no from "../../svg/category_no.svg";

export default function Row({ item, handleDelete, keyOrder }) {
  let cells = [];

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

      let symbol;
      switch (value) {
        case "yes":
          symbol = <img src={yes} alt="category" />;
          break;
        case "no":
          symbol = <img src={no} alt="category" />;
          break;
        case "maybe":
          symbol = <img src={maybe} alt="category" />;
          break;
        default:
          symbol = "";
          break;
      }

      cells.push(
        <td data-cy={field} className={field} key={field}>
          <div className={`${field}-${value}`}>
            {symbol}
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
      <td data-cy={`delete-${item.name}`} key="delete">
        <DeleteButton handleDelete={handleDelete} id={item.id} />
      </td>
    </tr>
  );
}

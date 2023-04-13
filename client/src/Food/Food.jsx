import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFood } from "../state/slice";
import { deleteFood } from "../Service";
import EditFood from "./EditFood";

export default function Food({ food }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function handleDelete() {
    deleteFood(food.id);
    dispatch(removeFood(food.id));
  }

  if (editMode) {
    return <EditFood food={food} setEditMode={setEditMode} />;
  }

  return (
    <tr>
      <td className="small-cell">{food.icon}</td>
      <td>{food.name}</td>
      <td>{food.category}</td>
      <td>{food.grouping}</td>
      <td>{food.colour}</td>
      <td>{food.flavour}</td>
      <td>{food.texture}</td>
      <td className="small-text">{food.notes}</td>
      <td>
        <button>
          <span
            className="material-symbols-outlined"
            onClick={() => setEditMode(true)}
          >
            edit
          </span>
        </button>
      </td>
      <td>
        <button>
          <span className="material-symbols-outlined" onClick={handleDelete}>
            cancel
          </span>
        </button>
      </td>
    </tr>
  );
}

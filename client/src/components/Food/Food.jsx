import { useState } from "react";
import EditFood from "./EditFood";

export default function Food({ food }) {
  const [editMode, setEditMode] = useState(false);

  function handleDelete() {}

  if (editMode) {
    return <EditFood food={food} setEditMode={setEditMode} />;
  }

  return (
    <tr>
      <td>{food.icon}</td>
      <td>{food.name}</td>
      <td>{food.category}</td>
      <td>{food.grouping}</td>
      <td>{food.colour}</td>
      <td>{food.flavour}</td>
      <td>{food.texture}</td>
      <td>{food.notes}</td>
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

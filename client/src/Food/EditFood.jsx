import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFood } from "../state/slice";
import { updateFood } from "../Service";

export default function EditFood({ food, setEditMode }) {
  const [tempFood, setTempFood] = useState({ ...food });
  const categories = useSelector((state) => state.categories);
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  function changeValue(e, key) {
    const copyFood = { ...tempFood };
    copyFood[key] = e.target.value;
    setTempFood({ ...copyFood });
  }

  function handleSave() {
    setEditMode(false);
    updateFood(tempFood);
    dispatch(editFood(tempFood));
  }

  console.log(categories);

  const categoryOptions = categories.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));

  const groupOptions = groups.map((group) => (
    <option key={group} value={group}>
      {group}
    </option>
  ));

  return (
    <tr>
      <td>
        <input
          value={tempFood.icon}
          onChange={(e) => changeValue(e, "icon")}
          maxLength={4}
          className="small-cell"
        />
      </td>
      <td>
        <input value={tempFood.name} onChange={(e) => changeValue(e, "name")} />
      </td>
      <td>
        <select
          value={tempFood.category}
          onChange={(e) => changeValue(e, "category")}
        >
          {categoryOptions}
        </select>
      </td>
      <td>
        <select
          value={tempFood.group}
          onChange={(e) => changeValue(e, "grouping")}
        >
          {groupOptions}
        </select>
      </td>
      <td>
        <input
          value={tempFood.colour}
          onChange={(e) => changeValue(e, "colour")}
        />
      </td>
      <td>
        <input
          value={tempFood.flavour}
          onChange={(e) => changeValue(e, "flavour")}
        />
      </td>
      <td>
        <input
          value={tempFood.texture}
          onChange={(e) => changeValue(e, "texture")}
        />
      </td>
      <td>
        <textarea
          value={tempFood.notes}
          onChange={(e) => changeValue(e, "notes")}
        ></textarea>
      </td>
      <td>
        <button>
          <span className="material-symbols-outlined" onClick={handleSave}>
            done
          </span>
        </button>
      </td>
      <td>
        <button>
          <span
            className="material-symbols-outlined"
            onClick={() => setEditMode(false)}
          >
            close
          </span>
        </button>
      </td>
    </tr>
  );
}

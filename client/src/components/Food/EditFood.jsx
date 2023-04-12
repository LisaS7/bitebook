import { useState } from "react";

export default function EditFood({ food, setEditMode }) {
  const [icon, setIcon] = useState(food.icon);
  const [name, setName] = useState(food.name);
  const [category, setCategory] = useState(food.category);
  const [group, setGroup] = useState(food.grouping);
  const [colour, setColour] = useState(food.colour);
  const [flavour, setFlavour] = useState(food.flavour);
  const [texture, setTexture] = useState(food.texture);
  const [notes, setNotes] = useState(food.notes);

  function handleSave() {
    setEditMode(false);
  }

  return (
    <tr>
      <td>
        <input
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          maxLength={4}
        />
      </td>
      <td>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </td>
      <td>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </td>
      <td>
        <input value={group} onChange={(e) => setGroup(e.target.value)} />
      </td>
      <td>
        <input value={colour} onChange={(e) => setColour(e.target.value)} />
      </td>
      <td>
        <input value={flavour} onChange={(e) => setFlavour(e.target.value)} />
      </td>
      <td>
        <input value={texture} onChange={(e) => setTexture(e.target.value)} />
      </td>
      <td>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} />
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

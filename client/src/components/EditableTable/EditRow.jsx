import { useState } from "react";
import { Input, Dropdown, TextArea } from "./FormElements";

export default function EditRow({
  item,
  dataTemplate,
  setEditMode,
  handleSave,
}) {
  const [tempItem, setTempItem] = useState({ ...item });

  function handleClickSave() {
    handleSave(tempItem);
    setEditMode(false);
  }

  function changeValue(e, key) {
    const copyItem = { ...tempItem };
    copyItem[key] = e.target.value;
    setTempItem({ ...copyItem });
  }

  let cells = [];
  for (const [key, value] of Object.entries(dataTemplate)) {
    const fieldValue = tempItem[key];

    if (value.type === "text") {
      cells.push(
        <Input
          key={key}
          keyName={key}
          fieldValue={fieldValue}
          changeValue={changeValue}
        />
      );
    }

    if (value.type === "select") {
      cells.push(
        <Dropdown
          key={key}
          keyName={key}
          items={value.options}
          fieldValue={fieldValue}
          changeValue={changeValue}
        />
      );
    }
  }

  return (
    <tr>
      {cells}
      <TextArea
        keyName="notes"
        fieldValue={tempItem.notes}
        changeValue={changeValue}
      />
      <td>
        <button>
          <span className="material-symbols-outlined" onClick={handleClickSave}>
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

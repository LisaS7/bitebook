import { useState } from "react";
import { Input, Dropdown, TextArea, EmojiInput } from "./FormElements";
import { CancelButton, SaveButton } from "./Buttons";

export default function EditRow({
  item,
  dataTemplate,
  setEditMode,
  handleUpdate,
}) {
  const [tempItem, setTempItem] = useState({ ...item });

  function handleClickSave() {
    handleUpdate(tempItem);
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

    if (value.type === "textarea") {
      cells.push(
        <TextArea
          key={key}
          keyName={key}
          fieldValue={fieldValue}
          changeValue={changeValue}
        />
      );
    }

    if (value.type === "emoji") {
      cells.push(<EmojiInput key={key} value={fieldValue} />);
    }
  }

  return (
    <tr>
      {cells}
      <td>
        <SaveButton handleClickSave={handleClickSave} />
      </td>
      <td>
        <CancelButton setEditMode={setEditMode} />
      </td>
    </tr>
  );
}

import { useState } from "react";
import {
  Input,
  Dropdown,
  ObjectDropdown,
  TextArea,
  EmojiInput,
  DateInput,
  RatingInput,
} from "./FormElements";
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

  function changeIcon(icon) {
    setTempItem({ ...tempItem, icon });
  }

  let cells = [];
  for (const [key, value] of Object.entries(dataTemplate)) {
    const fieldValue = tempItem[key];

    switch (value.type) {
      case "text":
        cells.push(
          <Input
            key={key}
            keyName={key}
            fieldValue={fieldValue}
            changeValue={changeValue}
          />
        );
        break;
      case "select":
        cells.push(
          <Dropdown
            key={key}
            keyName={key}
            items={value.options}
            fieldValue={fieldValue}
            changeValue={changeValue}
          />
        );
        break;
      case "select_object":
        cells.push(
          <ObjectDropdown
            key={key}
            keyName={key}
            items={value.options}
            fieldValue={fieldValue}
            changeValue={changeValue}
          />
        );
        break;
      case "textarea":
        cells.push(
          <TextArea
            key={key}
            keyName={key}
            fieldValue={fieldValue}
            changeValue={changeValue}
          />
        );
        break;
      case "date":
        cells.push(
          <DateInput
            key={key}
            keyName={key}
            fieldValue={fieldValue}
            changeValue={changeValue}
          />
        );
        break;
      case "emoji":
        cells.push(
          <EmojiInput key={key} value={fieldValue} changeIcon={changeIcon} />
        );
        break;
      case "radio":
        cells.push(
          <RatingInput
            key={key}
            keyName={key}
            value={fieldValue}
            options={value.options}
            itemId={item.id}
            changeValue={changeValue}
          />
        );
        break;
      default:
        break;
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

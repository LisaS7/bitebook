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

export default function InputRow({
  item,
  mode,
  setMode,
  dataTemplate,
  handleAction,
}) {
  const [tempItem, setTempItem] = useState({ ...item });

  function handleClickSave(event = null) {
    if (mode === "add") {
      handleAction(event, tempItem);
    } else {
      handleAction(tempItem);
    }
    setMode("view");
  }

  function changeValue(e, key) {
    setTempItem({ ...tempItem, [key]: e.target.value });
  }

  function changeIcon(icon) {
    setTempItem({ ...tempItem, icon });
  }

  let cells = [];
  for (const [key, value] of Object.entries(dataTemplate)) {
    if (!tempItem[key]) {
      tempItem[key] = value.default || "";
    }

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
        <CancelButton setMode={setMode} />
      </td>
    </tr>
  );
}
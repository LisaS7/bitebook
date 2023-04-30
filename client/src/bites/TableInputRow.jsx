import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editBite, addBite } from "../state/slice";
import { updateRecord, postRecord } from "../Service";
import {
  Input,
  ObjectDropdown,
  TextArea,
  DateInput,
  RatingInput,
} from "../components/Table/form_elements";
import { SaveButton } from "../components/Table/Buttons";
import {
  GetDataTemplate,
  replaceNullWithDefaults,
  setObjectId,
} from "./data_template";

export default function InputRow({ action, item, setEditRow }) {
  const dataTemplate = GetDataTemplate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tempItem, setTempItem] = useState({ ...item });

  function handleClickSave(event) {
    event.preventDefault();

    const item = { ...tempItem };
    setObjectId(item, "food");
    setObjectId(item, "person");
    replaceNullWithDefaults(item);

    if (action === "create") {
      postRecord(item, "bites");
      dispatch(addBite(item));
      navigate("/bites");
    }

    if (action === "update") {
      updateRecord(item, "bites");
      dispatch(editBite(item));
    }
    setEditRow(null);
  }

  function changeValue(e, key) {
    setTempItem({ ...tempItem, [key]: e.target.value });
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
      <td key="save-button">
        <SaveButton handleClickSave={handleClickSave} />
      </td>
    </tr>
  );
}

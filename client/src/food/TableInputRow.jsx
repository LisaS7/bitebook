import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editFood, addFood } from "../state/slice";
import { updateRecord, postRecord } from "../Service";
import {
  Input,
  Dropdown,
  TextArea,
  EmojiInput,
} from "../components/Table/form_elements";
import { SaveButton } from "../components/Table/Buttons";
import { GetDataTemplate, replaceNullWithDefaults } from "./data_template";

export default function InputRow({ action, item, setEditRow }) {
  const dataTemplate = GetDataTemplate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tempItem, setTempItem] = useState({ ...item });

  function handleClickSave(event) {
    event.preventDefault();

    const item = { ...tempItem };
    replaceNullWithDefaults(item);

    if (action === "create") {
      postRecord(item, "foods");
      dispatch(addFood(item));
      navigate("/foods");
    }

    if (action === "update") {
      updateRecord(item, "foods");
      dispatch(editFood(item));
    }

    setEditRow(null);
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
      case "emoji":
        cells.push(
          <EmojiInput key={key} value={fieldValue} changeIcon={changeIcon} />
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
    </tr>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editStateItem, addStateItem } from "../../state/slice";
import { updateRecord, postRecord } from "../../Service";
import {
  Dropdown,
  ObjectDropdown,
  TextArea,
} from "../../components/Table/form_elements";
import { SaveButton } from "../../components/Table/Buttons";
import { GetDataTemplate, replaceNullWithDefaults } from "./data_template";

export default function InputRow({ action, item, setEditRow }) {
  const dataTemplate = GetDataTemplate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tempItem, setTempItem] = useState({ ...item });

  console.log(tempItem);

  function handleClickSave(event) {
    event.preventDefault();

    const item = { ...tempItem };
    replaceNullWithDefaults(item);

    if (action === "create") {
      postRecord(item, "foods");
      // dispatch(addFood(item));
      navigate("/foods");
    }

    if (action === "update") {
      updateRecord(item, "foods");
      // dispatch(editFood(item));
    }

    setEditRow(null);
  }

  function changeValue(e, key) {
    setTempItem({ ...tempItem, [key]: e.target.value });
  }

  let cells = [];
  for (const [key, value] of Object.entries(dataTemplate)) {
    console.log(key, tempItem[key]);
    if (!tempItem[key]) {
      tempItem[key] = value.default || "";
    }

    const fieldValue = tempItem[key];
    console.log("field value ", fieldValue);

    switch (value.type) {
      case "select":
        console.log(
          fieldValue[0].toUpperCase() + fieldValue.slice(1).toLowerCase()
        );
        cells.push(
          <Dropdown
            key={key}
            keyName={key}
            items={value.options}
            fieldValue={
              fieldValue[0].toUpperCase() + fieldValue.slice(1).toLowerCase()
            }
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
      default:
        cells.push(<td key={key}></td>);
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

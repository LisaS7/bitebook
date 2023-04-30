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
      postRecord(item, "foodlists");
      dispatch(addStateItem({ item, list: "foodRecords" }));
      navigate("/foods/categories");
    }

    if (action === "update") {
      // updateRecord(item, "foodslists");
      // dispatch(editFood(item));
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

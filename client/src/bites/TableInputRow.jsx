import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editStateItem, addStateItem } from "../state/slice";
import { updateRecord, postRecord } from "../Service";
import {
  Input,
  ObjectDropdown,
  TextArea,
  DateInput,
  RatingInput,
} from "../components/Table/form_elements";
import { SaveButton } from "../components/Table/Buttons";
import { GetDataTemplate, replaceNullWithDefaults } from "./data_template";

export default function InputRow({ action, item, setEditRow }) {
  const dataTemplate = GetDataTemplate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeData, activePerson } = useSelector((state) => state);
  const [tempItem, setTempItem] = useState({ ...item });

  useEffect(() => {}, [tempItem]);

  async function handleClickSave(event) {
    event.preventDefault();

    const item = { ...tempItem };

    const existingFoodRecord = activeData.foodRecords.find(
      (record) => record.food.id === parseInt(item.food)
    );

    console.log(existingFoodRecord);

    if (existingFoodRecord) {
      item.foodRecord = existingFoodRecord;
    } else {
      const newFoodRecord = {
        food: { id: parseInt(item.food) },
        person: { id: activePerson.id },
        category: "None",
        notes: "",
      };

      item.foodRecord = newFoodRecord;
    }
    replaceNullWithDefaults(item);

    if (action === "create") {
      console.log(item);
      const createdBite = await postRecord(item, "bites");
      dispatch(addStateItem({ item: createdBite, list: "bites" }));
      navigate("/bites");
    }

    if (action === "update") {
      updateRecord(item, "bites");
      dispatch(editStateItem({ item, list: "bites" }));
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

    let fieldValue = tempItem[key];

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
        if (action === "update") {
          fieldValue = tempItem.foodRecord[key];
        }
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
    <tr key="create">
      {cells}
      <td key="save-button">
        <SaveButton handleClickSave={handleClickSave} />
      </td>
    </tr>
  );
}

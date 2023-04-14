import { useSelector, useDispatch } from "react-redux";
import { editFood, removeFood } from "../state/slice";
import EditableTable from "../components/EditableTable";
import { deleteRecord, updateRecord } from "../Service";
import { AddButton, ButtonControls } from "./style";

export default function FoodContainer() {
  const dispatch = useDispatch();
  const { foods, categories, groups } = useSelector((state) => state);

  const dataTemplate = {
    icon: { heading: "", type: "emoji" },
    name: { heading: "Name", type: "text" },
    category: { heading: "Category", type: "select", options: categories },
    grouping: { heading: "Group", type: "select", options: groups },
    colour: { heading: "Colour", type: "text" },
    flavour: { heading: "Flavour", type: "text" },
    texture: { heading: "Texture", type: "text" },
    notes: { heading: "Notes", type: "textarea" },
  };

  function handleDelete(id) {
    deleteRecord(id, "foods");
    dispatch(removeFood(id));
  }

  function handleSave(food) {
    updateRecord(food, "foods");
    dispatch(editFood(food));
  }

  return (
    <>
      <ButtonControls>
        <AddButton>
          <span className="material-symbols-outlined">add_circle</span>
        </AddButton>
      </ButtonControls>
      <EditableTable
        data={foods}
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleSave={handleSave}
      />
    </>
  );
}

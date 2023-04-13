import { useSelector, useDispatch } from "react-redux";
import { editFood, removeFood } from "../state/slice";
import EditableTable from "../components/EditableTable";
import { deleteRecord, updateRecord } from "../Service";

export default function FoodContainer() {
  const dispatch = useDispatch();
  const { foods, categories, groups } = useSelector((state) => state);

  const dataTemplate = {
    icon: { heading: "", type: "text" },
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
      <EditableTable
        data={foods}
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleSave={handleSave}
      />
    </>
  );
}

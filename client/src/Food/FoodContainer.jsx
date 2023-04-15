import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editFood, removeFood } from "../state/slice";
import EditableTable from "../components/EditableTable";
import { deleteRecord, updateRecord, postRecord } from "../Service";
import AddForm from "../components/AddForm";
import { AddButton, ButtonControls } from "./style";

export default function FoodContainer({ uid }) {
  const dispatch = useDispatch();
  const { foods, categories, groups } = useSelector((state) => state);
  const [showAdd, setShowAdd] = useState(false);

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

  function handleUpdate(food) {
    updateRecord(food, "foods");
    dispatch(editFood(food));
  }

  function handleNew(food, event) {
    event.preventDefault();
    food.userId = uid;
    postRecord(food, "foods");
    alert("Food added");
    setShowAdd(false);
  }

  useEffect(() => {}, [showAdd]);

  if (showAdd) {
    return (
      <AddForm
        setShowAdd={setShowAdd}
        template={dataTemplate}
        handleNew={handleNew}
      />
    );
  }

  return (
    <>
      <ButtonControls>
        <AddButton onClick={() => setShowAdd(true)}>
          <span className="material-symbols-outlined">add_circle</span>
        </AddButton>
      </ButtonControls>
      <EditableTable
        data={foods}
        dataTemplate={dataTemplate}
        handleDelete={handleDelete}
        handleSave={handleUpdate}
      />
    </>
  );
}

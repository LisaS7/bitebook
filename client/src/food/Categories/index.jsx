import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import DraggableFood from "./DraggableFood";
import DroppableCategory from "./DroppableCategory";
import Loading from "../../components/Layout/Loading";
import { updateRecord } from "../../Service";
import { editStateItem } from "../../state/slice";

export default function CategoriesDnd() {
  const { foodRecords, activePerson, categories } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  console.log("start record", foodRecords[0]);

  function handleDragEnd(e) {
    const newCategory = e.over?.id;
    const existingRecord = {
      ...foodRecords.find((record) => record.id === e.active.id),
    };
    existingRecord.category = newCategory;
    updateRecord(existingRecord, "foodlists");

    dispatch(editStateItem({ existingRecord, list: "foodRecords" }));
    console.log("record after update", existingRecord);
  }

  const yesFoods = foodRecords.filter((record) => record.category === "Yes");

  if (!foodRecords.length) {
    return <Loading />;
  }

  return (
    <DndContext onDragEnd={(e) => handleDragEnd(e)}>
      <DraggableFood record={foodRecords[0]} />
      <DroppableCategory category={categories[1]} items={yesFoods} />
    </DndContext>
  );
}

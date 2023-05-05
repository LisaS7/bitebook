import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import DraggableFood from "./DraggableFood";
import DroppableCategory from "./DroppableCategory";
import Loading from "../../components/Layout/Loading";
import { updateRecord } from "../../Service";
import { editStateItem } from "../../state/slice";
import { UncategorisedContainer } from "./style";

export default function CategoriesDnd() {
  const { foodRecords, activePerson, categories } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  if (!foodRecords.length) {
    return <Loading />;
  }

  function handleDragEnd(e) {
    const newCategory = e.over?.id;
    const existingRecord = {
      ...foodRecords.find((record) => record.id === e.active.id),
      category: newCategory,
    };
    updateRecord(existingRecord, "foodlists");
    dispatch(editStateItem({ item: existingRecord, list: "foodRecords" }));
  }

  function foodDraggablesByCategory(category) {
    return foodRecords
      .filter((record) => record.category === category)
      .map((record) => <DraggableFood key={record.id} record={record} />);
  }

  const uncategorisedFoods = foodDraggablesByCategory("None");

  const categoryDroppables = categories.map((cat) => {
    const draggables = foodDraggablesByCategory(cat);
    if (cat !== "None") {
      return <DroppableCategory key={cat} category={cat} items={draggables} />;
    }
    return null;
  });

  return (
    <DndContext onDragEnd={(e) => handleDragEnd(e)}>
      <UncategorisedContainer>{uncategorisedFoods}</UncategorisedContainer>
      {categoryDroppables}
    </DndContext>
  );
}

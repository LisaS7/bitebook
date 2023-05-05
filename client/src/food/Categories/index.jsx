import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import DraggableFood from "./DraggableFood";
import DroppableCategory from "./DroppableCategory";
import Loading from "../../components/Layout/Loading";
import { updateRecord } from "../../Service";
import { updateCategory } from "../../state/slice";
import { CategoriesContainer } from "./style";

export default function CategoriesDnd() {
  const { foodRecords, activePerson, categories } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  if (!foodRecords.length) {
    return <Loading />;
  }

  const personData = foodRecords.filter(
    (record) => record.person.id === activePerson.id
  );

  function handleDragEnd(e) {
    const newCategory = e.over?.id;
    const existingRecord = {
      ...personData.find((record) => record.id === e.active.id),
      category: newCategory,
    };

    dispatch(
      updateCategory({
        id: existingRecord.id,
        category: newCategory,
        list: "foodRecords",
      })
    );
    updateRecord(existingRecord, "foodlists");
  }

  function foodDraggablesByCategory(category) {
    return personData
      .filter((record) => record.category === category)
      .map((record) => <DraggableFood key={record.id} record={record} />);
  }

  const categoryDroppables = categories.map((cat) => {
    const draggables = foodDraggablesByCategory(cat);
    const uncategorisedFoods = [
      ...foodDraggablesByCategory("None"),
      ...foodDraggablesByCategory(null),
    ];
    return (
      <DroppableCategory
        key={cat}
        category={cat}
        items={draggables}
        uncategorised={uncategorisedFoods}
      />
    );
  });

  return (
    <DndContext onDragEnd={(e) => handleDragEnd(e)}>
      <CategoriesContainer>{categoryDroppables}</CategoriesContainer>
    </DndContext>
  );
}
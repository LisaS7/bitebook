import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import DraggableFood from "./DraggableFood";
import DroppableCategory from "./DroppableCategory";
import Loading from "../../Layout/Loading";
import { updateRecord } from "../../Service";
import { updateCategory } from "../../state/slice";
import { CategoriesContainer, PostIt } from "./style";
import { StyledColumnContainer } from "../../Layout/global.style";

export default function CategoriesDnd() {
  const { foodRecords, categories, activeData } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (!foodRecords.length) {
    return <Loading />;
  }

  function handleDragEnd(e) {
    const newCategory = e.over?.id;
    const existingRecord = {
      ...activeData.foodRecords.find((record) => record.id === e.active.id),
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
    return activeData.foodRecords
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
    <StyledColumnContainer>
      <PostIt>
        <p>Drag and drop to change categories</p>
      </PostIt>
      <DndContext onDragEnd={(e) => handleDragEnd(e)}>
        <CategoriesContainer>{categoryDroppables}</CategoriesContainer>
      </DndContext>
    </StyledColumnContainer>
  );
}

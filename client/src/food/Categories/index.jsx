import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import DraggableFood from "./DraggableFood";
import DroppableCategory from "./DroppableCategory";
import Loading from "../../components/Layout/Loading";
import { updateRecord } from "../../Service";
import { editStateItem } from "../../state/slice";
import { UncategorisedContainer, CategoriesContainer } from "./style";

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
    updateRecord(existingRecord, "foodlists");
    dispatch(editStateItem({ item: existingRecord, list: "foodRecords" }));
  }

  function foodDraggablesByCategory(category) {
    return personData
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
      <UncategorisedContainer>
        <h5>Uncategorised</h5>
        <div>{uncategorisedFoods}</div>
      </UncategorisedContainer>
      <CategoriesContainer>{categoryDroppables}</CategoriesContainer>
    </DndContext>
  );
}

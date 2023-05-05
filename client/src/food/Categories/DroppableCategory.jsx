import { useDroppable } from "@dnd-kit/core";
import { DroppableContainer } from "./style";

export default function DroppableCategory({ category, items }) {
  const { isOver, setNodeRef } = useDroppable({
    id: category,
  });

  const style = {
    border: isOver ? "3px solid black" : "1px solid black",
  };

  return (
    <DroppableContainer ref={setNodeRef} style={style}>
      <h3>{category}</h3>
      {items}
    </DroppableContainer>
  );
}

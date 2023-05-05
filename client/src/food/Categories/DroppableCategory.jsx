import { useDroppable } from "@dnd-kit/core";
import { DroppableContainer } from "./style";

export default function DroppableCategory({ category, items, uncategorised }) {
  const { isOver, setNodeRef } = useDroppable({
    id: category,
  });

  const style = {
    border: isOver && "2px solid var(--dark)",
  };

  if (category === "None") {
    return (
      <DroppableContainer ref={setNodeRef} style={style}>
        <h5>Uncategorised</h5>
        <div>{uncategorised}</div>
      </DroppableContainer>
    );
  }

  return (
    <DroppableContainer ref={setNodeRef} style={style}>
      <h5>{category === "None" ? "Uncategorised" : category}</h5>
      <div>{items}</div>
    </DroppableContainer>
  );
}

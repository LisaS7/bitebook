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
        <div className="margin-line"></div>
        <h4>Uncategorised</h4>
        <div className="content">{uncategorised}</div>
      </DroppableContainer>
    );
  }

  return (
    <DroppableContainer ref={setNodeRef} style={style}>
      <div className="margin-line"></div>
      <h4>{category}</h4>
      <div className="content">{items}</div>
    </DroppableContainer>
  );
}

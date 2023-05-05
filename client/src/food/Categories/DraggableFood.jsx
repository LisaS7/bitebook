import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { DraggableContainer } from "./style";

export default function DraggableFood({ record }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: record.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <DraggableContainer
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      {record.food.icon + " " + record.food.name}
    </DraggableContainer>
  );
}

import { useSelector } from "react-redux";

export default function GetDataTemplate() {
  const { categories, groups } = useSelector((state) => state);

  return {
    icon: { heading: "", type: "emoji" },
    name: { heading: "Name", type: "text" },
    category: { heading: "Category", type: "select", options: categories },
    grouping: { heading: "Group", type: "select", options: groups },
    colour: { heading: "Colour", type: "text" },
    flavour: { heading: "Flavour", type: "text" },
    texture: { heading: "Texture", type: "text" },
    notes: { heading: "Notes", type: "textarea" },
  };
}

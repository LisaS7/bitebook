import { useSelector } from "react-redux";

export default function GetDataTemplate() {
  const { categories, groups } = useSelector((state) => state);

  return {
    icon: { heading: "", type: "emoji", sortable: false },
    name: { heading: "Name", type: "text", sortable: true },
    grouping: {
      heading: "Group",
      type: "select",
      options: groups,
      sortable: true,
    },
    category: {
      heading: "Category",
      type: "select",
      options: categories,
      sortable: true,
    },
    colour: { heading: "Colour", type: "text", sortable: true },
    flavour: { heading: "Flavour", type: "text", sortable: true },
    texture: { heading: "Texture", type: "text", sortable: true },
    notes: { heading: "Notes", type: "textarea", sortable: true },
  };
}

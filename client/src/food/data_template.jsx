import { useSelector } from "react-redux";

export const defaultItem = {
  icon: "🍽️",
  name: "Default",
  detail: "",
  grouping: "Fruit",
  colour: "",
  flavour: "",
  texture: "",
};

export function replaceNullWithDefaults(item) {
  for (const [key, value] of Object.entries(item)) {
    if (!value) {
      item[key] = defaultItem[key];
    }
  }
  return item;
}

export function GetDataTemplate() {
  const { groups } = useSelector((state) => state);

  return {
    icon: { heading: "", type: "emoji", sortable: false },
    name: { heading: "Name", type: "text", sortable: true },
    detail: { heading: "Detail", type: "text", sortable: true },
    grouping: {
      heading: "Group",
      type: "select",
      options: groups,
      sortable: true,
    },
    colour: { heading: "Colour", type: "text", sortable: true },
    flavour: { heading: "Flavour", type: "text", sortable: true },
    texture: { heading: "Texture", type: "text", sortable: true },
  };
}

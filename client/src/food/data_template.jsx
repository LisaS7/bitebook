import { useSelector } from "react-redux";
import {
  faCircleCheck,
  faCircleXmark,
  faCircleQuestion,
  faChevronCircleDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export const categorySymbols = {
  yes: [faCircleCheck, "green"],
  no: [faCircleXmark, "red"],
  maybe: [faCircleQuestion, "darkorange"],
  rarely: [faChevronCircleDown, "darkturquoise"],
  untested: [faMinus, "lightslategrey"],
};

export const defaultItem = {
  icon: "🍽️",
  name: "Default",
  detail: "",
  grouping: "Fruit",
  category: "None",
  colour: "",
  flavour: "",
  texture: "",
  notes: "",
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
  const { categories, groups } = useSelector((state) => state);

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
    category: {
      heading: "Category",
      type: "select",
      options: categories,
      sortable: true,
    },
    colour: { heading: "Colour", type: "text", sortable: true },
    flavour: { heading: "Flavour", type: "text", sortable: true },
    texture: { heading: "Texture", type: "text", sortable: true },
    bites: { heading: "Bites Logged", type: "bites", sortable: true },
    notes: { heading: "Notes", type: "textarea", sortable: true },
  };
}

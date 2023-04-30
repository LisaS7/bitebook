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
  food: "",
  person: "",
  category: "None",
  // add number of bites logged
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
  const { foods, categories, people } = useSelector((state) => state);

  return {
    food: {
      heading: "Food",
      type: "select_object",
      options: foods,
      sortable: true,
    },
    person: {
      heading: "Person",
      type: "select_object",
      options: people,
      sortable: true,
    },
    category: {
      heading: "Category",
      type: "select",
      options: categories,
      sortable: true,
    },
    notes: { heading: "Notes", type: "textarea", sortable: true },
  };
}

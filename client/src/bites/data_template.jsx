import { useSelector } from "react-redux";

export const defaultItem = {
  date: FormatDate_HTMLInput(new Date()),
  food: {
    id: 1,
  },
  rating: null,
  notes: "",
};

export function setObjectId(bite, key) {
  if (typeof bite[key] !== "object") {
    bite[key] = { id: bite[key] };
  }
}

export function replaceNullWithDefaults(item) {
  for (const [key, value] of Object.entries(item)) {
    if (!value) {
      item[key] = defaultItem[key];
    }
  }
  return item;
}

export function FormatDate_HTMLInput(date) {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}

export function GetDataTemplate() {
  const { foods, people } = useSelector((state) => state);
  const dateToday = FormatDate_HTMLInput(new Date());

  return {
    date: { heading: "Date", type: "date", default: dateToday, sortable: true },
    person: {
      heading: "Person",
      type: "select_object",
      options: people,
      default: people[0]?.id.toString(),
      sortable: true,
    },
    food: {
      heading: "Food",
      type: "select_object",
      options: foods,
      default: foods[0]?.id.toString(),
      sortable: true,
    },
    rating: {
      heading: "Rating",
      type: "radio",
      options: [1, 2, 3, 4, 5],
      sortable: true,
    },
    notes: { heading: "Notes", type: "textarea", sortable: true },
  };
}

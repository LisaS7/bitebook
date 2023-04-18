import { useSelector } from "react-redux";

export function FormatDate_HTMLInput(date) {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}

export default function GetDataTemplate() {
  const { foods } = useSelector((state) => state);
  const dateToday = FormatDate_HTMLInput(new Date());

  return {
    date: { heading: "Date", type: "date", default: dateToday, sortable: true },
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

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
    date: { heading: "Date", type: "date", default: dateToday },
    food: {
      heading: "Food",
      type: "select_object",
      options: foods,
      default: foods[0]?.id.toString(),
    },
    rating: { heading: "Rating", type: "radio", options: [1, 2, 3, 4, 5] },
    notes: { heading: "Notes", type: "textarea" },
  };
}

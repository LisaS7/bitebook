import { useSelector } from "react-redux";
import { FormatDate_HTMLInput } from "../components/AddForm/utils";

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

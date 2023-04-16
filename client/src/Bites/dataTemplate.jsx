import { useSelector } from "react-redux";

export default function GetDataTemplate() {
  const { foods } = useSelector((state) => state);

  return {
    date: { heading: "Date", type: "date" },
    food: { heading: "Food", type: "select_object", options: foods },
    rating: { heading: "Rating", type: "radio", options: [1, 2, 3, 4, 5] },
    notes: { heading: "Notes", type: "textarea" },
  };
}

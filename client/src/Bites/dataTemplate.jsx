export default function GetDataTemplate() {
  return {
    date: { heading: "Date", type: "date" },
    food: { heading: "Food", type: "text" },
    rating: { heading: "Rating", type: "radio", options: [1, 2, 3, 4, 5] },
    notes: { heading: "Notes", type: "textarea" },
  };
}

export function SortAscending({ field, handleSort }) {
  return (
    <button onClick={(e) => handleSort(e, field)}>
      <span id="asc" className="material-symbols-outlined">
        arrow_drop_up
      </span>
    </button>
  );
}

export function SortDescending({ field, handleSort }) {
  return (
    <button onClick={(e) => handleSort(e, field)}>
      <span id="desc" className="material-symbols-outlined">
        arrow_drop_down
      </span>
    </button>
  );
}

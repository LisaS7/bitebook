export function SortAscending({ heading, handleSort }) {
  return (
    <button onClick={(e) => handleSort(e, heading)}>
      <span id="asc" className="material-symbols-outlined">
        arrow_drop_up
      </span>
    </button>
  );
}

export function SortDescending({ heading, handleSort }) {
  return (
    <button onClick={(e) => handleSort(e, heading)}>
      <span id="desc" className="material-symbols-outlined">
        arrow_drop_down
      </span>
    </button>
  );
}

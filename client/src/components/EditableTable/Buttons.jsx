export function DeleteButton({ handleDelete, id }) {
  return (
    <button data-cy="delete-btn">
      <span
        className="material-symbols-outlined"
        onClick={() => handleDelete(id)}
      >
        cancel
      </span>
    </button>
  );
}

export function SaveButton({ handleClickSave }) {
  return (
    <button data-cy="save-btn">
      <span
        className="material-symbols-outlined"
        onClick={(event) => handleClickSave(event)}
      >
        done
      </span>
    </button>
  );
}

export function CancelButton({ setMode }) {
  return (
    <button>
      <span
        className="material-symbols-outlined"
        onClick={() => setMode("view")}
      >
        close
      </span>
    </button>
  );
}

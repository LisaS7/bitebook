export function EditButton({ setEditMode }) {
  return (
    <button>
      <span
        className="material-symbols-outlined"
        onClick={() => setEditMode(true)}
      >
        edit
      </span>
    </button>
  );
}

export function DeleteButton({ handleDelete, id }) {
  return (
    <button>
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
    <button>
      <span className="material-symbols-outlined" onClick={handleClickSave}>
        done
      </span>
    </button>
  );
}

export function CancelButton({ setEditMode }) {
  return (
    <button>
      <span
        className="material-symbols-outlined"
        onClick={() => setEditMode(false)}
      >
        close
      </span>
    </button>
  );
}

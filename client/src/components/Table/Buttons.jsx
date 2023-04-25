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

export function EditButton({ itemId, toggleEdit }) {
  return (
    <button data-cy="edit-btn">
      <span
        className="material-symbols-outlined"
        onClick={() => toggleEdit(itemId)}
      >
        edit
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

export function DeleteButton({ handleDelete, id }) {
  return (
    <button className="icon-btn" data-cy="delete-btn">
      <span
        className="icon-size2 material-symbols-outlined"
        onClick={() => handleDelete(id)}
      >
        cancel
      </span>
    </button>
  );
}

export function EditButton({ itemId, toggleEdit }) {
  return (
    <button className="icon-btn" data-cy="edit-btn">
      <span
        className="icon-size2 material-symbols-outlined"
        onClick={() => toggleEdit(itemId)}
      >
        edit
      </span>
    </button>
  );
}

export function SaveButton({ handleClickSave }) {
  return (
    <button className="icon-btn" data-cy="save-btn">
      <span
        className="icon-size2 material-symbols-outlined"
        onClick={(event) => handleClickSave(event)}
      >
        done
      </span>
    </button>
  );
}

export function CreateButton({ addRow }) {
  return (
    <button
      className="icon-btn"
      data-cy="add-btn"
      style={{ backgroundColor: "var(--light)" }}
      onClick={() => addRow()}
    >
      <span className="icon-size2 material-symbols-outlined">add_circle</span>
    </button>
  );
}

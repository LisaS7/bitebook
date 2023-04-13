export default function Row({ item, handleDelete, setEditMode, keyOrder }) {
  const data = keyOrder.map((key) => <td key={key}>{item[key]}</td>);

  return (
    <tr>
      {data}
      <td>{item.notes}</td>
      <td>
        <button>
          <span
            className="material-symbols-outlined"
            onClick={() => setEditMode(true)}
          >
            edit
          </span>
        </button>
      </td>
      <td>
        <button>
          <span
            className="material-symbols-outlined"
            onClick={() => handleDelete(item.id)}
          >
            cancel
          </span>
        </button>
      </td>
    </tr>
  );
}

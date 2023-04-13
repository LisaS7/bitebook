import { DeleteButton, EditButton } from "./Buttons";

export default function Row({ item, handleDelete, setEditMode, keyOrder }) {
  const data = keyOrder.map((key) => <td key={key}>{item[key]}</td>);

  return (
    <tr>
      {data}
      <td>
        <EditButton setEditMode={setEditMode} />
      </td>
      <td>
        <DeleteButton handleDelete={handleDelete} id={item.id} />
      </td>
    </tr>
  );
}

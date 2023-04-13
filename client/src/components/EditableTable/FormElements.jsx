import Form from "react-bootstrap/Form";

export function Dropdown({ items, keyName, fieldValue, changeValue }) {
  const options = items.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <td>
      <Form.Select value={fieldValue} onChange={(e) => changeValue(e, keyName)}>
        {options}
      </Form.Select>
    </td>
  );
}

export function Input({ keyName, fieldValue, changeValue }) {
  return (
    <td>
      <Form.Control
        type="text"
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      />
    </td>
  );
}

export function TextArea({ keyName, fieldValue, changeValue }) {
  return (
    <td>
      <Form.Control
        as="textarea"
        value={fieldValue}
        onChange={(e) => changeValue(e, keyName)}
      />
    </td>
  );
}

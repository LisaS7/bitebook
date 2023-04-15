import Form from "react-bootstrap/Form";

export function IconPicker({ name }) {
  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>Icon</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  );
}

export function TextField({ name, formData, handleChange }) {
  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        name={name.toLowerCase()}
        value={formData[name.toLowerCase()] || ""}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export function Dropdown({ name, items, handleChange }) {
  const options = items.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>{name}</Form.Label>
      <Form.Select onChange={handleChange}>{options}</Form.Select>
    </Form.Group>
  );
}

export function TextArea({ name, handleChange }) {
  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>{name}</Form.Label>
      <Form.Control as="textarea" onChange={handleChange} />
    </Form.Group>
  );
}

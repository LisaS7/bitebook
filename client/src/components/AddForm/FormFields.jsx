import Form from "react-bootstrap/Form";

export function IconPicker({ name }) {
  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>Icon</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
  );
}

export function TextField({ name, value, handleChange }) {
  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        name={name.toLowerCase()}
        value={value}
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

export function DateInput({ name, value, handleChange }) {
  return (
    <Form.Group controlId={"formfield_" + name}>
      <Form.Label>{name}</Form.Label>
      <Form.Control type="date" value={value} onChange={handleChange} />
    </Form.Group>
  );
}

export function RatingInput({ name, value, options, handleChange }) {
  const elements = options.map((option, index) => (
    <Form.Check
      inline
      key={index}
      type="radio"
      name="rating"
      id={option}
      label={option <= value ? "🟢" : "⚪"}
      value={option}
      onClick={handleChange}
    />
  ));
  return (
    <Form.Group className="rating-box" controlId={"formfield_" + name}>
      <Form.Label>{name}</Form.Label> <div>{elements}</div>
    </Form.Group>
  );
}

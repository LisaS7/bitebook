import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Dropdown,
  TextArea,
  DateInput,
  RatingInput,
  ObjectDropdown,
} from "./FormFields";
import { postRecord } from "../../Service";
import { FormContainer, StyledForm } from "./style";

export default function AddForm({ uid, template, endpoint, setState }) {
  const formFields = [];
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  function handleNew(data, event) {
    event.preventDefault();

    data.userId = uid;

    if (data.food) {
      data.food = { id: data.food };
    }

    postRecord(data, endpoint);
    setState(data);
    navigate("/" + endpoint);
  }

  // set default values from data template
  for (const [key, value] of Object.entries(template)) {
    if (formData[key] === undefined && value.default) {
      setFormData((values) => ({ ...values, [key]: value.default }));
    }

    switch (value.type) {
      case "text":
        formFields.push(
          <TextField
            key={key}
            name={value.heading}
            value={formData[key]}
            handleChange={handleChange}
          />
        );
        break;
      case "select":
        formFields.push(
          <Dropdown
            key={key}
            name={value.heading}
            items={value.options}
            handleChange={handleChange}
          />
        );
        break;
      case "select_object":
        formFields.push(
          <ObjectDropdown
            key={key}
            name={value.heading}
            items={value.options}
            handleChange={handleChange}
          />
        );
        break;
      case "textarea":
        formFields.push(
          <TextArea
            key={key}
            name={value.heading}
            handleChange={handleChange}
          />
        );
        break;
      case "date":
        formFields.push(
          <DateInput
            key={key}
            name={value.heading}
            value={formData[key]}
            handleChange={handleChange}
          />
        );
        break;
      case "radio":
        formFields.push(
          <RatingInput
            key={key}
            name={value.heading}
            value={formData[key]}
            options={[1, 2, 3, 4, 5]}
            handleChange={handleChange}
          />
        );
        break;
    }
  }

  return (
    <FormContainer>
      <h2>Add {endpoint[0].toUpperCase() + endpoint.slice(1)}</h2>
      <StyledForm onSubmit={(e) => handleNew(formData, e)}>
        {formFields}
        <button>Save</button>
      </StyledForm>
      <button onClick={() => navigate("/" + endpoint)}>Cancel</button>
    </FormContainer>
  );
}

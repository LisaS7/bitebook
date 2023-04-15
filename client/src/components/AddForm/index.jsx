import { useState } from "react";
import { TextField, Dropdown, TextArea } from "./FormFields";
import { postRecord } from "../../Service";
import { FormContainer, StyledForm } from "./style";

export default function AddForm({ setShowAdd, template, handleNew }) {
  const formFields = [];
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  for (const [key, value] of Object.entries(template)) {
    if (value.type === "text") {
      formFields.push(
        <TextField
          key={key}
          name={value.heading}
          formData={formData}
          handleChange={handleChange}
        />
      );
    }

    if (value.type === "select") {
      formFields.push(
        <Dropdown
          key={key}
          name={value.heading}
          items={value.options}
          handleChange={handleChange}
        />
      );
    }

    if (value.type === "textarea") {
      formFields.push(
        <TextArea key={key} name={value.heading} handleChange={handleChange} />
      );
    }
  }

  return (
    <FormContainer>
      <h2>Add Food</h2>
      <StyledForm onSubmit={(e) => handleNew(formData, e)}>
        {formFields}
        <button>Save</button>
      </StyledForm>
      <button onClick={() => setShowAdd(false)}>Cancel</button>
    </FormContainer>
  );
}

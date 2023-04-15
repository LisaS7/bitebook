import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Dropdown, TextArea } from "./FormFields";
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
    postRecord(data, endpoint);
    navigate("/" + endpoint);
    setState(data);
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
      <button onClick={() => navigate("/foods")}>Cancel</button>
    </FormContainer>
  );
}

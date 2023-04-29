import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRecord, updateRecord } from "../../../Service";
import { editPerson, removePerson } from "../../../state/slice";
import Form from "react-bootstrap/Form";

function Person({ person }) {
  const [name, setName] = useState(person.name);
  const [colour, setColour] = useState(person.colour);
  const dispatch = useDispatch();

  function handleChange(e, setValue) {
    setValue(e.target.value);
  }

  function handleDelete() {
    deleteRecord(person.id, "people");
    dispatch(removePerson(person.id));
  }

  function handleSave() {
    const changedPerson = { ...person };
    changedPerson.name = name;
    changedPerson.colour = colour;
    try {
      updateRecord(changedPerson, "people");
      dispatch(editPerson(changedPerson));
      alert("Person updated!");
    } catch (err) {
      alert("Error updating person\n" + err);
    }
  }

  return (
    <Form className="person">
      <Form.Control
        id="colour"
        type="color"
        defaultValue={colour}
        onChange={(e) => handleChange(e, setColour)}
      />
      <Form.Control
        id="name"
        type="text"
        value={name}
        onChange={(e) => handleChange(e, setName)}
      />
      <span className="material-symbols-outlined" onClick={() => handleSave()}>
        done
      </span>
      <span
        className="material-symbols-outlined"
        onClick={() => handleDelete()}
      >
        cancel
      </span>
    </Form>
  );
}

export default function People({ people }) {
  const peopleElements = people.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <>
      <h4>People</h4>
      {peopleElements}
    </>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRecord, updateRecord } from "../../../Service";
import {
  addStateItem,
  editStateItem,
  removeStateItem,
} from "../../../state/slice";
import Form from "react-bootstrap/Form";
import { postRecord } from "../../../Service";
import { Circle } from "./style";

function Person({ person, isNew }) {
  const dispatch = useDispatch();

  if (!person) {
    person = { name: "", colour: "#bdbdbd" };
  }

  const [name, setName] = useState(person.name);
  const [colour, setColour] = useState(person.colour);

  function handleChange(e, setValue) {
    setValue(e.target.value);
  }

  function handleDelete() {
    deleteRecord(person.id, "people");
    dispatch(removeStateItem({ id: person.id, list: "people" }));
  }

  function handleCreate() {
    const changedPerson = { ...person };
    changedPerson.name = name;
    changedPerson.colour = colour;
    setName("");
    setColour("#bdbdbd");
    postRecord(changedPerson, "people");
    dispatch(addStateItem({ item: changedPerson, list: "people" }));
    window.location.reload();
  }

  function handleSave() {
    const changedPerson = { ...person };
    changedPerson.name = name;
    changedPerson.colour = colour;
    try {
      updateRecord(changedPerson, "people");
      dispatch(editStateItem({ item: changedPerson, list: "peeople" }));
      alert("Person updated!");
    } catch (err) {
      alert("Error updating person\n" + err);
    }
  }

  const createPersonButtons = (
    <>
      <span
        className="material-symbols-outlined"
        onClick={() => handleCreate()}
      >
        done
      </span>
    </>
  );

  const updatePersonButtons = (
    <>
      <span className="material-symbols-outlined" onClick={() => handleSave()}>
        done
      </span>
      <span
        className="material-symbols-outlined"
        onClick={() => handleDelete()}
      >
        cancel
      </span>
    </>
  );

  return (
    <Form className="person">
      <Form.Control
        id="colour"
        type="color"
        value={colour}
        onChange={(e) => handleChange(e, setColour)}
      />
      <Form.Control
        id="name"
        type="text"
        value={name}
        onChange={(e) => handleChange(e, setName)}
      />
      {isNew ? createPersonButtons : updatePersonButtons}
    </Form>
  );
}

export default function People({ people }) {
  const peopleElements = people.map((person) => (
    <Person key={person.id} person={person} isNew={false} />
  ));
  return (
    <>
      <h4>People</h4>
      {peopleElements}
      <Person key="new" isNew={true} />
    </>
  );
}

import { useDispatch } from "react-redux";
import { deleteRecord } from "../../../Service";
import { removePerson } from "../../../state/slice";
import { Circle, PeopleContainer } from "./style";

function Person({ person }) {
  const dispatch = useDispatch();

  function handleDelete() {
    deleteRecord(person.id, "people");
    dispatch(removePerson(person.id));
  }

  return (
    <div className="person">
      <Circle colour={person.colour} />
      <span>{person.name}</span>
      <span
        className="material-symbols-outlined"
        onClick={() => handleDelete()}
      >
        cancel
      </span>
    </div>
  );
}

export default function People({ people }) {
  const peopleElements = people.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <PeopleContainer>
      <h4>People</h4>
      {peopleElements}
    </PeopleContainer>
  );
}

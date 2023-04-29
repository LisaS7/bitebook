import { Circle, PeopleContainer } from "./style";

function Person({ person }) {
  return (
    <div className="person">
      <Circle colour={person.colour} />
      {person.name}
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

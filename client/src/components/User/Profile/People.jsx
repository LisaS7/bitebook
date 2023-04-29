export default function People({ people }) {
  const peopleElements = people.map((person) => <p>{person.name}</p>);
  return <div>{peopleElements}</div>;
}

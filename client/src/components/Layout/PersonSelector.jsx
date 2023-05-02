import { setActivePerson } from "../../state/slice";
import { useSelector, useDispatch } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Circle } from "../Table/style";

export default function PersonSelector() {
  const { people, activePerson } = useSelector((state) => state);
  const dispatch = useDispatch();

  function PersonButtons() {
    const buttons = people.map((person) => (
      <NavDropdown.Item onClick={() => dispatch(setActivePerson(person))}>
        {person.name}
      </NavDropdown.Item>
    ));
    return <div>{buttons}</div>;
  }

  const dropdownTitle = (
    <>
      <Circle colour={activePerson.colour} />{" "}
      <span>{activePerson ? activePerson.name : "Select Person"}</span>
    </>
  );

  return (
    <NavDropdown title={dropdownTitle} id="basic-nav-dropdown">
      <PersonButtons />
    </NavDropdown>
  );
}

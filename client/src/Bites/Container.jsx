import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";

export default function BiteContainer() {
  const { foodRecords, people, bites } = useSelector((state) => state);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const dataTemplate = GetDataTemplate();

  let uniquePeople = [];
  people.forEach((person) => {
    // if no person id already in the array matches the current person, then add person
    if (!uniquePeople.some((p) => p.id === person.id)) {
      uniquePeople.push(person);
    }
  });

  function PersonButtons() {
    const buttons = uniquePeople.map((person) => (
      <button key={person.id} onClick={() => setSelectedPerson(person.id)}>
        {person.name}
      </button>
    ));
    return <div>{buttons}</div>;
  }

  let personData = bites.filter(
    (bite) => bite.foodRecord.person.id === selectedPerson
  );

  useEffect(() => {
    setSelectedPerson(people[0]?.id);
  }, [people, foodRecords]);

  return (
    <>
      <PersonButtons />
      <EditableTable
        data={personData}
        InputRow={InputRow}
        TableRow={TableRow}
        dataTemplate={dataTemplate}
      />
    </>
  );
}

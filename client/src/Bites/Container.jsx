import { useState } from "react";
import { useSelector } from "react-redux";
import EditableTable from "../components/Table";
import { GetDataTemplate } from "./data_template";
import TableRow from "./TableRow";
import InputRow from "./TableInputRow";

export default function BiteContainer() {
  const { foodRecords, people } = useSelector((state) => state);
  const [selectedPerson, setSelectedPerson] = useState(people[0]?.id);
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

  let personData = [];
  foodRecords.forEach((record) => {
    // only include records which a. have bites and b. match the selected person
    if (record.bites.length && record.person.id === selectedPerson) {
      record.bites.forEach((bite) => {
        const newBite = { ...bite };
        newBite.person = record.person;
        newBite.food = record.food;
        personData.push(newBite);
      });
    }
  });

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

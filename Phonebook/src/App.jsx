import { useState } from "react";
import Filter from "./components/Filter";
import Add from "./components/Add";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [displayedPersons, setDisplayedPersons] = useState(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setDisplayedPersons={setDisplayedPersons} />
      <Add
        persons={persons}
        setPersons={setPersons}
        setDisplayedPersons={setDisplayedPersons}
      />
      <h2>Numbers</h2>
      {displayedPersons.map((x) => (
        <p key={Math.random()}>
          {x.name} {x.number}
        </p>
      ))}
    </div>
  );
};

export default App;

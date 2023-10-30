import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Add from "./components/Add";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [displayedPersons, setDisplayedPersons] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setDisplayedPersons(response.data);
    });
  }, []);

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

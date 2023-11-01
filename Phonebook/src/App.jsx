import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Add from "./components/Add";
import axios from "axios";
import ContactDisplay from "./components/ContactDisplay";

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
        <ContactDisplay
          key={x.id}
          id={x.id}
          name={x.name}
          number={x.number}
          setDisplayedPersons={setDisplayedPersons}
        />
      ))}
    </div>
  );
};

export default App;

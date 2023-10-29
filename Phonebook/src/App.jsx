import { useState } from "react";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [displayedPersons, setDisplayedPersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPersons = (e) => {
    e.preventDefault();
    const exists = persons.filter((x) => x.name === newName);
    if (exists.length !== 0) {
      alert(`${newName} has already been added to the phonebook.`);
      return;
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setDisplayedPersons={setDisplayedPersons} />
      <h2>Add new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit" onClick={addPersons}>
            add
          </button>
        </div>
      </form>
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

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      setPersons(persons.concat({ name: newName, phone: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((x) => (
        <p key={Math.random()}>
          {x.name} {x.phone}
        </p>
      ))}
    </div>
  );
};

export default App;

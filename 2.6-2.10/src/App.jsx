import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filterResults = [];
    for (const person of persons) {
      for (let i = 0; i < e.target.value.length; i++) {
        if (person.name.toLowerCase()[i] !== e.target.value.toLowerCase()[i]) {
          break;
        }
        if (i === e.target.value.length - 1) {
          filterResults.push(person);
        }
      }
    }
    console.log(filterResults);
    setFilteredPersons(filterResults);
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

  const personsToShow = filter ? filteredPersons : persons;

  // const applyFilter = (persons) => {
  //   const filterResults = [];
  //   for (const person of persons) {
  //     for (let i = 0; i < persons.length; i++) {
  //       if (person.name[i] !== filter[i]) {
  //         break;
  //       }
  //       if (i === person.name.length - 1) {
  //         filterResults.push(person);
  //       }
  //     }
  //   }
  //   setFilteredPersons(filterResults);
  // };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input type="text" value={filter} onChange={handleFilter} />
      </div>
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
      {personsToShow.map((x) => (
        <p key={Math.random()}>
          {x.name} {x.number}
        </p>
      ))}
    </div>
  );
};

export default App;

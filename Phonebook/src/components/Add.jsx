import { useState } from "react";

const Add = (props) => {
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
    const exists = props.persons.filter((x) => x.name === newName);
    if (exists.length !== 0) {
      alert(`${newName} has already been added to the phonebook.`);
      return;
    } else {
      props.setPersons(
        props.persons.concat({ name: newName, number: newNumber })
      );
      props.setDisplayedPersons(
        props.persons.concat({ name: newName, number: newNumber })
      );
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <>
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
    </>
  );
};

export default Add;

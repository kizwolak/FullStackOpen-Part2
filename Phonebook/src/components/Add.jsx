import { useState } from "react";
import axios from "axios";
import phonebook from "../services/phonebook";

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
      if (
        confirm(
          `${newName} has already been added to the phonebook. Would you like to update the record?`
        )
      ) {
        const name = newName;
        const number = newNumber;
        phonebook.update(exists[0].id, { name, number });
      }
    } else {
      axios
        .post("http://localhost:3001/persons", {
          name: newName,
          number: newNumber,
        })
        .then((response) => {
          props.setPersons(props.persons.concat(response.data));
          props.setDisplayedPersons(props.persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
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

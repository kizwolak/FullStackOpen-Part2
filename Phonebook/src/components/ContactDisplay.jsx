import { useState } from "react";
import phonebook from "../services/phonebook";

const ContactDisplay = ({ id, name, number, setDisplayedPersons }) => {
  return (
    <div style={{ display: "flex" }}>
      <p key={id}>
        {name} {number}
      </p>
      <button
        onClick={() => {
          phonebook.deleteEntry(id);
          console.log(phonebook.getAll());
          phonebook
            .getAll()
            .then((response) => setDisplayedPersons(response.data));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactDisplay;

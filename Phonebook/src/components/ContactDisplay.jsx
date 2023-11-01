import { useState } from "react";
import phonebook from "../services/phonebook";

const ContactDisplay = ({ id, name, number }) => {
  return (
    <div style={{ display: "flex" }}>
      <p key={id}>
        {name} {number}
      </p>
      <button onClick={() => phonebook.deleteEntry(id)}>Delete</button>
    </div>
  );
};

export default ContactDisplay;

import { useState } from "react";

const ContactDisplay = ({ id, name, number }) => {
  return (
    <p key={id}>
      {name} {number}
    </p>
  );
};

export default ContactDisplay;

import { useState } from "react";

const ContactDisplay = ({ name, number }) => {
  return (
    <p key={Math.random()}>
      {name} {number}
    </p>
  );
};

export default ContactDisplay;

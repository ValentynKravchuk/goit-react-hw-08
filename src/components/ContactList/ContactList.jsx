import React from "react";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contacts.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

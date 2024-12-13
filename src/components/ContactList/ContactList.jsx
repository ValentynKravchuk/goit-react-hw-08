import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/slice";
function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact
            data={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

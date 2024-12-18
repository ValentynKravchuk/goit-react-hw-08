import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import ContactForm from "../../components/ContactForm/ContactForm";
import DocumentTitle from "../../components/DocumentTitle";

const ContactsPage = () => {
  return (
    <div>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

import { ContactForm, ContactList, SearchBox } from "./components";

import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactSlice";
import { selectFilter } from "./redux/filterSlice";

function App() {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts?.toLowerCase())
  );

  return (
    <>
      <ContactForm />
      <SearchBox />

      {contacts.length ? (
        <ContactList contacts={searchContact} />
      ) : (
        <span className="title">No contact </span>
      )}
      {searchContact.length === 0 && contacts.length !== 0 && (
        <span className="title">Contact is not defiant</span>
      )}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { ContactForm, ContactList, SearchBox } from "./components";
import contacts from "./data/contacts.json";
import { nanoid } from "nanoid";

function App() {
  const [contactsPhone, setContactsPhone] = useState(() => {
    const phone = JSON.parse(window.localStorage.getItem("contactsPhone"));

    if (phone?.length) {
      return phone;
    }
    return contacts;
  });

  const [search, setSearch] = useState("");
  useEffect(() => {
    window.localStorage.setItem("contactsPhone", JSON.stringify(contactsPhone));
  }, [contactsPhone]);
  const addContact = (values) => {
    setContactsPhone((prev) => [...prev, { ...values, id: nanoid() }]);
  };

  const handleDelete = (id) => {
    setContactsPhone((prev) => prev.filter((cont) => cont.id !== id));
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchContact = contactsPhone.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(search)
  );

  return (
    <>
      <ContactForm addContact={addContact} />
      <SearchBox handleSearch={handleSearch} value={search} />

      {contactsPhone.length ? (
        <ContactList contacts={searchContact} handleDelete={handleDelete} />
      ) : (
        <span className="title">No contact </span>
      )}
      {searchContact.length === 0 && contactsPhone.length !== 0 && (
        <span className="title">Contact is not defiant</span>
      )}
    </>
  );
}

export default App;

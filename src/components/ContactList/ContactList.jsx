import { Contact } from "../Contact/Contact";
import s from "./Contact.module.css";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <Contact contact={item} handleDelete={handleDelete} key={item.id} />
      ))}
    </ul>
  );
};

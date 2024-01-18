import css from './ContactList.module.css';
const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div className={css.contactsList}>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.delBtn}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };

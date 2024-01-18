import { useEffect } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.phonebook.contacts);
  const filter = useSelector(store => store.phonebook.filter);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    const finalContact = { ...formData, id: nanoid() };

    const action = {
      type: 'contacts/addContact',
      payload: finalContact,
    };
    dispatch(action);
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = {
      type: 'contacts/setFilter',
      payload: value,
    };
    dispatch(action);
  };

  const handleDeleteContact = contactId => {
    const action = {
      type: 'contacts/deleteContact',
      payload: contactId,
    };
    dispatch(action);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <AddContactForm handleAddContact={handleAddContact} />
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

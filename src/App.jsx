import { AddContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.phonebook.contacts);
  const filter = useSelector(store => store.phonebook.filter);

  return (
    <div>
      <AddContactForm handleAddContact={contacts} dispatch={dispatch} />
      <Filter filter={filter} dispatch={dispatch} />
      <ContactList filter={filter} dispatch={dispatch} />
    </div>
  );
};

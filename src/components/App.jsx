import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';
// import {increment, decrement} from '../redux/store'

// import { useSelector, useDispatch } from 'react-redux'

const KEY_LOCAL_STORAGE = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => getData(KEY_LOCAL_STORAGE));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  function getData(KEY_LOCAL_STORAGE) {
    const savedContacts = localStorage.getItem(KEY_LOCAL_STORAGE);
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    }
    return [];
  }

  const saveNewContact = (name, number) => {
    const id = nanoid();

    const newContact = {
      name,
      number,
      id,
    };
    return setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = id => {
    return setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const handleSubmit = ({ name, number }) => {
    const isInContacts = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    saveNewContact(name, number);
  };

  const onFilter = filterInput => {
    setFilter(filterInput);
  };

  const getFilterContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };




// const value = useSelector(state => state.myValue)
// const dispatch = useDispatch();




  return (
    <>
      <h1>Phonebook</h1>



      {/* <div>{value}</div>
      <button onClick={()=> dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(100))}>Decrement</button>
       */}
      
      
      
      <ContactsForm handleSubmit={handleSubmit} />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter onFilterChange={onFilter} value={filter} />
          <ContactsList
            deleteContact={deleteContact}
            data={getFilterContacts()}
          />
        </>
      )}
    </>
  );
};

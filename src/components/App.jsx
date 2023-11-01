import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const savedSettings = localStorage.getItem('contacts');
      const parsedSettings = JSON.parse(savedSettings);
      console.log(parsedSettings);
      setContacts(parsedSettings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };
  const handleAddContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const onRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );
  return (
    <>
      <AddContact addNewContact={handleAddContact}></AddContact>
      <Filter handleFilter={handleFilter}></Filter>
      <Contacts contacts={filtredContacts} onRemoveContact={onRemoveContact}></Contacts>
    </>
  );
};

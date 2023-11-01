import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    if (localStorage.getItem('contacts') !== null) {
      const savedSettings = localStorage.getItem('contacts');
      const parsedSettings = JSON.parse(savedSettings);
      // console.log(parsedSettings);
      this.setState({ contacts: parsedSettings });
    }
  }
  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };
  handleAddContact = newContact => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };
  onRemoveContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };
  render() {
    const { filter } = this.state;
    const { contacts } = this.state;
    console.log('contacts', contacts);
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return (
      <>
        <AddContact addNewContact={this.handleAddContact}></AddContact>
        <Filter handleFilter={this.handleFilter}></Filter>
        <Contacts contacts={filtredContacts} onRemoveContact={this.onRemoveContact}></Contacts>
      </>
    );
  }
}

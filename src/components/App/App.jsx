import { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper, HeroTitle, Title } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }  

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Wrapper>
        <HeroTitle>Phonebook</HeroTitle>
        <ContactsForm onSave={this.addContact} />

        <Title>Contacts</Title>
        <Filter onSearch={filter} onChange={this.filterContacts} />
        <ContactsList
          contactsList={filteredContacts}
          onDelete={this.deleteContact}
        />

        <GlobalStyle />
      </Wrapper>
    );
  }
}

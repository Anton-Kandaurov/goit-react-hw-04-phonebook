import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';


export function App() {
  const [contacts, setContacts] = useState([
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedToLocalStorageContacts = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (savedToLocalStorageContacts.length > 0) {
      setContacts(savedToLocalStorageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const createContact = ({ name, number }, resetForm) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isExistContact = contacts.some(contact => contact.name === name);

    if (isExistContact) {
      alert(`${name} is already in contacts`);
    } else {
      resetForm();
      setContacts([...contacts, newContact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={createContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <ContactList
        contactList={filteredContacts()}
        deleteContact={deleteContact}
      />
    </>
  );
}



// export class App extends Component{
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   }

//   componentDidMount() {
//     const saveLocStorageContacts = JSON.parse(
//       localStorage.getItem('contacts')
//     );

//     if (saveLocStorageContacts) {
//       this.setState({ contacts: saveLocStorageContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   createContact = ({ name, number }, resetForm) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const isExistContact = this.state.contacts.some(
//       contact => contact.name === name
//     );

//     if (isExistContact) {
//       alert(`${name} is already in contacts`);
//     } else {
//       resetForm();
//       this.setState(({ contacts }) => ({
//         contacts: [...contacts, newContact],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   filteredContacts = () => {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//  

function ContactsList({contacts}) {
  console.log(contacts);
  return (
    <div>
       <h3>Contacts List</h3>
       <ul>
          {contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
       </ul>
    </div>
  )
}

export default ContactsList
import { useState } from 'react'

// Components 
import ContactsList from '../ContactsList'

function Contacts() {

    const [contacts , setContacts] = useState([])

    const [contact , setContact] = useState({
        name : "",
        lastName : "",
        email : "",
        phone : ""
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact(contact => ({...contact , [name] : value})
        )
    }

    const addHandler = () => {
        setContacts(contacts => ([...contacts , contact]))
        setContact({
            name : "",
            lastName : "",
            email : "",
            phone : ""
        })
        console.log(contacts);
    }

  return (
    <div>
        <div>
            <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler} />
            <input type="text" placeholder="Last Name" name="lastName" value={contact.lastName} onChange={changeHandler} />
        </div>
        <div>
            <input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler} />
            <input type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler} />
        </div>
        <button onClick={addHandler}>Add Contact</button>
        <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contacts
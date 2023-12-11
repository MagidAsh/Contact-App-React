

function ContactItem({data : {id , name , lastName , email , phone} , deleteHandler}) {

    // const deleteHandler = (id) => {
    //     const newContacts = contacts.filter((item) => item.id !== id)
    //     setContacts(newContacts)
    // }

  return (
        <li>
            <p>{name} {lastName}</p>
            <p><span>📭</span> {email}</p>
            <p><span>📞</span> {phone}</p>
            <button onClick={() => deleteHandler(id)}>🗑</button>
        </li>

  )
}

export default ContactItem
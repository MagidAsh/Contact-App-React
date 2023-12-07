import React, { useState } from 'react'

function EnterContacts() {

    const [form , setForm] = useState({
        name : "",
        lastName : "",
        email : "",
        phone : ""
    })

    const changeHandler = (event) => {
        setForm((form) => ({...form , [event.target.name] : event.target.value})
        )
    }

    const addHandler = () => {
        console.log(form);
    }

  return (
    <div>
        <div>
            <input type="text" placeholder="Name" name="name" value={form.name} onChange={changeHandler} />
            <input type="text" placeholder="Last Name" name="lastName" value={form.lastName} onChange={changeHandler} />
        </div>
        <div>
            <input type="email" placeholder="Email" name="email" value={form.email} onChange={changeHandler} />
            <input type="number" placeholder="Phone" name="phone" value={form.phone} onChange={changeHandler} />
        </div>
        <button onClick={addHandler}>Add Contact</button>
    </div>
  )
}

export default EnterContacts
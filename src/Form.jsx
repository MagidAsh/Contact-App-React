import { useState } from "react";

function Form() {
    const [form , setForm] = useState({
        email : "",
        password : "",
        role : "user" ,
        gender : "male",
        rules : false
    })


    const changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        if (event.target.name === "rules") {
            setForm(form => ({...form , rules : !form.rules}))
        } else {
            setForm(form => ({...form , [name] : value}))
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(form);
    }

    return (
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Email" name="email" value={form.email} onChange={changeHandler} />
                    <input type="password" placeholder="Password" name="password" value={form.password} onChange={changeHandler} />
                    <select name="role" value={form.role} onChange={changeHandler}>
                        <option value="user">User</option>
                        <option value="writer">Writer</option>
                        <option value="admin">Admin</option>
                    </select>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="male" value="male" onChange={changeHandler} checked={form.gender === "male"}/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="female" value="female" onChange={changeHandler} checked={form.gender === "female"}/>
                    <label htmlFor="other">Other</label>
                    <input type="radio" name="gender" id="other" value="other" onChange={changeHandler} checked={form.gender === "other"}/>
            
                    <input type="checkbox" name="rules" checked={form.rules} onChange={changeHandler} />
                    <button>login</button>
                </form>
            </div>
    )
}

export default Form;

// function Form() {

//     const [email , setEmail] = useState("");
//     const [password , setPassword] = useState("");
//     const [role , setRole] = useState("user");
//     const [gender , setGender] = useState("male");
//     const [rules , setRules] = useState(false);




//     const loginHandler = () => {
//         console.log({email , password , role , gender , rules});
//     }

//     const emailHandler = (event) => {
//         setEmail(event.target.value);
//     }

//     const passwordHandler = (event) => {
//         setPassword(event.target.value)
//     }

//     const selectHandler = (event) => {
//         setRole(event.target.value)
//     }

//     const genderHandler = (event) => {
//         setGender(event.target.value)
//     }

//     const rulesHandler = () => {
//         setRules(rules => !rules)
//     }

//   return (
//     <div>
//         <input type="text" placeholder="Email" value={email} onChange={emailHandler} />
//         <input type="password" placeholder="Password" value={password} onChange={passwordHandler} />
//         <select value={role} onChange={selectHandler}>
//             <option value="user">User</option>
//             <option value="writer">Writer</option>
//             <option value="admin">Admin</option>
//         </select>
//         <label htmlFor="male">Male</label>
//         <input type="radio" name="gender" id="male" value="male" onChange={genderHandler} checked={gender === "male"}/>
//         <label htmlFor="female">Female</label>
//         <input type="radio" name="gender" id="female" value="female" onChange={genderHandler} checked={gender === "female"}/>
//         <label htmlFor="other">Other</label>
//         <input type="radio" name="gender" id="other" value="other" onChange={genderHandler} checked={gender === "other"}/>

//         <input type="checkbox" checked={rules} onChange={rulesHandler} />
//         <button onClick={loginHandler}>login</button>
//     </div>
//   )
// }

// export default Form;
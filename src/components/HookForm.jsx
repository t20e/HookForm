import React, { useState } from "react";

const HookForm = (props)=>{
    //create state varibles to store infro collected from each input
    let [firstName, setFirstName] = useState("");
    let [firstNameError, setfirstNameError] = useState("");
    let [lastName, setLastName] = useState("");
    let [lastnameError, setLastNameError] = useState("");
    let [email, setEmail] = useState("");
    let [emailError, setEmailError] = useState("");
    let [password, setPassword] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [confirmPasswordError, setConfirmPasswordError] = useState("");

    let[userList, setUserList] = useState([])
    //creates an array of created users
    let firstTime = false;

    const userSubmit = (e)=>{
        //when user submits do this
        e.preventDefault();//prevents the form from reloading page
        let newHookFormObj = {firstName, lastName, email, password, confirmPassword}//create new hook form obj
        // console.log({firstName, lastName, password, confirmPassword})
        
        //clear form inputs on submit *****
        setFirstName("")
        setLastName("")
        setEmail("")
        setConfirmPassword("")
        // let error = handleInputErrors(newHookFormObj);
        // console.log(error, "error");
        setUserList([...userList, newHookFormObj]);
        // ... creates new userList from old and passsing in the new User obj into it from (newHookFormObj)
        //set the ninjaList variable using the setter (setNinjaList()) to contain a copy of whatever is currently already in the ninja list (...ninjaList) and add the new ninja object to the end of that list (, newNinjaObj);

    }
//     const handleInputErrors = (e)=>{
//         setFirstName(e.target.value);
//         if(firstName.length < 2){
//             setfirstNameError('name needs to be more than 2 character')
//             console.log(firstNameError);
//         }
//         console.log("hello");
//     }

    return (
        <>
            <form onSubmit= { userSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" onChange={ (e)=>{ setFirstName(e.target.value)}} value={firstName} />
                    {
                    firstName.length && firstName.length < 2 ? <p>First name needs to be more then 2 characters</p>
                    : null
                    }
                </div>
                <div>
                    <label htmlFor="lasttName">Last Name:</label>
                    <input type="text" onChange={ (e)=>{ setLastName(e.target.value)}} value={lastName} />
                    {
                    lastName.length && lastName.length < 2 ? <p>First name needs to be more then 2 characters</p>
                    : null
                    }
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" onChange={ (e)=>{ setEmail(e.target.value)}} value={email} />
                    {
                    email.length && email.length < 5 ? <p>First name needs to be more then 5 characters</p>
                    : null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={ (e)=>{ setPassword(e.target.value)}} value={password} />
                    {
                    password.length && password.length < 8 ? <p>First name needs to be more then 8 characters</p>
                    : null
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Passowrd:</label>
                    <input type="password" onChange={ (e)=>{ setConfirmPassword(e.target.value)}} value={confirmPassword} />
                    {
                    confirmPassword.length && confirmPassword.length < 8 ? <p>First name needs to be more then 8 characters</p>
                    : null
                    }
                </div>
                <input type="submit" value="Add User" />


            </form>
            {
                userList.map((user, u) => {
                    return <div>
                        {
                            firstTime == false? <h1>Your Form Data</h1> : ''
                        }
                            
                        <div>
                        <h2>{user.firstname}</h2>
                        <h2>{user.lastname}</h2>
                        <h2>{user.email}</h2>
                        <h2>{user.password}</h2>
                        <h2>{user.confirmPassword}</h2>

                    </div>
                    </div>
                })
            }
        </>
    )
}
export default HookForm

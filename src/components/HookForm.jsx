import React, { useState } from "react";

const HookForm = ()=>{
    //create state varibles to store infro collected from each input
    let [firstname, setFirstName] = useState("");
    let [lastname, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    let[userList, setUserList] = useState([])
    //creates an array of created users

    const userSubmit = (e)=>{
        //when user submits do this
        e.preventDefault();//prevents the form from reloading page
        let newHookFormObj = {firstname, lastname, email, password, confirmPassword}//create new hok form obj
        console.log({firstname, lastname, password, confirmPassword})
        setFirstName("")
        setLastName("")
        //clear form inputs on submit
        setEmail("")
        setConfirmPassword("")

        setUserList([...userList, newHookFormObj])
        //set the ninjaList variable using the setter (setNinjaList()) to contain a copy of whatever is currently already in the ninja list (...ninjaList) and add the new ninja object to the end of that list (, newNinjaObj);

    }
    

    return (
        <>
            <form onSubmit={userSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" onChange={ (e)=>{ setFirstName(e.target.value)}} value={firstname} />
                </div>
                <div>
                    <label htmlFor="lasttName">Last Name:</label>
                    <input type="text" onChange={ (e)=>{ setLastName(e.target.value)}} value={lastname} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" onChange={ (e)=>{ setEmail(e.target.value)}} value={email} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={ (e)=>{ setPassword(e.target.value)}} value={password} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Passowrd:</label>
                    <input type="password" onChange={ (e)=>{ setConfirmPassword(e.target.value)}} value={confirmPassword} />
                </div>
                <input type="submit" value="Add User" />


            </form>
            {
                userList.map((user, u) => {
                    return <div>
                            <h1>Your Form Data</h1>
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
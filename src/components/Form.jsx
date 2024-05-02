import { useState } from "react";
import React from 'react';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handeleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }



    return (
        <>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName"  placeholder='First Name' onChange={handleFirstName} value={firstName} />
                {firstName.length < 2 && firstName.length > 0? 
                <p>First Name must contain at least 2 characters</p>: 
                null}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName"  placeholder='Last Name' onChange={handleLastName} value={lastName} />
                {lastName.length < 2 && lastName.length > 0? 
                <p>Last Name must contain at least 2 characters</p>: 
                null}
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email"  placeholder='Email' onChange={handleEmail} value={email}/>
                {email.length < 5 && email.length > 0? 
                <p>Email must contain at least 5 characters</p>: 
                null}
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"  placeholder='Password' onChange={handlePassword} value={password} />
                {password.length < 8 && password.length > 0? 
                <p>Password must contain at least 8 characters</p>: 
                null}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={handeleConfirmPassword} value={confirmPassword} />
                {confirmPassword.length < 8 && confirmPassword.length > 0? 
                <p>Password must contain at least 8 characters</p>: 
                null}
            </div>
        </form>
        </>
    );
}

export default Form;

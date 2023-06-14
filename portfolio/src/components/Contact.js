import React from 'react';
import { useState } from 'react';
// import { useForm } from "react-hook-form";

import {validateEmail} from "./utils/validateEmail"
//import {checkLength} from "./utils/checkLength"

const Contact = () => {
    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();


        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('Name or email is invalid. Both are required for submission.');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        if (!setMessage(message)) {
            setErrorMessage('Message required.');
            return
        }

        // Alert the person wanting to contact me that the message has been sent
        alert(`Thank you, ${name}! I will get back to you ASAP with the email you provided. Your message says: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <section id="contact" className="content" >
            <form className="form box">
                <p className="title">Contact Me</p>
                <div className="field">
                    <label className="label">Name:</label>
                    <div className="control">
                        <input
                            id="name"
                            value={name}
                            onChange={handleInputChange}
                            name="name"
                            type="text"
                            placeholder="e.g Anne Elliot"
                            required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input id="email"
                        value={email}
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        placeholder="e.g. anne@gmail.com"
                        required />
                    </div>
                </div>

                <label className="label">Say something:</label>
                <div className="control">
                    <textarea id="message"
                    value={message}
                    onChange={handleInputChange}
                    name="textarea" 
                    placeholder="e.g. Something here..."
                    rows="5"
                    cols="30" 
                    required>
                    </textarea>
                </div>

                <div className="control">
                    <button type="button" className="button submit m-3" onClick={handleFormSubmit}>Submit</button>
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            </form>
        </section>
    )
}
export default Contact
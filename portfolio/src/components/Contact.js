import React from 'react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const { email, value } = event.target;
        const { message, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, [name]: value },
            { ...prevFormData, [email]: value },
            { ...prevFormData, [message]: value }
        ));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        // USING dotenv: on submit, email me
        )
    };


    const Contact = () => {
        return (
            <section id="contact" className="content" >
                <form className="form box">
                    <p className="title">Contact Me</p>
                    <div className="field">
                        <label className="label">Name:</label>
                        <div className="control">
                            <input id="name" name="name" value={formData.name} onChange={handleChange} className="input" type="text" placeholder="e.g Anne Elliot" required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email:</label>
                        <div className="control">
                            <input id="email" name="email" value={formData.email} onChange={handleChange} className="input" type="email" placeholder="e.g. anne@gmail.com" required />
                        </div>
                    </div>

                    <label className="label">Say something:</label>
                    <div className="control">
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="textarea" placeholder="e.g. Something"></textarea>
                    </div>

                    <div className="control">
                        <button className="button submit m-3">Submit</button>
                    </div>
                </form>
            </section>
        )
    }
}
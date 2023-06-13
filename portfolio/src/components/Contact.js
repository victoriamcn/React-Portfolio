import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";



const Contact = () => {
const [formData, setFormData] = useState({ name: "", email: "", message: "" });
const { register, handleSubmit, formState:{errors} } = useForm();


const handleChange = (event) => {
    const { name, value } = event.target;
    // const { email, value } = event.target;
    //const { message, value } = event.target;
    setFormData((prevFormData) => (
        { ...prevFormData, [name]: value }
        //{ ...prevFormData, [email]: value },
        //{ ...prevFormData, [message]: value }
    ));
};

const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        // USING dotenv: on submit, email me
    )
}


    return (
        <section id="contact" className="content" >
            <form className="form box" onSubmit={handleSubmit(onSubmit)} action="mailto:vmcnorrill@gmail.com" method="post" enctype="text/plain">
                <p className="title">Contact Me</p>
                <div className="field">
                    <label className="label">Name:</label>
                    <div className="control">
                        <input id="name" value={formData.name} onChange={handleChange} name="name" {...register("name", { required: true })} type="text" placeholder="e.g Anne Elliot" required />
                        {errors.name && <p>Name is required</p>}
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input id="email" value={formData.email} onChange={handleChange} name="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i  })} type="email" placeholder="e.g. anne@gmail.com" required />
                        {errors.email && <p>Email is required. Please submit valid email.</p>}
                    </div>
                </div>

                <label className="label">Say something:</label>
                <div className="control">
                    <textarea id="message" value={formData.message} onChange={handleChange} name="textarea" placeholder="e.g. Something"></textarea>
                    {errors.message && <p>Message is required.</p>}
                </div>

                <div className="control">
                    <button type="submit" name="submit" value="Submit" className="button submit m-3" id="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}
export default Contact
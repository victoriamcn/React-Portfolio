import React, { useState, useEffect  }  from 'react';

function ContactForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    let [name, setName] = useState(
        function handleNameInput(event) {
            setName({ ...name, name: e.target.value });
        }
    ) 

    let [email, setEmail] = useState("")

    let [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }
}

const Contact = () => {
    return (
        <section id="#contact" className="content container is-fluid" >

            <h2 className="title">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name:</label>
                    <div className="control">
                        <input className="input" value={formData.name} type="text" placeholder="e.g Anne Elliot" onChange={handleNameInput} required/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input className="input" value={formData.email} type="email" placeholder="e.g. anne@gmail.com" required />
                    </div>
                </div>

                <label className="label">Say something:</label>
                <div class="control">
                    <textarea class="textarea" value={formData.message} placeholder="e.g. Something"></textarea>
                </div>

                <div class="control">
                    <button class="button submit ">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
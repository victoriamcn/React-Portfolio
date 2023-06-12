import React  from 'react';

//{ useState, useEffect  }

// function ContactForm(props) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });
    
//     let [name, setName] = useState(
//         function handleNameInput(event) {
//             setName({ ...name, name: e.target.value });
//         }
//     ) 

//     let [email, setEmail] = useState("")

//     let [message, setMessage] = useState("")

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(formData)
//     }
// }

const Contact = () => {
    return (
        <section id="contact" className="content" >
            {/*onSubmit={handleSubmit}*/}
            <form className="form box">
            <p className="title">Contact Me</p>
                <div className="field">
                    <label className="label">Name:</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Anne Elliot" required/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input className="input"  type="email" placeholder="e.g. anne@gmail.com" required />
                    </div>
                </div>

                <label className="label">Say something:</label>
                <div className="control">
                    <textarea className="textarea" placeholder="e.g. Something"></textarea>
                </div>

                <div className="control">
                    <button className="button submit m-3">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
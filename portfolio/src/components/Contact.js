import React from 'react'

const Contact = () => {
    return (
        <section id="#contact" className="content container is-fluid" >

            <h2 className="title">Contact</h2>

            <div className="field">
                <label className="label">Name</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Anne Elliot" required />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. anne@gmail.com" required />
                </div>
            </div>

            <div class="control">
                <label className="label">Subject</label>
                <div class="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                    </select>
                </div>
            </div>

            <div class="control">
                <button class="button submit ">Submit</button>
            </div>
        </section>
    )
}

export default Contact
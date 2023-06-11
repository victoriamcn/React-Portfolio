//with a Navigation component within it that’s used to conditionally render 
//About Me, Portfolio, Contact, and Resume sections.
import React from 'react'
import Logo from '../images/VictoriaDesigns-BIG.png'

const Navigation = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/#" className="navbar-item">
                        <img class="logo" src={Logo} alt="Victoria Designs logo. Bright red and peach colors. Two swallows pictured." />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a href="/#projects" className="navbar-item">
                            <p className="has-text-weight-bold">Projects</p>
                        </a>
                        <a href="/#about" className="navbar-item">
                            <p className="has-text-weight-bold"> About</p>
                        </a>
                        <a href="/#resume" className="navbar-item">
                            <p className="has-text-weight-bold">Resume</p>
                        </a>
                        <a href="/#contact" className="navbar-item">
                            <p className="has-text-weight-bold">Contact</p>
                        </a>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navigation;
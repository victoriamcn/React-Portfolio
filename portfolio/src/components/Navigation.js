/* eslint-disable jsx-a11y/anchor-is-valid */
//with a Navigation component within it that’s used to conditionally render 
//About Me, Portfolio, Contact, and Resume sections.
import React from 'react'
//import Logo from '../images/VictoriaDesigns-BIG.png'

const Navigation = () => {
    return (
        <section className="hero is-halfheight-with-navbar herobackground">


            {/* Hero Centered */}
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="victoriatitle">
                        Victoria McNorrill
                    </p>
                    <p className="victoriasubtitle">
                        Full Stack Web Developer
                    </p>
                </div>
            </div>
            {/* Hero footer: will stick at the bottom */}
            <div className="hero-foot">
                <nav className="tabs is-boxed is-small">
                    <div className="container">
                        <ul>
                            <li><a className="navlink has-text-weight-semibold" href="#projects">Projects</a></li>
                            <li><a className="navlink has-text-weight-semibold is-active" href="#about">About</a></li>
                            <li><a className="navlink has-text-weight-semibold" href="#resume">Resume</a></li>
                            <li><a className="navlink has-text-weight-semibold" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </section>
    )
}

export default Navigation;